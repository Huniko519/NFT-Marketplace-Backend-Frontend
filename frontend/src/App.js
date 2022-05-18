import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Publish from './pages/Create';
import Profile from './pages/Profile';
import Marketplace from './pages/Marketplace';
import BuyNFT from './pages/BuyNFT';
import ViewNFT from './pages/ViewNFT';
import Admin from './pages/Admin';
import {setProfile} from './actions/user';
import {updateAccount, updateChainId} from './actions/web3';
import {updatePrice} from './actions/price';
import {CoinGeckoAPIForBNB, CoinGeckoAPIForMoonstar} from './constants';
import restApi from './utils/restApi';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './style.scss';

const App = () => {
  const dispatch = useDispatch();
  const CloseButton = ({closeToast}) => (
    <i onClick={closeToast} className="la la-close notifications-close" />
  );
  useEffect(() => {
    window.addEventListener('load', async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        window.ethereum.on('chainChanged', (_chainId) => {
          dispatch(updateChainId(parseInt(Number(_chainId), 10)));
        });
        window.ethereum.on('accountsChanged', (accounts) => {
          // window.location.reload();
          console.log('accountsChanges')
          dispatch(updateAccount(accounts[0]));
          restApi.get(`user/${accounts[0]}`).then(response => {
            dispatch(setProfile(response.data.user));
          })
        });
      }
    });
  });
  useEffect(() => {
    let interval = setInterval(async () => {
      const resBNB = await fetch(CoinGeckoAPIForBNB);
      const resMOONSTAR = await fetch(CoinGeckoAPIForMoonstar);
      const returnedBNB = await resBNB.json();
      const returnedMoonstar = await resMOONSTAR.json();
      dispatch(
        updatePrice({
          bnb: returnedBNB.binancecoin.usd,
          moonstar: returnedMoonstar.moonstar.usd,
        })
      );
    }, 60000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Publish} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/marketplace" component={Marketplace} />
          <Route path="/profile/:account?" component={Profile} />
          <Route exact path="/buy-nft/:collection/:id" component={BuyNFT} />
          <Route exact path="/view/:collectionId/:id" component={ViewNFT} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
      <Footer />
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        closeButton={<CloseButton />}
      />
    </>
  );
};

export default App;
