import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import {Spinner} from 'reactstrap';
import { useBeforeunload } from 'react-beforeunload';
import icon1 from '../../assets/img/icons/1.png';
import spaceBack from '../../assets/img/spaceback.png';
import {toast} from 'react-toastify';
import {Blockie} from 'rimble-ui';
import { login } from '../../actions/user';
import {
  _isMetaMaskInstalled,
  getFactoryContractInstance,
  getDefaultAddres,
  getNFTContractInstance,
} from '../../utils/web3';
import {_objToArray} from '../../utils/helper';
import restApi from '../../utils/restApi';

import useCategories from '../../hooks/useCategories';
import { useDispatch, useSelector } from 'react-redux';
import useCollections from '../../hooks/useCollections';
import SortSelect from '../../components/Main/SortSelect';


const Admin = () => {
  const user = useSelector((state) => state.user);
  const allCollections = useCollections();
  const categories = useCategories();

  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [whitelist, setWhitelist] = useState([]);
  const [isProcessing, setProcessing] = useState(false);
  const [sortBy, setSortBy] = useState('mintedAt');
  const [category, setCategory] = useState('all');
  const [collection, setCollection] = useState('');

  const sortOptions = [
    { value: 'views', label: 'POPULARITY' },
    { value: 'mintedAt', label: 'NEWEST' },
    { value: 'price', label: 'PRICE' }
  ]

  // default did mount
  const [filteredNFTs, setFilteredNFT] = useState([]);
  
  useBeforeunload((event) => {
    if (isProcessing) {
      event.preventDefault();
    }
  });

  const dispatch = useDispatch();
  useEffect(() => {
    async function loginAdmin(user, web3) {
      if(!user || !web3) {
        return;
      }
      const userAddress = await getDefaultAddres();
      if(user.token || user.loading || user.error) {
        return;
      }
    
      await login(dispatch, userAddress, user.nonce)
    }
    
    loginAdmin(user, web3)
  }, [user, web3])

  useEffect(() => {
    if (!collection) {
      setCollection(allCollections.length ? allCollections[0].address : '')
    }
  }, [allCollections]);


  useEffect(() => {
    if (_isMetaMaskInstalled()) {
      const {ethereum} = window;
      const web3 = new Web3(ethereum);
      setWeb3(web3);
    }
  }, []);

  useEffect(() => {
    if(user && user.token && user.admin) {
      fetchItems();
    }
  }, [sortBy, category, collection]);

  useEffect(() => {
    if(collection) 
      fetchWhiteList();
  }, [collection]);

  const fetchItems = () => {
    restApi.get('item', {
      params: {
        status: true,
        collectionId: collection,
        sortDir: 'asc',
        sortBy: sortBy,
        page: 0,
        limit: 10000
      }
    }).then(res => {
      setFilteredNFT(res.data.items);
    }).catch(e => {
      console.log(e)
      setFilteredNFT([]);
    }) 
  }

  const fetchWhiteList = () => {
    restApi.get('collection/whitelist', {
      params: {
        collectionId: collection,
      }
    }).then(res => {
      setWhitelist(res.data.list);
    }).catch(e => {
      console.log(e)
      setWhitelist([]);
    }) 
  }


  const handleChangeCategory = (e, category) => {
    setCategory(category);
  };

  const deleteItem = async (e, collectionId, nftId) => {
    e.preventDefault();
    if (!window.confirm('Are you sure to delete the NFT?')) return;
    try {
      const userAddress = await getDefaultAddres();
      const factoryContract = getFactoryContractInstance();
      await factoryContract.methods.delist(collectionId, nftId).send({from: userAddress});
      fetchItems();
      toast.error('NFT Deleted successfully');
    } catch (err) {
      toast.error(
        'Could not delete NFT. please confirm if you are owner or Metamask connection'
      );
      console.log(err);
    }
  };

  // Sort NFTs by date or price
  const handleSort = (e) => {
    if(e.value) {
      setSortBy(e.value)
    }
  };
  const addCandidates = () => {
    if (address === '') {
      toast.error('Please input user address');
      return;
    }
    if (!web3) {
      toast.error('Please Install metamask');
      setAddress('');
      return;
    }
    if (!web3.utils.isAddress(address.trim())) {
      toast.error('Invalid address format');
      setAddress('');
      return;
    }
    setCandidates([...candidates, address.trim()]);
    setAddress('');
  };
  const addToWhiteList = async (e) => {
    e.preventDefault();
    if(!collection) {
      toast.error(
        'Please select collection first.'
      );
      return;
    }
    if (candidates.length < 3) {
      toast.warning(
        'Please add at least 3 user addresses to reduce transaction fee'
      );
    }
    setProcessing(true);
    const collectionContract = await getNFTContractInstance(collection);
    const userAddress = await getDefaultAddres();
    if (collectionContract) {
      try {
        await collectionContract.methods
          .initWhitelist(candidates)
          .send({from: userAddress});
      } catch (err) {
        console.log(err);
      }
    }
    setProcessing(false);
  };
  
  const removeWhiteList = async (e, collectionId, address) => {
    e.preventDefault();
    if(!collectionId || !address) {
      toast.error(
        'Please select collection first.'
      );
      return;
    }
    const collectionContract = await getNFTContractInstance(collectionId);
    const userAddress = await getDefaultAddres();
    if (collectionContract) {
      try {
        await collectionContract.methods
          .removeFromWhitelist(address)
          .send({from: userAddress});
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      { user && user.token && user.admin ? (
        <>
          <section
            className="intro-hero"
            style={{background: `url(${spaceBack}) no-repeat center/cover`}}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <h1
                    className="intro-hero__title"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    manage artists and nfts on marketplace
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-5" data-aos="fade-up" data-aos-delay="400">
            <div className="container">
              <div className="row mt-3">
                <div className="col-12">
                  <div className="sort-select" style={{justifyContent: 'flex-start'}}>
                    <span>Collection:</span>
                    <select
                      className="cs-select"
                      name="state"
                      value={collection}
                      style={{
                        backgroundColor: '#08091a',
                      }}
                      onChange={(e) => setCollection(e.target.value)}
                    >
                        { allCollections && allCollections.length && allCollections.map((item, index) => (
                            <option key={index} value={item.address}>{item.name}</option>
                        ))}
                    </select>
                  </div>
                </div>  
              </div>  
              <div className="row mt-3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="col-12">
                    <div className="section-title d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img className="section-icon" src={icon1} alt="icon1" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2 className="section-heading section-heading-after">
                          ARTISTS WHITELISTS
                        </h2>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <ul className="list-group rounded-0">
                          {whitelist && whitelist.map((item, index) => (
                              <li className="list-group-item" key={index}>
                                {item.address}
                                <button className="btn btn-primary-outline px-2 py-1" style={{float: 'right'}} 
                                  onClick={(e) => removeWhiteList(e, item.collectionId, item.address)}>X</button>
                              </li>
                          ))}
                        </ul>
                      </div>  
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="col-12">
                    <div className="section-title d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img className="section-icon" src={icon1} alt="icon1" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2 className="section-heading section-heading-after">
                          ARTISTS CANDIDAATES
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 col-xl-8 col-md-8 col-sm-12 col-12">
                      <h6 className="my-3"> User Address </h6>
                      <div className="group-input mb-3">
                        <input
                          type="text"
                          placeholder="candidate address"
                          className="form-air"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12">
                      <div className="text-right">
                        <button
                          className="btn btn-primary btn-min-width mt-4 ml-5"
                          onClick={addCandidates}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <h3 className="my-3"> Candidate Addresses </h3>
                    <ul className="list-group rounded-0">
                      {candidates.length > 0 &&
                        candidates.map((item, key) => (
                          <li className="list-group-item" key={key}>
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="row">
                    <div className="text-right">
                      <button
                        className="btn btn-danger btn-min-width mt-4 ml-5"
                        onClick={addToWhiteList}
                      >
                        {!isProcessing ? (
                          'ADD CANDIDATES TO WHITELISTS'
                        ) : (
                          <Spinner size="sm" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="intro-hero"
            style={{background: `url(${spaceBack}) no-repeat center/cover`}}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <h1
                    className="intro-hero__title"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    review nft marketplace
                  </h1>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-8 mt-4">
                  <button
                    className={`btn btn-outline-primary ${
                      category === 'all' ? 'active' : ''
                    }`}
                    onClick={(e) => handleChangeCategory(e, 'all')}
                  >
                    ALL
                  </button>
                  {categories &&
                    categories.map(({id, name}) => (
                      <button
                        className={`btn btn-outline-primary ${
                          category === id ? 'active' : ''
                        }`}
                        onClick={(e) => handleChangeCategory(e, id)}
                        key={id}
                      >
                        {name}
                      </button>
                    ))}
                </div>
                <div className="col-lg-4 mt-4">
                  <div className="sort-select">
                    <span className='me-1'>Sort By:</span>
                    <SortSelect handleSort={handleSort} options={sortOptions} defaultValue={1}/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-5" data-aos="fade-up" data-aos-delay="400">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-title d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img className="section-icon" src={icon1} alt="icon1" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2 className="section-heading section-heading-after">
                        {category} NFT’S
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {filteredNFTs.length > 0 ? (
                  filteredNFTs.map((nft, key) => (
                    <div className="col-lg-3 col-md-6" key={key}>
                      <div className="nft-card">
                        {nft.auction ? (
                          <div className="ribbon base">
                            <span>AUCTION</span>
                          </div>
                        ) : (
                          ''
                        )}

                        <div className="nft-card__img">
                          {nft.assetType === 'audio' ? (
                            <>
                              <audio controls>
                                <source src={nft.image} type="audio/ogg" />
                                <source src={nft.image} type="audio/mpeg" />
                                Your browser does not support the audio element.
                              </audio>
                            </>
                          ) : nft.assetType === 'video' ? (
                            <>
                              <video
                                width="100%"
                                autoPlay
                                controls
                                muted
                                preload="metadata"
                              >
                                <source
                                  src={`${nft.image}#t=0.5`}
                                  type="video/mp4"
                                />
                                <source
                                  src={`${nft.image}#t=0.5`}
                                  type="video/ogg"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </>
                          ) : (
                            <>
                              <img src={nft.image} alt="nft1" />
                            </>
                          )}
                        </div>
                        <div className="nft-card__body">
                          <div className="nft-card__meta">
                            <h2 className="nft-card__title">{nft.name}</h2>
                            <div className="rounded">
                              <Blockie
                                opts={{
                                  seed: `${nft.owner}`,
                                  color: '#dfe',
                                  bgcolor: '#a71',
                                  size: 15,
                                  scale: 2,
                                  spotcolor: '#000',
                                }}
                              />{' '}
                            </div>
                          </div>
                          <h4 className="nft-card__xdr">
                            <span className="text-white">{nft.price} Moonstar</span>
                          </h4>
                          <h4 className="nft-card__xdr">
                            <span className="text-white">{nft.description}</span>
                          </h4>
                        </div>
                        <div className="nft-card__footer row">
                          <div className="row mt-2">
                            <div className="col-4"></div>
                            <div className="col-8">
                              <button
                                className="btn btn-danger"
                                onClick={(e) => deleteItem(e, nft.collectionId, nft.tokenId)}
                              >
                                DELETE NFT
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center col-12">EMPTY</div>
                )}
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className='page-loading'>  
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Admin;
