import React from 'react';
import './FrontPage.css';
import VotingImage from './Block.jpg';

function FrontPage() {
  return (
    <div className="front-page">
      <header >
        <h1>Welcome to Online Voting System</h1>
      </header>

      <section className="about-blockchain">
        <br></br>
        <h2>About Blockchain</h2>
        <p>
          Blockchain is a revolutionary technology that forms the foundation of cryptocurrencies like Bitcoin.
          It is a distributed and decentralized digital ledger that records transactions across multiple computers in a secure and transparent way.
          Instead of relying on a central authority, blockchain uses a consensus mechanism to validate and store data, making it virtually immutable and tamper-proof.
          This technology has the potential to transform various industries, including voting systems.
        </p>
      </section>
        <br></br>
      <section className="content-grid">
      
        <div className="info top" >
          <img className='icon' src="secure.png" alt="Secure" />
          <br></br>
          <h3>Secure</h3>
          <p>Your votes are secure</p>
          
        </div>
        <div className="info left">
          <img className='icon' src="decentralized.png" alt="Decentralized" />
          <br></br>
          <h3>Decentralized</h3>
          <p>Eliminating central authorities</p>
          
        </div>
        <div className="voting-image">
          <img src={VotingImage} alt="Voting" />
        </div>
        <div className="info right">
          <img className='icon' src="immutable.png" alt="Immutable" />
          <br></br>
          <h3>Immutable</h3>
          <p> Records cannot be altered</p>
        </div>
        <div className="info bottom" >
          <img className='icon' src="transparent.png" alt="Transparent" />
          <br></br>
          <h3>Transparent</h3>
          <p>Ensuring openness in the process</p>
        </div>
      </section>

      <section className="get-started">
        <h2>Get Started</h2>
        <p>
          Experience the future of voting with our Blockchain Voting System. Join as a voter or an administrator to witness the power of decentralization and transparency in elections.
        </p>
      </section>
    </div>
  );
}

export default FrontPage;
