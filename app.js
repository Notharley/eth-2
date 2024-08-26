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
