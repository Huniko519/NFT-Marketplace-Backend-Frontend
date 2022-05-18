import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {Spinner, Alert} from 'reactstrap';
import {toast} from 'react-toastify';
import {
  _isValidChainId,
  getDefaultAddres,
  getFactoryContractInstance,
  getTokenContractInstance,
  getAuctionContractInstance,
  getAuctionBNBContractInstance,
  getBNBBalance,
} from '../../utils/web3';

import HotLists from './hotlists';
import {FactoryAddress, AuctionAddress, DefaultAvatar} from '../../constants';
import {nFormatter} from '../../utils/helper';
import restApi from '../../utils/restApi';
import spaceBack from '../../assets/img/spaceback.png';
import Web3 from 'web3';
import LikeIcon from '../../components/Main/LikeIcon';
import moonstartoken from '../../assets/img/icons/moonstar-icon.svg';
import bnbIcon from '../../assets/img/icons/bnb-icon.svg';
import { TokenIcon } from '../../components/Main/ItemCard';


const BuyNFT = () => {
  const params = useParams();
  const price = useSelector((state) => state.price);
  const web3 = useSelector((state) => state.web3);
  const [myNft, setMyNFT] = useState([]);
  const [myAddress, setMyAddress] = useState();
  const [bidPrice, setNewPrice] = useState('');
  const [updatePriceProcessing, setUpdatePriceProcessing] = useState(false);
  const [countdownDate, setCountdownDate] = useState();
  const [auctionComplete, setAuctionComplete] = useState(false);
  const [buyProcessing, setBuyProcessing] = useState(false);
  const [cancelAuctionProcessing, setCancelAuctionProcessing] = useState(false);
  const [endAuctionProcessing, setEndAuctionProcessing] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [tokenPrice, setTokenPrice] = useState({
    bnb: price.bnb,
    moonstar: price.moonstar,
  });
  useEffect(() => {
    setTokenPrice(price);
  }, [price]);

  const history = useHistory();
  const linkToAccount = (account) => {
    if(!account) {
      return;
    }
    if(!web3.userAccount) {
      history.push(`/profile/${account}`)
      return;  
    }
    history.push(`/profile/${account.toLowerCase() === web3.userAccount.toLowerCase() ? '':account}`)
  }
  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({days: days, hours: hours, minutes, seconds});
    }
  };
  const createBid = async () => {
    const isValidNetwork = await _isValidChainId();
    if (!isValidNetwork) {
      toast.error(
        'Unsupported network. Please change your network into BSC Testnet '
      );
      return;
    }
    if (bidPrice < myNft.auctionData.startPrice) {
      toast.error(
        `Error: BID Amount must be greater than ${Number(myNft.price) * 1.1}`
      );
      return;
    }

    setUpdatePriceProcessing(true);
    try {
      let auctionContract;
      const {ethereum} = window;
      const web3 = new Web3(ethereum);
      const userAddress = await getDefaultAddres();
      const tokenContract = getTokenContractInstance();
      let nftPrice = bidPrice;
      if (myNft.currency) {
        auctionContract = getAuctionBNBContractInstance();
      } else {
        auctionContract = getAuctionContractInstance();
      }
      // Send ERC20 transaction with web3
      const tokenAmountToApprove = web3.utils.toBN(
        '10000000000000000000000000000000000000'
      );
      const calculatedApproveValue = web3.utils.toHex(tokenAmountToApprove);
      if (!myNft.currency) nftPrice = web3.utils.toWei(bidPrice, 'ether');

      const calculatedPrice = web3.utils.toHex(nftPrice);

      const allowance = await tokenContract.methods
        .allowance(userAddress, AuctionAddress)
        .call();

      if (allowance < calculatedApproveValue) {
        await tokenContract.methods
          .approve(AuctionAddress, calculatedApproveValue)
          .send({from: userAddress});
      }
      let tx;
      if (myNft.currency) {
        tx = await auctionContract.methods
          .createBid(myNft.tokenId, calculatedPrice)
          .send({from: userAddress, value: calculatedPrice});
      } else {
        tx = await auctionContract.methods
          .createBid(myNft.tokenId, calculatedPrice)
          .send({from: userAddress});
      }
      console.log(tx);
      
      restApi.post('item/bid', {
        tokenId: myNft.tokenId,
        collectionId: myNft.collectionId,
        bidder: userAddress,
        price: bidPrice
      }).then(bid => {
        toast.success('Bid Successfully');
        window.location.reload();
      })
    } catch (err) {
      console.log(err);
      toast.error('Error: Please confirm metamask connection and try again');
    }
    setUpdatePriceProcessing(false);
  };
  const endAuction = async () => {
    const isValidNetwork = await _isValidChainId();
    if (!isValidNetwork) {
      toast.error(
        'Unsupported network. Please change your network into BSC Testnet '
      );
      return;
    }
    setEndAuctionProcessing(true);
    try {
      const userAddress = await getDefaultAddres();
      const auctionContract = getAuctionContractInstance();
      const tx = await auctionContract.methods
        .endAuction(myNft.tokenId)
        .send({from: userAddress});
      console.log(tx);

      toast.success('Auction canceled Successfully');

      toast.success('Auction ended Successfully');
      // window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error('Error: Please confirm metamask connection and try again');
    }
    setEndAuctionProcessing(false);
  };

  const cancelAuction = async () => {
    const isValidNetwork = await _isValidChainId();
    if (!isValidNetwork) {
      toast.error(
        'Unsupported network. Please change your network into BSC Testnet '
      );
      return;
    }
    setCancelAuctionProcessing(true);

    try {
      const userAddress = await getDefaultAddres();
      const auctionContract = getAuctionContractInstance();
      await auctionContract.methods
        .cancelAuction(myNft.tokenId)
        .send({from: userAddress});

      restApi.post('item/bid/canccel', {
        tokenId: myNft.tokenId,
        collectionId: myNft.collectionId,
      })

      toast.success('Auction canceled Successfully');
      window.location.reload();
    } catch (err) {
      console.log(err);
      const errMsg = err.message
        ? err.message
        : 'Error: Please confirm metamask connection and try again';
      toast.error(errMsg);
    }
    setCancelAuctionProcessing(false);
  };
  const handleBuyNFT = async () => {
    if(!myAddress) {
      toast.error('Error: Please confirm metamask connection and try again');
      return;
    }
    const isValidNetwork = await _isValidChainId();
    if (!isValidNetwork) {
      toast.error(
        'Unsupported network. Please change your network into BSC Testnet '
      );
      return;
    }
    const userBalance = await getBNBBalance();
    if (userBalance < myNft.price) {
      toast.error('You do not have sufficient Balance');
      return;
    }
    setBuyProcessing(true);
    try {
      const {ethereum} = window;
      const web3 = new Web3(ethereum);
      const userAddress = await getDefaultAddres();
      const factoryContract = getFactoryContractInstance();
      const tokenContract = getTokenContractInstance();
      // Send ERC20 transaction with web3
      const tokenAmountToApprove = web3.utils.toBN(
        '10000000000000000000000000000000000000'
      );
      let nftPrice;
      const calculatedApproveValue = web3.utils.toHex(tokenAmountToApprove);
      if (myNft.currency) nftPrice = web3.utils.toWei(myNft.price, 'ether');
      else nftPrice = web3.utils.toWei(myNft.price, 'ether');

      const calculatedPrice = web3.utils.toHex(nftPrice);
      if(!myNft.currency) {
        const allowance = await tokenContract.methods
          .allowance(userAddress, FactoryAddress)
          .call();
        if (allowance < calculatedPrice) {
          await tokenContract.methods
            .approve(FactoryAddress, calculatedApproveValue)
            .send({from: userAddress});
        }
      }
      await factoryContract.methods
        .buy(myNft.collectionId, myNft.tokenId)
        .send({from: userAddress, value: (myNft.currency ? calculatedPrice : 0)});
      
      restApi.post('item/like', {
        tokenId: myNft.tokenId,
        collectionId: myNft.collectionId,
        address: userAddress,
      })  
      toast.success('You bought NFT successfully');
      window.location = '/profile';
    } catch (err) {
      console.log(err);
      toast.error('Error: Please confirm metamask connection and try again');
    }
    setBuyProcessing(false);
  };

  useEffect(() => {
    if (myNft.auctionData) {
      const now = Date.now();
      const end = new Date(myNft.auctionData.endDate);
      if (end.getTime() < now) {
        setAuctionComplete(true);
      }
      if (myNft.auction && end.getTime() > now) {
        setInterval(() => setNewTime(), 1000);
      }
    }
  }, [countdownDate, myNft]);
  
  useEffect(() => {
    async function init() {
      const addr = await getDefaultAddres();
      setMyAddress(addr);
    }
    restApi.get(`item/${params.collection}/${params.id}`).then(res => {
      if(!res.data.item) {
        setNotFound(true);
      }else {
        const item = res.data.item
        setMyNFT(item)
        if (item.auction)
          setCountdownDate(new Date(item.auctionData.endDate).getTime());
      }
    }).catch(e => {
      console.log(e)
      setNotFound(true);
      return;
    })

    init();
  }, []);
  return (
    <>
      <section
        className="intro-hero"
        style={{background: `url(${spaceBack}) no-repeat center/cover`}}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mx-auto text-center">
              <h4
                className="intro-hero__subtitle"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="/marketplace">
                  <i
                    className="fas fa-chevron-left mr-3"
                    aria-hidden="true"
                  ></i>{' '}
                  Back To Explorer
                </a>
              </h4>
            </div>
          </div>
        </div>
      </section>
      {notFound && (
        <div className='not_found text-center m-5'>
          <img src='/assets/img/404.png' />  
        </div>
      )}
      {!notFound && (myNft.name ? (
        <>
          <section data-aos="fade-up" data-aos-delay="300">
            <div className="container">
              <div className="nft-card nft-card--expand row g-0">
                <div className="col-md-6">
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    {!myNft.auction ? (
                      <div className="row">
                        {auctionComplete ? (
                          <div className="col-md-6 col-lg-6 col-sm-12">
                            <Alert color="primary">Auction Completed!</Alert>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    ) : (
                      <div className="row">
                        <div className="countdown-wrapper">
                          <div className="time-section">
                            <div className="time">{state.days || '0'}</div>
                            <small className="time-text">Days</small>
                          </div>
                          <div className="time-section">
                            <div className="time">:</div>
                          </div>
                          <div className="time-section">
                            <div className="time">{state.hours || '00'}</div>
                            <small className="time-text">Hours</small>
                          </div>
                          <div className="time-section">
                            <div className="time">:</div>
                          </div>
                          <div className="time-section">
                            <div className="time">{state.minutes || '00'}</div>
                            <small className="time-text">Minutes</small>
                          </div>
                          <div className="time-section">
                            <div className="time">:</div>
                          </div>
                          <div className="time-section">
                            <div className="time">{state.seconds || '00'}</div>
                            <small className="time-text">Seconds</small>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="nft-card__img_full">
                    {myNft.assetType === 'audio' ? (
                      <>
                        <audio controls>
                          <source src={myNft.image} type="audio/ogg" />
                          <source src={myNft.image} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </>
                    ) : myNft.assetType === 'video' ? (
                      <>
                        <video
                          width="100%"
                          autoPlay
                          controls
                          muted
                          preload="metadata"
                        >
                          <source
                            src={`${myNft.image}#t=0.5`}
                            type="video/mp4"
                          />
                          <source
                            src={`${myNft.image}#t=0.5`}
                            type="video/ogg"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </>
                    ) : (
                      <>
                        <img src={myNft.image} alt="nft1" />
                      </>
                    )}
                  </div>
                </div>
                <div className="col-md-6 ps-lg-5">
                  <div className="nft-card__body">
                    <div className="nft-card__meta py-2">
                      <h2 className="nft-card__title">{myNft.name}</h2>
                      <div className="d-flex align-items-center">
                        <LikeIcon likes={myNft.likes} enabled collectionId={myNft.collectionId} tokenId={myNft.tokenId}/>
                      </div>
                    </div>

                    <h4 className="nft-card__xdr mb-3">
                      <div className="d-flex align-items-center text-white">
                          <TokenIcon src={myNft.currency ? bnbIcon : moonstartoken} className="me-2"/>
                          <div className="d-flex flex-column priceInUsd">
                              <div className="priceToken">{nFormatter(myNft.price, 1)}</div>
                              <div className="priceUsd">${myNft.currency
                                  ? (
                                      Number(myNft.price) * Number(tokenPrice.bnb)
                                  ).toFixed(2)
                                  : (
                                      Number(myNft.price) *
                                      Number(tokenPrice.moonstar)
                                  ).toFixed(2)}{' '}
                              </div>
                          </div>
                      </div>
                    </h4>
                    <span className="btn btn-white-outline btn-sm">
                      {myNft.category}
                    </span>
                    <div className="nft-card__details my-3">
                      <p>{myNft.description}</p>
                    </div>
                    <div className="row mt-4">
                      <div className="col-6">
                        <h4>CREATOR</h4>
                        <div className="d-flex align-items-center mt-2" onClick={() => linkToAccount(myNft.creator)}>
                          <div className="flex-shrink-0">
                            <div className="nft-card__avatar">
                              <img src={myNft.creatorObj.avatar || DefaultAvatar} alt="avatar" />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            {myNft.creatorObj.name || 'Artist'}
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <h4>OWNER</h4>
                        <div className="d-flex align-items-center mt-2" onClick={() => linkToAccount(myNft.pairOwner)}>
                          <div className="flex-shrink-0">
                            <div className="nft-card__avatar">
                              <img src={myNft.ownerObj.avatar || DefaultAvatar} alt="avatar" />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            {myNft.ownerObj.name || 'Artist'}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tabs-g mt-4">
                      <nav>
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <a
                            href="#"
                            className="nav-link active"
                            data-bs-toggle="tab"
                            data-bs-target="#details"
                          >
                            Details
                          </a>
                          <a
                            href="#"
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#bids"
                          >
                            Bids
                          </a>
                          <a
                            href="#"
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#owners"
                          >
                            Owners
                          </a>
                          <a
                            href="#"
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#history"
                          >
                            History
                          </a>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="details"
                          role="tabpanel"
                          aria-labelledby="details-tab"
                        >
                          {myNft.status && (myAddress || "").toLowerCase() !== myNft.pairOwner && myNft.auction && (
                            <div className="row mt-3">
                              <div className="col-md-6 col-lg-6 col-sm-12">
                                <h6 className="mb-1"> BID Price </h6>
                                <div className="group-input mb-1">
                                  <input
                                    type="text"
                                    placeholder="New BID Price"
                                    className="form-air"
                                    value={bidPrice}
                                    onChange={(e) =>
                                      setNewPrice(e.target.value)
                                    }
                                  />
                                </div>
                                <p className="mb-0">
                                  <span className="text-muted">
                                    {' '}
                                    current Price:{' '}
                                  </span>{' '}
                                  {myNft.auctionData.startPrice || 0} MOONSTAR
                                </p>
                              </div>

                              <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
                                <button
                                  className="btn btn-primary ms-4"
                                  onClick={createBid}
                                >
                                  {updatePriceProcessing ? (
                                    <Spinner size="sm" />
                                  ) : (
                                    'PLACE BID'
                                  )}
                                </button>
                              </div>
                            </div>
                          )} 
                          {myNft.status && (myAddress || "").toLowerCase() == myNft.pairOwner  && myNft.auction && (
                            <>
                              <div className="row mt-3">
                                <div className="col-md-6">
                                  <button
                                    className="btn btn-primary"
                                    onClick={endAuction}
                                  >
                                    {endAuctionProcessing ? (
                                      <Spinner size="sm" />
                                    ) : (
                                      'End Auction'
                                    )}
                                  </button>
                                </div>
                                <div className="col-md-6">
                                  <button
                                    className="btn btn-danger"
                                    onClick={cancelAuction}
                                  >
                                    {cancelAuctionProcessing ? (
                                      <Spinner size="sm" />
                                    ) : (
                                      'Cancel Auction'
                                    )}
                                  </button>
                                </div>
                              </div>
                            </> )}
                            {myNft.status && (myAddress || "").toLowerCase() !== myNft.pairOwner  && !myNft.auction && (
                                <div className="col-md-12 col-lg-12 col-sm-12 mt-5 text-center">
                                  <button
                                    className="btn btn-primary col-sm-12"
                                    onClick={handleBuyNFT}
                                  >
                                    {buyProcessing ? (
                                      <Spinner size="sm" />
                                    ) : (
                                      'BUY NFT'
                                    )}
                                  </button>
                                </div>
                              )}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="bids"
                          role="tabpanel"
                          aria-labelledby="bids-tab"
                        >
                          <div className="py-4">
                            {myNft.bids && myNft.bids.length > 0
                              ? myNft.bids.map((bid, index) => (
                                  <div
                                    className="d-flex align-items-center mt-2"
                                    key={index}
                                  >
                                    <div className="flex-shrink-0">
                                      <div className="nft-card__avatar">
                                        <img
                                          src={myNft.ownerObj.avatar || DefaultAvatar }
                                          alt="avatar"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      {bid.bidder}
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      {bid.price}
                                    </div>
                                  </div>
                                ))
                              : ''}
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="owners"
                          role="tabpanel"
                          aria-labelledby="bids-tab"
                        >
                          <div className="d-flex align-items-center mt-2">
                            <div className="flex-shrink-0">
                              <div className="nft-card__avatar">
                                <img src={myNft.ownerObj.avatar || DefaultAvatar } alt="avatar" />
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              {myNft.ownerObj.name || 'Artist'}
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="history"
                          role="tabpanel"
                          aria-labelledby="bids-tab"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <HotLists collectionId={params.collection}/>
        </>
      ) : (
        <div className="col-12 text-center">
          <Spinner size="md" />
        </div>
      ))}
    </>
  );
};
export default BuyNFT;
