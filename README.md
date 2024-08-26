# Smart Contract Integrated Front-End


The Divij Bank combines smart contract functionality with an intuitive front-end interface. Key features include:

Total Balance: View the total balance of your tokens.
Total Supply: Check the total supply of tokens.
Last Withdrawal: Track the timestamp of the last withdrawal.
Recipient Address: Enter the recipient's address for token transfers.
Withdraw Tokens: Easily withdraw tokens to specified addresses.

## Description

This smart contract demonstrates essential Solidity features when integrated with a front-end application, including:

Contract Management: Efficiently manage the contract's state and functions.
Snowtrace Testnet: Utilize the Snowtrace testnet for testing and development.
Ganache: Use Ganache for a local blockchain environment.
Scripts: Implement various scripts for contract deployment and interaction.
Metamask Bridging: Connect the front-end with Metamask for seamless user experience.

Smart Contract Functions
Total Supply: Display the total supply of tokens.
Last Withdrawal: Show the timestamp of the last withdrawal transaction.
Balance: Display the user's token balance.
Transfer Tokens: Transfer tokens to a specified recipient.
Custom Error Handling: Handle specific constraints with custom errors.

## Getting Started
Installing
To run this program, you'll need:
EVM-Compatible Environment: Remix IDE for Solidity contracts.
Development Environment: Visual Studio Code for front-end development (HTML, JavaScript, and CSS).

### Executing program
1. Smart Contract: Create a new Solidity file (.sol extension) and paste the following code:

       // SPDX-License-Identifier: MIT
       pragma solidity ^0.8.0;

       contract DivijShuklaBankToken {
       string public name = "DivijShuklaBankToken";
       string public symbol = "DSBT";
       uint8 public decimals = 18;
       uint256 private _totalSupply = 5000000 * (10 ** uint256(decimals)); // Updated total supply

       mapping(address => uint256) private _balances;

       event Transfer(address indexed from, address indexed to, uint256 value);

       constructor() {
        _balances[msg.sender] = _totalSupply;
       }

       function totalSupply() public view returns (uint256) {
        return _totalSupply;
       }

       function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
       }

       function transfer(address to, uint256 amount) public returns (bool) {
         require(to != address(0), "Transfer to the zero address");
         require(_balances[msg.sender] >= amount, "Insufficient balance");

        _balances[msg.sender] -= amount;
        _balances[to] += amount;

        emit Transfer(msg.sender, to, amount);
        return true;
       }
       }
   
2. JavaScript File: Create a JavaScript file (app.js) and add the following code:


       if (typeof window.ethereum !== 'undefined') {
       window.web3 = new Web3(window.ethereum);
       window.ethereum.enable();
       } else {
        console.log('No Ethereum browser extension detected.');
       }

       const contractAddress = ''; //extracted after contract deployment
       const contractABI = 

       const contract = new web3.eth.Contract(contractABI, contractAddress);
       let lastTransactionTimestamp = 0;

       async function load() {
        const accounts = await web3.eth.getAccounts();
       const totalSupply = await contract.methods.totalSupply().call();
       const balance = await contract.methods.balanceOf(accounts[0]).call();

       document.getElementById('totalSupply').innerText = totalSupply;
       document.getElementById('balance').innerText = balance;
       }

       async function transferTokens() {
       const accounts = await web3.eth.getAccounts();
       const recipient = document.getElementById('recipient').value;
       const amount = document.getElementById('amount').value;

       const startTime = new Date().getTime();
       await contract.methods.transfer(recipient, amount).send({ from: accounts[0] });
       const endTime = new Date().getTime();

       lastTransactionTimestamp = endTime - startTime;
       document.getElementById('lastTransactionDuration').innerText = lastTransactionTimestamp + ' ms';

       load(); 
       }

       window.onload = load;

3. HTML File: Create an HTML file (index.html) and add the following code:

        <!DOCTYPE html>
       <html lang="en">
       <head>
       <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Divij Shukla Bank</title>
        <link rel="stylesheet" href="styles.css">
       </head>
       <body>
        <div class="container">
        <h1>Divij Shukla Bank</h1>
        <div>
            <h2>Total Supply: <span id="totalSupply"></span></h2>
            <h2>Your Balance: <span id="balance"></span></h2>
            <h2>Last Transaction Duration: <span id="lastTransactionDuration"></span></h2>
        </div>
        <div>
            <input type="text" id="recipient" placeholder="Recipient Address">
            <input type="number" id="amount" placeholder="Amount">
            <button onclick="transferTokens()">Transfer</button>
        </div>
        </div>
       <script src="https://cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js"></script>
       <script src="app.js"></script>
       </body>
       </html>

4. CSS File: Create a CSS file (styles.css) and add the following code:

       body {
       font-family: Arial, sans-serif;
       background-color: #f4f4f4;
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100vh;
        margin: 0;
       }

       .container {
        background-color: white;
        padding: 20px;
       border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        max-width: 600px;
       margin: auto;
       }

       h1 {
        text-align: center;
        color: #333;
       }

       h2, h3 {
       color: #666;
       }

       #totalSupply, #balance, #lastTransactionTime {
       font-weight: bold;
        }

       .action-section {
        margin-top: 20px;
       border-top: 1px solid #ccc;
       padding-top: 20px;
       }

       input {
       display: block;
       margin: 10px 0;
       padding: 10px;
       width: calc(100% - 22px);
       border: 1px solid #ccc;
       border-radius: 5px;
       }

       button {
        padding: 10px;
        width: 100%;
        border: none;
        border-radius: 5px;
        background-color: #28a745;
       color: white;
       font-size: 16px;
       cursor: pointer;
       }

       button:hover {
        background-color: #218838;
             }

5. Running the Program: Ensure all files are saved and properly linked. Use Metamask to bridge the contract, and place the contract address and ABI in the JavaScript file. Run the program in Visual Studio Code.


## Help

Common Issues
Contract Compilation Errors:


1.Ensure your Solidity version is compatible (0.8.0 or later).

2.Check for syntax errors or typos in the contract.

Function Call Errors:


1.Ensure you are using the correct contract address and ABI.

2.Check for access restrictions if encountering permission errors (e.g., only owner functions).

Script Errors:


1.Select a compatible script for favorable outcomes.

2.Avoid adding unnecessary scripts.

Planning Errors:

Plan your entire project in advance before starting to code.

## Authors
Divij Shukla
divij.shukla2003@gmail.com


## License

This project is licensed under the Divij Shukla License - see the LICENSE.md file for details
