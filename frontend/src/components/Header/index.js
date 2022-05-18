import React, {useCallback, useEffect, useState} from 'react';
import Web3 from 'web3';
import WalletConnectProvider from "@walletconnect/web3-provider";
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {
  Heading,
  Text,
  Flex,
  Modal,
  Box,
  Loader,
  Card,
  Image,
  Icon,
  Blockie,
} from 'rimble-ui';
import {
  _isMetaMaskInstalled,
  getDefaultAddres,
  getCurrentChainId,
  getTokenBalance,
  getBNBBalance,
} from '../../utils/web3';
import restApi from '../../utils/restApi.js';
import { useMediaQuery } from 'react-responsive'

import {shortenHex} from '../../utils/helper';
import {DefaultChainID, ChainList} from '../../constants';
import {setProfile} from '../../actions/user';
import {setWeb3, updateAccount} from '../../actions/web3';
import logoImg from '../../assets/img/moonstartoken-logo.png';
import logoImgMobile from '../../assets/img/moonstartoken-logo-mobile.png';
import metamaskImg from '../../assets/img/metamask.png';
import searchImg from '../../assets/img/search.svg';
import Nav from './nav';

const Header = () => {
  const dispatch = useDispatch();
  const web3 = useSelector((state) => state.web3);
  const [isOpen, setIsOpen] = useState(false);

  /*****************************************/
  /* Detect the MetaMask Ethereum provider */
  /*****************************************/
  const [isPendingConnection, setPendingConnection] = useState(false);
  const [userAddress, setUserAddress] = useState(web3.userAccount);
  const [chainId, setChainId] = useState(web3.chainId);
  const [search, setSearch] = useState(web3.chainId);

  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })

  const walletConnectProvider = new WalletConnectProvider({
    rpc: {
      97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      56: "https://bsc-dataseed.binance.org/",
    },
    bridge: 'https://staging.walletconnect.org',
    qrcode: true,
    pollingInterval: 12000
  });

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    setSearch(urlSearchParams.get('search') || '');
  }, []);

  const onChangeSearch = useCallback((e) => {
    setSearch(e.target.value)
  }, []);


  useEffect(() => {
    setChainId(web3.chainId);
    if (chainId !== DefaultChainID) setIsOpen(true);
    else setIsOpen(false);
  }, [chainId, web3.chainId]);

  // Change User Account
  useEffect(() => {
    if(web3.userAccount) {
      setUserAddress(web3.userAccount);
      restApi.get(`user/${web3.userAccount}`).then((response) => {
        dispatch(setProfile(response.data.user));
      })
    } 
  }, [web3.userAccount]);

  const connectMetamaks = async () => {
    if (!isPendingConnection) {
      if (_isMetaMaskInstalled) {
        // Acccounts now exposed
        let web3;
        const {ethereum} = window;
        try {
          // Will open the MetaMask UI
          // You should disable this button while the request is pending!
          setPendingConnection(true);
          await ethereum.request({method: 'eth_requestAccounts'});
          web3 = new Web3(ethereum);
          const _chainId = await getCurrentChainId(web3);
          let usreAccount = await getDefaultAddres(web3);
          const bnbBalance = await getBNBBalance(web3);
          const tokenBalane = await getTokenBalance(web3);
          dispatch(
            setWeb3({
              web3: web3,
              userAccount: usreAccount,
              chainId: _chainId,
              tokenBalane: tokenBalane,
              bnbBalance: bnbBalance,
            })
          );
          
          setUserAddress(usreAccount);
          setChainId(_chainId);
          setPendingConnection(false);
        } catch (error) {
          toast.error('User Rejected to connect metamask');
          console.error(error);
        }
      } else {
        toast.error('Please install Metamask extension');
        return;
      }
    }
  };

  const connectWalletConnect = async () => {
    if (!isPendingConnection) {
      try {
        // Will open the MetaMask UI
        // You should disable this button while the request is pending!
        setPendingConnection(true);
        await walletConnectProvider.enable();
        web3 = new Web3(walletConnectProvider);
        console.log(web3)

        const _chainId = await getCurrentChainId(web3);
        let usreAccount = await getDefaultAddres(web3);
        const bnbBalance = await getBNBBalance(web3);
        const tokenBalane = await getTokenBalance(web3);

        dispatch(
          setWeb3({
            web3: web3,
            userAccount: usreAccount,
            chainId: _chainId,
            tokenBalane: tokenBalane,
            bnbBalance: bnbBalance,
          })
        );
        
        setUserAddress(usreAccount);
        setChainId(_chainId);
        setPendingConnection(false);
      } catch (error) {
        toast.error('User Rejected to connect walletconnect');
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if(walletConnectProvider) {
        // Subscribe to accounts change
        walletConnectProvider.on("accountsChanged", (accounts) => {
          console.log(accounts);
        });

        // Subscribe to chainId change
        walletConnectProvider.on("chainChanged", (chainId) => {
          console.log(chainId);
        });

        // Subscribe to session disconnection
        walletConnectProvider.on("disconnect", (code, reason) => {
          console.log(code, reason);
        });
    }
  }, [walletConnectProvider])

  return (
    <>
      <header className="site-header sticky-top">
        <div className="container-fluid">
          <div className="header-top">
            <div className="header-top__brand">
              <a href="/" className="header-top__brand-logo">
                <img src={isMobile ? logoImgMobile : logoImg} alt="" />
              </a>
              <div className="header-top__brand-txt d-none d-lg-block">
              <a href="/create">
                GET STARTED
                </a>
              </div>
            </div>
            <div className="header-top__search d-none d-xl-block">
              <form action="/marketplace" method="GET" className="form-search">
                <input
                  type="text"
                  name="search"
                  value={search}
                  onChange={(e) => onChangeSearch(e)}
                  className="searchFrm"
                  placeholder="I am looking for..."
                />
                <button type='submit' className="btn btn-primary">
                  {' '}
                  <img src={searchImg} className="searchImg" alt="Search" />{' '}
                </button>
              </form>
            </div>
            <div className="header-top__toolbar">
              <div className="header-top__toolbar-nav">
                <Nav search={search} onChangeSearch={onChangeSearch} />
              </div>
              <div className="header-top__toolbar-notifications">
                <a href="#">
                  <i className="fas fa-bell"></i>
                  <span className="counter">3</span>
                </a>
              </div>
              <div className="header-top__toolbar-btn-group">
                <a
                  href="/create"
                  className="btn btn-primary d-none d-md-inline-block"
                  style={{marginRight: '5px'}}
                >
                  CREATE
                </a>
                {userAddress ? (
                  <a className="btn btn-primary-outline" href="/profile">
                    <Blockie
                      opts={{
                        seed: `${userAddress}`,
                        color: '#dfe',
                        bgcolor: '#a71',
                        size: 6,
                        scale: 2,
                        spotcolor: '#000',
                      }}
                    />
                    <span
                      className="font-weight-bold"
                      style={{
                        fontSize: '13px',
                        color: 'white',
                        paddingBottom: '1px',
                        marginLeft: '3px'
                      }}
                      title={userAddress}
                    >
                      {shortenHex(userAddress, 4)}
                    </span>
                  </a>
                ) : (
                  <button
                    onClick={connectMetamaks}
                    className="btn btn-primary-outline ms-md-2"
                  >
                    CONNECT WALLET
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <Modal isOpen={isOpen}>
        <Card p={0} borderRadius={1} bg={'#08091A'} borderColor={'#7f81a2'} color={'#f5f5f5'}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            borderBottom={1}
            borderColor="near-white"
            p={[3, 4]}
            pb={3}
          >
            <Image
              src={metamaskImg}
              aria-label="MetaMask extension icon"
              size="24px"
              bg={'#08091A'}
            />
            <Heading textAlign="center" as="h1" fontSize={[2, 3]} px={[3, 0]}>
              Switch to the Main Ethereum network
            </Heading>
            <button
              style={{background: '#08091A', border: 'none'}}
              onClick={(e) => {
                setIsOpen(false);
              }}
            >
              <Icon
                name="Close"
                color="moon-gray"
                aria-label="Close and cancel connection"
              />
            </button>
          </Flex>
          <Box p={[3, 4]}>
            <Text textAlign="center">
              This Marketplace only works on the BSC test network. You’re
              currently on <b>{ChainList[chainId]}</b>.
            </Text>
          </Box>
          <Box px={[3, 4]} pb={[3, 4]}>
            <Flex
              flexDirection={['column', 'row']}
              bg={'primary-2x-light'}
              p={[3, 4]}
              alignItems={['center', 'auto']}
            >
              <Loader size={'3em'} mr={[0, 3]} mb={[2, 0]} />
              <Flex
                flexDirection="column"
                alignItems={['center', 'flex-start']}
              >
                <Text fontWeight={4}>Waiting for the right network...</Text>
                <Text fontWeight={2}>Switch networks from your wallet</Text>
              </Flex>
            </Flex>
          </Box>
        </Card>
      </Modal>
    </>
  );
};

export default Header;
