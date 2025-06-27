Atheist World AWT Project Setup Guide
This guide explains how to deploy the AWT smart contract on BSC Testnet using Remix and host the DApp on Netlify manually. No command-line knowledge is required.
Step 1: Set Up Wallet

Install a Web3 wallet (MetaMask: https://metamask.io, Trust Wallet: https://trustwallet.com, or others).
Add BSC Testnet to your wallet:
Network Name: Binance Smart Chain Testnet
RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/
Chain ID: 97
Currency Symbol: tBNB


Get tBNB from a faucet:
Visit https://www.bnbchain.org/en/testnet-faucet.
Enter your wallet address and request tBNB (0.1-0.5 tBNB is enough).



Step 2: Deploy Smart Contract on Remix

Open Remix IDE (https://remix.ethereum.org).
Create a new file named AWToken.sol.
Copy-paste the code from AWToken.sol (provided).
Ensure OpenZeppelin v5.0.0 dependencies are used:
Imports use @openzeppelin/contracts@5.0.0/...:
token/ERC20/extensions/ERC20Burnable.sol
access/Ownable.sol
utils/ReentrancyGuard.sol
utils/Pausable.sol




Compile the contract:
Go to "Solidity Compiler" tab (left sidebar).
Select compiler version 0.8.0 or higher.
Click "Compile AWToken.sol".


Deploy the contract:
Go to "Deploy & Run Transactions" tab.
Select "Injected Provider - MetaMask" as Environment (or use WalletConnect for Trust Wallet).
Connect your wallet when prompted.
In the "AWToken" section, enter your wallet address as _feeCollector.
Click "Deploy" and confirm the transaction in your wallet.


Copy the deployed contract address (e.g., 0x44036545a95BCBe6BFC22F7E55d40c370C849e15).
Get the contract ABI:
In "Solidity Compiler" tab, click "ABI" button and copy the JSON.



Step 3: Update Frontend

Open index.html and app.js in a text editor (like Notepad).
Ensure the contract address in app.js is 0x44036545a95BCBe6BFC22F7E55d40c370C849e15.
Ensure the contract ABI in app.js matches the provided ABI.
Save both files.

Step 4: Host DApp on Netlify

Sign up on Netlify (https://app.netlify.com).
Click "New site from Git" > "Manual Deploy".
Drag and drop index.html and app.js into the upload area.
After deployment, Netlify will provide a URL (e.g., https://your-site.netlify.app).
Visit the URL, connect your wallet, and test the DApp.

Step 5: Test the DApp

Open the Netlify URL in your browser.
Click "Connect Wallet" and select your wallet (MetaMask, Trust Wallet, etc.).
Test features:
Claim 100 AWT Welcome Bonus (after staking 100 AWT).
Enter a referrer address (or leave blank) and stake 100+ AWT.
Transfer AWT to another wallet.
Withdraw staked AWT.
Check referral count and balance in the dashboard.


Monitor transactions on BscScan Testnet (https://testnet.bscscan.com).

Step 6: Owner Functions (via Remix)

Pause/unpause staking:
In Remix, under "Deployed Contracts", call pauseStaking() or unpauseStaking().


Pause/unpause referrals:
Call pauseReferrals() or unpauseReferrals().


Update commission rates:
Call updateCommissionRate(600, 300, 150) for 6%, 3%, 1.5% rates.


Track BNB fees on BscScan using your feeCollector address.

Step 7: Production Setup (Tailwind CSS)
The index.html uses cdn.tailwindcss.com for testing. For production:

Install Node.js (https://nodejs.org).
Create a new directory and initialize a project:mkdir awt-dapp
cd awt-dapp
npm init -y


Install Tailwind CSS:npm install -D tailwindcss
npx tailwindcss init


Create src/input.css:@tailwind base;
@tailwind components;
@tailwind utilities;


Update tailwind.config.js:module.exports = {
  content: ["./*.html"],
  theme: { extend: {} },
  plugins: [],
}


Build CSS:npx tailwindcss -i ./src/input.css -o ./dist/output.css


Update index.html to use dist/output.css instead of cdn.tailwindcss.com:<link href="dist/output.css" rel="stylesheet">


Copy index.html, app.js, and dist/output.css to Netlify for production deployment.

Troubleshooting

Wallet not connecting: Ensure wallet is on BSC Testnet, try a different browser, or clear browser cache (Ctrl+Shift+R).
Insufficient tBNB: Request more tBNB from the faucet.
Contract errors: Check Remix console for error messages and ensure correct inputs.
Import errors: Use GitHub URLs for OpenZeppelin v5.0.0:
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/extensions/ERC20Burnable.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/access/Ownable.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/ReentrancyGuard.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/Pausable.sol


CSP errors: Ensure <meta http-equiv="Content-Security-Policy"> includes https://cdn.tailwindcss.com and other required sources.
Ethers.js/WalletConnect errors: Verify scripts load in browser DevTools (F12 > Network tab).
Paused features: If staking/referrals are paused, a notification will show in the DApp.

For support, join BNB Chain Discord (https://discord.com/invite/bnbchain) or ask me for help.
