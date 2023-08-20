import React from 'react';
import './App.css';

function HomePage() {
  return (
    <div className="App">
      <main className="content">
        <div className="photo">
          <img src="vote.gif" alt="Voting GIF" />
        </div>
        <div className="info main">
          <h1>Online Voting System</h1>
          <p>Decentralized, Secure, and Transparent Voting Using Blockchain...</p>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
