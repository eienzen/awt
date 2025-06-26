# Atheist World AWT Project Setup Guide

This guide explains how to deploy the AWT smart contract on BSC Testnet using Remix and host the DApp on Netlify manually. No command-line knowledge is required.

## Step 1: Set Up Wallet
1. Install a Web3 wallet (MetaMask: https://metamask.io, Trust Wallet: https://trustwallet.com, or others).
2. Add BSC Testnet to your wallet:
   - Network Name: Binance Smart Chain Testnet
   - RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/
   - Chain ID: 97
   - Currency Symbol: tBNB
3. Get tBNB from a faucet:
   - Visit https://www.bnbchain.org/en/testnet-faucet.
   - Enter your wallet address and request tBNB (0.1-0.5 tBNB is enough).

## Step 2: Deploy Smart Contract on Remix
1. Open Remix IDE (https://remix.ethereum.org).
2. Create a new file named `AtheistWorldToken.sol`.
3. Copy-paste the code from `AtheistWorldToken.sol` (provided).
4. Compile the contract:
   - Go to "Solidity Compiler" tab (left sidebar).
   - Select compiler version `0.8.0` or higher.
   - Click "Compile AtheistWorldToken.sol".
5. Deploy the contract:
   - Go to "Deploy & Run Transactions" tab.
   - Select "Injected Provider - MetaMask" as Environment (or use WalletConnect for Trust Wallet).
   - Connect your wallet when prompted.
   - In the "AtheistWorldToken" section, enter your wallet address as `_feeCollector`.
   - Click "Deploy" and confirm the transaction in your wallet.
6. Copy the deployed contract address (shown in Remix under "Deployed Contracts").
7. Get the contract ABI:
   - In "Solidity Compiler" tab, click "ABI" button and copy the JSON.

## Step 3: Update Frontend
1. Open `index.html` file in a text editor (like Notepad).
2. Replace `YOUR_CONTRACT_ADDRESS_HERE` with the contract address from Step 2.
3. Paste the contract ABI (from Step 2) into the `contractABI` variable in `index.html`.
4. Save the file.

## Step 4: Host DApp on Netlify
1. Sign up on Netlify (https://app.netlify.com).
2. Click "New site from Git" > "Manual Deploy".
3. Drag and drop the `index.html` file into the upload area.
4. After deployment, Netlify will provide a URL (e.g., https://your-site.netlify.app).
5. Visit the URL, connect your wallet, and test the DApp.

## Step 5: Test the DApp
1. Open the Netlify URL in your browser.
2. Click "Connect Wallet" and select your wallet (MetaMask, Trust Wallet, etc.).
3. Test features:
   - Claim 100 AWT Welcome Bonus (after staking 100 AWT).
   - Enter a referrer address (or leave blank) and stake 100+ AWT.
   - Transfer AWT to another wallet.
   - Withdraw staked AWT.
   - Check referral count and balance in the dashboard.
4. Monitor transactions on BscScan Testnet (https://testnet.bscscan.com).

## Step 6: Owner Functions (via Remix)
1. Pause/unpause staking:
   - In Remix, under "Deployed Contracts", call `pauseStaking()` or `unpauseStaking()`.
2. Pause/unpause referrals:
   - Call `pauseReferrals()` or `unpauseReferrals()`.
3. Update commission rates:
   - Call `updateCommissionRate(600, 300, 150)` for 6%, 3%, 1.5% rates.
4. Track BNB fees on BscScan using your `feeCollector` address.

## Troubleshooting
- **Wallet not connecting**: Ensure your wallet is set to BSC Testnet and try a different browser.
- **Insufficient tBNB**: Request more tBNB from the faucet.
- **Contract errors**: Check Remix console for error messages and ensure correct inputs.
- **Paused features**: If staking/referrals are paused, a notification will show in the DApp.

For support, join BNB Chain Discord (https://discord.com/invite/bnbchain) or ask me for help.