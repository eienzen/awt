import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import AWTokenABI from './AWTokenABI.json';

function App() {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  const infuraUrl = process.env.REACT_APP_INFURA_URL;
  const contractABI = AWTokenABI;
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);
          const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
          setContract(contractInstance);
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        console.log('Please install MetaMask!');
      }
    };
    init();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Wallet connection failed:', error);
      }
    }
  };

  const stake = async () => {
    if (contract && account) {
      try {
        await contract.methods.stake().send({ from: account });
        alert('Staked successfully');
      } catch (error) {
        console.error('Staking failed:', error);
      }
    }
  };

  const unstake = async () => {
    if (contract && account) {
      try {
        await contract.methods.unstake().send({ from: account });
        alert('Unstaked successfully');
      } catch (error) {
        console.error('Unstaking failed:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Atheist World Token</h1>
        {account ? (
          <div>
            <p className="mb-4">Connected: {account.substring(0, 6)}...{account.substring(account.length - 4)}</p>
            <button
              onClick={stake}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
            >
              Stake
            </button>
            <button
              onClick={unstake}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Unstake
            </button>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default App;