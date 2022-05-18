import Web3 from 'web3';
import TokenABI from '../contracts/Moonstar.json';
import FactoryABI from '../contracts/MoonstarFactory.json';
import NFTABI from '../contracts/MoonstarNFT.json';
import AuctionABI from '../contracts/Auction.json';
import AuctionBNBABI from '../contracts/AuctionBNB.json';
import {
  TokenAddress,
  FactoryAddress,
  AuctionAddress,
  AuctionBNBAddress,
} from '../constants';

const {ethereum} = window;
const web3 = new Web3(ethereum);
// Check if the metamas is installed
export const _isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  let {ethereum} = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};
export const getCurrentChainId = async () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const chainID = await web3.eth.net.getId();
  return chainID;
};
// Check current chain is valid or not
export const _isValidChainId = async () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  if (_isMetaMaskInstalled()) {
    const chainID = await web3.eth.net.getId();
    if (chainID === 97) {
      // BSC testnet for demo version
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// Get Factory Contract Instanse
export const getFactoryContractInstance = () => {
  let newFactoryContract = new web3.eth.Contract(
    FactoryABI,
    FactoryAddress
  );
  return newFactoryContract;
};

// Get NFT  Contract Instanse
export const getNFTContractInstance = (address) => {
  let newNFTContract = new web3.eth.Contract(
    NFTABI,
    address
  );
  return newNFTContract;
};

// Get Token Contract Instanse
export const getTokenContractInstance = () => {
  let newTokenContract = new web3.eth.Contract(
    TokenABI,
    TokenAddress
  );
  return newTokenContract;
};
// Get Factory Contract Instanse
export const getAuctionContractInstance = () => {
  let newAuctionContract = new web3.eth.Contract(
    AuctionABI,
    AuctionAddress
  );
  return newAuctionContract;
};
// Get Factory Contract Instanse
export const getAuctionBNBContractInstance = () => {
  let newAuctionContract = new web3.eth.Contract(
    AuctionBNBABI,
    AuctionBNBAddress
  );
  return newAuctionContract;
};
// Get user default wallet address
export const getDefaultAddres = async () => {
  let defaultAccount = await web3.eth.getAccounts();
  return defaultAccount[0];
};

// get current user's BNB Balance
export const getBNBBalance = async () => {
  let userAddress = await getDefaultAddres();
  let defaultBalance = await web3.eth.getBalance(userAddress);
  return web3.utils.fromWei(defaultBalance, 'ether');
};

// Get current user's Token balance
export const getTokenBalance = async () => {
  let tokenContract = await getTokenContractInstance();
  let userAddress = await getDefaultAddres();
  if (tokenContract && userAddress) {
    const temp = await tokenContract.methods.balanceOf(userAddress).call();
    return web3.utils.fromWei(temp, 'ether');
  } else {
    return 0;
  }
};

// Get User NFT Balance
export const getUserNFTBalance = async () => {
  let gameFactory = await getTokenContractInstance();
  let userAddress = await getDefaultAddres();
  if (gameFactory && userAddress) {
    const ntfBalance = await gameFactory.methods.balanceOf(userAddress).call();
    return ntfBalance;
  } else {
    return 0;
  }
};
