import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Spinner, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import { useBeforeunload } from 'react-beforeunload';
import Web3 from 'web3';

import {
  _isValidChainId,
  getDefaultAddres,
  getFactoryContractInstance,
  getAuctionContractInstance,
  getAuctionBNBContractInstance,
  getNFTContractInstance,
} from '../../utils/web3';
import { AuctionAddress, DefaultAvatar, FactoryAddress } from '../../constants';
import { nFormatter } from '../../utils/helper';
import restApi from '../../utils/restApi';

import spaceBack from '../../assets/img/spaceback.png';
import LikeIcon from '../../components/Main/LikeIcon';
import moonstartoken from '../../assets/img/icons/moonstar-icon.svg';
import bnbIcon from '../../assets/img/icons/bnb-icon.svg';
import { TokenIcon } from '../../components/Main/ItemCard';

const ViewNFT = () => {
  const params = useParams();
  const web3 = useSelector((state) => state.web3);
  const price = useSelector((state) => state.price);
  const [myNft, setMyNFT] = useState([]);
  const [isMyNft, setIsMyNft] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [status, setStatus] = useState(false);
  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startPrice, setStartPrice] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [updatePriceProcessing, setUpdatePriceProcessing] = useState(false);
  const [startAuctionProcessing, setStartAuctionProcessing] = useState(false);
  const [approving, setApproving] = useState(false);
  const [locking, setLocking] = useState(false);
  const [countdownDate, setCountdownDate] = useState();
  const [key, setKey] = useState();
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

  useBeforeunload((event) => {
    if (approving || locking || updatePriceProcessing || startAuctionProcessing) {
      event.preventDefault();
    }
  });

  // Cooldown setting
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

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  useEffect(() => {
    if (myNft.auction) setInterval(() => setNewTime(), 1000);
  }, [countdownDate]);

  useEffect(() => {
    fetchItem();
  }, []);

  const history = useHistory();
  const linkToAccount = (account) => {
    if (!account) {
      return;
    }
    if (!web3.userAccount) {
      history.push(`/profile/${account}`)
      return;
    }
    history.push(`/profile/${account.toLowerCase() === web3.userAccount.toLowerCase() ? '' : account}`)
  }

  const fetchItem = () => {
    restApi.get(`item/${params.collectionId}/${params.id}`).then(res => {
      if (!res.data.item) {
        setNotFound(true);
      } else {
        const item = res.data.item
        setMyNFT(item)
        setIsMyNft(web3.userAccount && (item.owner.toLowerCase() == web3.userAccount.toLowerCase()
          || item.pairOwner.toLowerCase() === web3.userAccount.toLowerCase()))

        setStatus(item.status);
        if (item.auction)
          setCountdownDate(new Date(item.auctionData.endDate).getTime());
        setStartPrice(item.price);
      }
    }).catch(e => {
      console.log(e)
      setNotFound(true);
      return;
    })
  }

  // Update NFT status for public or private
  const updateNFTStatus = async (e, approveType) => {
    const isValidNetwork = await _isValidChainId();
    if (!isValidNetwork) {
      toast.error(
        'Unsupported network. Please change your network into BSC Testnet '
      );
      return;
    }
    console.log('approve type === ', approveType);
    try {
      const userAddress = await getDefaultAddres();
      const factoryContract = getFactoryContractInstance();
      const { ethereum } = window;
      const web3 = new Web3(ethereum);
      const price = web3.utils.toWei(myNft.price, 'ether')
      if (approveType) {
        setApproving(true);
        const nftContract = getNFTContractInstance(myNft.collectionId);
        const approved = await nftContract.methods.isApprovedForAll(userAddress, FactoryAddress).call();
        if (!approved) {
          await nftContract.methods
            .setApprovalForAll(FactoryAddress, true)
            .send({ from: userAddress });
        }
        await factoryContract.methods
          .list(myNft.collectionId, userAddress, myNft.tokenId, myNft.currency, price)
          .send({ from: userAddress });

        setApproving(false)
        toast.success('NFT Item listed to Marketplace successfully');
      } else {
        setLocking(true)
        await factoryContract.methods
          .delist(myNft.collectionId, myNft.tokenId)
          .send({ from: userAddress });
        setLocking(false)
        toast.success('NFT Item delisted from Marketplace successfully');
      }

      setStatus(approveType);
      fetchItem();
    } catch (err) {
      console.log(err);
      toast.error('Error: Please confirm metamask connection and try again');
    }
  };

  // Start Auction
  const startAuction = async () => {
    const isValidNetwork = await _isValidChainId();
    if (!isValidNetwork) {
      toast.error(
        'Unsupported network. Please change your network into BSC Testnet '
      );
      return;
    }
    if (startDate === '') {
      toast.error('Please select Start Date');
      return;
    }
    if (endDate === '') {
      toast.error('Please select End Date');
      return;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (end.getTime() < start.getTime()) {
      toast.error('Please select correct Date');
      return;
    }
    if (startPrice === '') {
      toast.error('Please input start Price');
      return;
    }
    setStartAuctionProcessing(true);

    try {
      let auctionContract;
      const { ethereum } = window;
      const web3 = new Web3(ethereum);
      const userAddress = await getDefaultAddres();
      const factoryContract = getFactoryContractInstance();
      if (myNft.currency) {
        auctionContract = getAuctionBNBContractInstance();
      } else {
        auctionContract = getAuctionContractInstance();
      }

      let newStartPrice;
      if (myNft.currency) newStartPrice = web3.utils.toWei(startPrice, 'ether');
      else newStartPrice = web3.utils.toWei(startPrice, 'ether');
      const calculatedPrice = web3.utils.toHex(newStartPrice);
      await factoryContract.methods
        .setApprovalForAll(AuctionAddress, true)
        .send({
          from: userAddress,
        });
      await auctionContract.methods
        .createAuction(
          myNft.tokenId,
          end.getTime(),
          calculatedPrice,
          5,
          userAddress,
          userAddress
        )
        .send({ from: userAddress });

      // const updates = {};
      // updates[`/nftlist/${key}/auction`] = true;
      // updates[`/nftlist/${key}/auctionData/startDate`] = startDate;
      // updates[`/nftlist/${key}/auctionData/endDate`] = endDate;
      // updates[`/nftlist/${key}/auctionData/startPrice`] = startPrice;
      // await myfirebase.database().ref().update(updates);
      window.location.reload();
    } catch (err) {
      toast.error('Cannont start Auction');
      console.log(err);
    }
    setStartAuctionProcessing(false);
  };

  // Update Price
  const updatePrice = async () => {
    const isValidNetwork = await _isValidChainId();
    if (!isValidNetwork) {
      toast.error(
        'Unsupported network. Please change your network into BSC Testnet '
      );
      return;
    }
    if (newPrice === '') {
      toast.error('Please input new Price');
      return;
    }
    const validChain = await _isValidChainId();
    if (!validChain) {
      toast.error('Upsupported network. Please change network');
      return;
    }
    setUpdatePriceProcessing(true);

    const factoryContract = getFactoryContractInstance();
    const userAddress = await getDefaultAddres();
    const { ethereum } = window;
    const web3 = new Web3(ethereum);
    try {
      let nftPrice;
      if (myNft.currency) nftPrice = web3.utils.toWei(newPrice, 'ether');
      else nftPrice = web3.utils.toWei(newPrice, 'ether');

      if (myNft && myNft.status) {
        const calculatedPrice = web3.utils.toHex(nftPrice);
        await factoryContract.methods
          .updatePrice(myNft.collectionId, myNft.tokenId, calculatedPrice)
          .send({ from: userAddress });
      }

      const newItem = await restApi.post('item/update_price', {
        collectionId: myNft.collectionId,
        tokenId: myNft.tokenId,
        price: String(newPrice),
      })

      fetchItem();
      toast.success('Successfully updated');
    } catch (err) {
      console.log(err);
    }
    setUpdatePriceProcessing(false);
  };
  return (
    <>
      {myNft.name ? (
        <section
          data-aos="fade-up"
          data-aos-delay="300"
          className="mb-5 nft-single-card-section"
        >
          <div className="container">
            <div style={{ background: `url(${spaceBack}) no-repeat bottom/cover`, height: '12rem' }}></div>
            <div className="nft-single-card nft-card--expand row g-0">
              <div className="col-lg-6">
                <div className="d-flex align-items-center mt-3 mb-1">
                  <h4 style={{marginRight: 'auto'}}>
                    {myNft.status ? 'Listed' : 'Unlisted'}
                  </h4>
                  {isMyNft && ( !myNft.status ? (
                    <Button
                      color="primary"
                      onClick={(e) => updateNFTStatus(e, true)}
                      size="sm"
                    >
                      {approving ? <Spinner size="sm" /> : 'List NFT'}
                    </Button>
                  ) : (
                    <Button
                      color="danger"
                      onClick={(e) => updateNFTStatus(e, false)}
                      size="sm"
                    >
                      {locking ? <Spinner size="sm" /> : 'Delist NFT'}
                    </Button>
                  ))}
                </div>
                <div className="nft-card__img_full text-center">
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
                        <source src={`${myNft.image}#t=0.5`} type="video/mp4" />
                        <source src={`${myNft.image}#t=0.5`} type="video/ogg" />
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
              <div className="col-lg-6 ps-lg-5">
                <div className="nft-card__body">
                  <div className="nft-card__meta py-2">
                    <h2 className="nft-card__title">{myNft.name}</h2>
                    <div className="d-flex align-items-center">
                      <LikeIcon likes={myNft.likes} enabled collectionId={myNft.collectionId} tokenId={myNft.tokenId} />
                    </div>
                  </div>

                  <h4 className="nft-card__xdr mb-3">
                    <div className="d-flex flex-row justify-content-between flex-lg-wrap flex-nowrap mt-2">
                      <div className="d-flex align-items-center text-white w-100">
                        <TokenIcon src={myNft.currency ? bnbIcon : moonstartoken} className="me-2" />
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
                      <span className="btn btn-white-outline btn-sm mt-3">
                        {myNft.category}
                      </span>
                    </div>
                  </h4>
                  <div className="nft-card__details my-3">
                    <p>{myNft.description}</p>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6">
                      <h4 className="text-secondary">CREATOR</h4>
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
                      <h4 className="text-secondary">OWNER</h4>
                      <div className="d-flex align-items-center mt-2" onClick={() => linkToAccount(myNft.creator)}>
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
                </div>

                <div className="tabs-g mt-4">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        href="#"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#details"
                      >
                        Auction
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
                        data-bs-target="#history"
                      >
                        History
                      </a>
                      {isMyNft && (<a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#updatePrice"
                      >
                        Update Price
                      </a>)}
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="details"
                      role="tabpanel"
                      aria-labelledby="details-tab"
                    >
                      <div className="py-4 row">
                        {!myNft.auction ? (
                          <>
                            <div className="col-md-6 col-lg-6 col-sm-12">
                              <h6 className="mb-3"> Start Time </h6>
                              <div className="group-input mb-3">
                                <input
                                  type="date"
                                  placeholder="Auction End Time"
                                  className="form-air"
                                  value={startDate}
                                  onChange={(e) => setStartDate(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12">
                              <h6 className="mb-3"> End Time </h6>
                              <div className="group-input mb-3">
                                <input
                                  type="date"
                                  placeholder="Auction End Time"
                                  className="form-air"
                                  value={endDate}
                                  onChange={(e) => setEndDate(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12">
                              <h6 className="mb-3"> Start Price </h6>
                              <div className="group-input mb-3">
                                <input
                                  type="text"
                                  placeholder="Auction Start Price"
                                  className="form-air"
                                  value={startPrice}
                                  onChange={(e) =>
                                    setStartPrice(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            {isMyNft && (<div className="mt-4">
                              <button
                                className="btn btn-min-width btn-primary ms-4"
                                onClick={startAuction}
                              >
                                {startAuctionProcessing ? (
                                  <Spinner size="sm" />
                                ) : (
                                  'Start Auction'
                                )}
                              </button>
                            </div>)}
                          </>
                        ) : (
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
                              <div className="time">
                                {state.minutes || '00'}
                              </div>
                              <small className="time-text">Minutes</small>
                            </div>
                            <div className="time-section">
                              <div className="time">:</div>
                            </div>
                            <div className="time-section">
                              <div className="time">
                                {state.seconds || '00'}
                              </div>
                              <small className="time-text">Seconds</small>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="bids"
                      role="tabpanel"
                      aria-labelledby="bids-tab"
                    >
                      <div className="py-4"></div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="owners"
                      role="tabpanel"
                      aria-labelledby="owners-tab"
                    ></div>
                    <div
                      className="tab-pane fade"
                      id="history"
                      role="tabpanel"
                      aria-labelledby="history-tab"
                    >
                      <div className="col-12 mt-3">
                        <h4>Transaction Hash</h4>
                        <div className="d-flex align-items-center mt-2">
                          <div className="ms-3">
                            <a
                              href={`https://testnet.bscscan.com/tx/${myNft.txHash}`}
                              target="_blank"
                            >
                              {myNft.txHash &&
                                myNft.txHash.substr(0, 10) +
                                '***' +
                                myNft.txHash.substr(
                                  myNft.txHash.length - 10,
                                  10
                                )}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {isMyNft && (<div
                      className="tab-pane fade"
                      id="updatePrice"
                      role="tabpanel"
                      aria-labelledby="history-tab"
                    >
                      <div className="row mt-3">
                        <div className="col-md-6 col-lg-6 col-sm-12">
                          <h6 className="mb-3"> New Price </h6>
                          <div className="group-input mb-3">
                            <input
                              type="text"
                              placeholder="New Price"
                              className="form-air"
                              value={newPrice}
                              onChange={(e) => setNewPrice(e.target.value)}
                            />
                          </div>
                          <p className="mb-0">
                            <span className="text-muted"> current Price: </span>{' '}
                            {myNft.price} {myNft.currency ? 'BNB' : 'MOONSTAR'}
                          </p>
                        </div>

                        <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
                          <button
                            className="btn btn-primary ms-4"
                            onClick={updatePrice}
                          >
                            {updatePriceProcessing ? (
                              <Spinner size="sm" />
                            ) : (
                              'UPDATE PRICE'
                            )}
                          </button>
                        </div>
                      </div>
                    </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="col-12 text-center my-5">
          <Spinner size="md" />
        </div>
      )}

    </>
  );
};
export default ViewNFT;
