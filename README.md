﻿# Online Voting System using Blockchain

## Overview

The Online Voting System(OVS) using Blockchain is a decentralized application aimed at providing a secure and transparent platform for conducting online elections. By leveraging blockchain technology, this system ensures the integrity and immutability of votes, making the voting process more trustworthy.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Blockchain Technology](#blockchain-technology)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Decentralized Voting:** Utilizes blockchain to distribute and store votes across the network, reducing the risk of tampering.
- **Security:** Implements cryptographic techniques to secure the voting process and user identities.
- **Transparency:** Offers a publicly accessible and verifiable ledger of votes while maintaining voter anonymity.
- **Immutable Records:** Once a vote is recorded on the blockchain, it cannot be altered, ensuring the integrity of the election.
- **User-Friendly Interface:** Provides an intuitive web-based interface for voters to cast their votes and for administrators to manage the election process.

## Getting Started

### Prerequisites
- Node.js and npm
- React.js
- Solidity (Ethereum smart contract language)
- Truffle framework
- Metamask wallet extension for your browser
- Infura account for connecting to the Ethereum network

### Installation
1. Clone this repository.
2. Navigate to the Contracts directory.
3. Install Truffle globally: `npm install -g truffle`
4. Install all dependencies: `npm install`
5. Configure your Ethereum wallet (e.g., Metamask) to connect to a testnet or local blockchain.
6. Obtain an API key from Infura or Alchemy for Ethereum network access.
7. Update the `truffle-config.js` file with your Infura API key and mnemonic.
8. Navigate to the frontend directory.
9. Install all dependencies: `npm install`
10. Copy Voting.json file from build folder to src folder in frontend.
11. Start React app: `npm start`

## Usage
1. Start the development blockchain: `truffle develop`
2. Deploy the smart contract: `truffle migrate`
3. In the `frontend` directory, start the React app: `npm start`
4. Access the web interface through your browser.
5. Connect your Ethereum wallet to the application.
6. Browse available elections, vote for candidates, and submit your vote.
7. Monitor the live vote count and results on the blockchain.

## Blockchain Technology
This project utilizes blockchain to ensure the security and transparency of the voting process. Smart contracts are deployed on the Ethereum network to handle the logic of vote submission, tallying, and result retrieval.

## Contributing
Contributions to this project are welcome! If you want to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-new-feature`
5. Create a Pull Request explaining your changes.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For questions or discussions, feel free to contact us at [patelsohang123@email.com](mailto:patelsohang123@email.com).
