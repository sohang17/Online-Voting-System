import React, { useState, useEffect } from "react";
import "./App.css";
import VoterComponent from "./component/voter";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminComponent from "./component/admin";
import { connectWeb3Metamask } from "./web3_functions";
import FrontPage from "./FrontPage";
import HomePage from "./HomePage";

function App() {
  const [contractInstance, setContract] = useState(null);
  const [accounts, setAccounts] = useState();

  useEffect(() => {
    async function connect() {
      try {
        let { accounts, instance } = await connectWeb3Metamask();
        setAccounts(accounts);
        setContract(instance);
      } catch (error) {
        // -32002 error code means metamask is trying to take permission
        if (error.code !== -32002) {
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
        }
        console.log(error);
      }
    }
    setTimeout(connect, 1500);
  }, []);

  return (
    <div className="App">
      {contractInstance == null ? (
        <>
          <h2 style={{ textAlign: "center" }}>
            Wait a second my System is a little slow
          </h2>
        </>
      ) : (
        <>
          <header className="navbar">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/info">About</a></li>
                <li><a href="/admin">Admin Panel</a></li>
                <li><a href="/voting">Voter Panel</a></li>
              </ul>
            </nav>
          </header>
          <BrowserRouter>
            <div className="frontend-data">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/info" element={<FrontPage />} />
                <Route
                  path="/admin"
                  element={
                    <AdminComponent
                      contractInstance={contractInstance}
                      account={accounts[0]}
                    />
                  }
                />
                <Route
                  path="/voting"
                  element={
                    <VoterComponent
                      contractInstance={contractInstance}
                      account={accounts[0]}
                    />
                  }
                />
              </Routes>
            </div>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
