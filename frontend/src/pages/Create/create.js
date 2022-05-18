import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useDropzone} from 'react-dropzone';
import {NFTStorage} from 'nft.storage';
import Web3 from 'web3';
import {Spinner} from 'reactstrap';
import {toast} from 'react-toastify';
import {NFTStorageKey} from '../../constants';
import ipfs from '../../utils/ipfsApi.js';
import { useBeforeunload } from 'react-beforeunload';

import {
  _isMetaMaskInstalled,
  _isValidChainId,
  getDefaultAddres,
  getNFTContractInstance,
} from '../../utils/web3';
import defaultPreviewImg from '../../assets/img/default-item.png';
import CollectionModal from './collectionModal';
import useCategories from '../../hooks/useCategories';
import restApi from '../../utils/restApi';
import useTradingFeePercent from '../../hooks/useTradingFeePercent';
import { useMediaQuery } from 'react-responsive';
import SortSelect from '../../components/Main/SortSelect';
const client = new NFTStorage({token: NFTStorageKey});

const Create = () => {
  const priceinusd = useSelector((state) => state.price);
  const web3 = useSelector((state) => state.web3);
  const [collections, setCollections] = useState([]);
  const [assetType, setAssetType] = useState('image');
  const [category, setCategory] = useState('Photo');
  const [collection, setCollection] = useState();
  const [acceptFileType, setAcceptFileType] = useState('image/*');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [actualPrice, setActualPrice] = useState(0);
  const [description, setDescription] = useState();
  const [buffer, setBuffer] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currency, setCurrency] = useState(false);
  const [previewImg, setPreviewImg] = useState(defaultPreviewImg);
  const [nftStatus, setNftStatus] = useState(false);
  const [royalties, setRoyalties] = useState(0);
  const [isCollectionModalOpened, setOpenCollectionModal] = useState(false);

  const [tokenPrice, setTokenPrice] = useState({
    bnb: priceinusd.bnb,
    moonstar: priceinusd.moonstar,
  });
  const assetTypes = [
    {value: 'image', label: 'Image'},
    {value: 'audio', label: 'Audio'},
    {value: 'video', label: 'Video'},
  ]
  const categories = useCategories();
  const [sortCategories, setSortCategories] = useState([]);

  useEffect(() => {
    if(categories && categories.length) {
      let categoryList = [];
      for(const category of categories) {
        categoryList.push({
          value: category.id,
          label: category.name
        })
      }
      setSortCategories(categoryList)
    }
  }, [categories])

  const tradingFee = useTradingFeePercent();
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
  
  useBeforeunload((event) => {
    if (isProcessing || isCollectionModalOpened) {
      event.preventDefault();
    }
  });

  useEffect(() => {
    setTokenPrice(priceinusd);
  }, [priceinusd]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setPreviewImg(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        setBuffer(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  // Initialize Dropzone
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    getFilesFromEvent: (event) => myCustomFileGetter(event),
    onDrop,
    accept: acceptFileType,
    maxFiles: 1,
  });

  // Select files from dropzone
  const myCustomFileGetter = async (event) => {
    const files = [];
    const fileList = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files;

    for (var i = 0; i < fileList.length; i++) {
      const file = fileList.item(i);

      Object.defineProperty(file, 'myProp', {
        value: true,
      });

      files.push(file);
    }

    return files;
  };
  // Price change
  const handlePrice = (e) => {
    setPrice(e.target.value);
    setActualPrice(Number(e.target.value) * (1 - tradingFee / 1000));
  };
  //On create Collection
  const onCloseCollectionModal = () => {
    setOpenCollectionModal(false)

    fetchCollections();
  }

  // Create NFT
  const createNFT = async (e) => {
    e.preventDefault();
    const isValidNetwork = await _isValidChainId();
    if (!isValidNetwork) {
      toast.error(
        'Unsupported network. Please change your network into BSC Testnet '
      );
      return;
    }
    if (isNaN(Number(price))) {
      toast.error('Please input valid price number');
      return;
    }

    if (!currency && price < 100) {
      toast.error('Min Price should be greater that 100 MOONSTARS');
      return;
    }
    if (currency && price < 0.1) {
      toast.error('Min Price should be greater that 0.1 BNB');
      return;
    }
    if (name === '') {
      toast.error('Please input Name');
      return;
    }
    if (description === '') {
      toast.error('Please input description');
      return;
    }
    if (!buffer) {
      toast.error('Please upload asset');
      return;
    }
    if (!collection) {
      toast.error('Please select Collection');
      return;
    }
    if (!category) {
      toast.error('Please select Category');
      return;
    }
    if(royalties * 1 > 30) {
      toast.error('Royalties exceed max limitation(30%)');
      return;
    }

    const {ethereum} = window;
    const web3 = new Web3(ethereum);
    const nftContract = getNFTContractInstance(collection);
    const userAddress = await getDefaultAddres();
    const isWhiteList = await nftContract.methods.isWhitelisted(userAddress).call();
    console.log('isWhiteList', isWhiteList)
    if(!isWhiteList) {
      setIsProcessing(false);
      toast.error('Only whitelisted account can create NFT Item!');
      return;
    }
    
    setIsProcessing(true);
    const result = await ipfs.files.add(Buffer.from(buffer));
    const cid = await client.storeDirectory([
      new File(
        [
          JSON.stringify({
            name: name,
            description: description,
            assetType: assetType,
            image: `https://ipfs.io/ipfs/${result[0].hash}`,
          }),
        ],
        'metadata.json'
      ),
    ]);
    
    try {
      let nftPrice;
      let calculatedRoyalty = 0;
      if (currency) nftPrice = web3.utils.toWei(price, 'ether');
      else nftPrice = web3.utils.toWei(price, 'ether');

      const calculatedPrice = web3.utils.toHex(nftPrice);
      if (Number(royalties) > 0) {
        calculatedRoyalty = web3.utils.toBN(royalties * 10);
      }

      const tokenURI = `https://ipfs.io/ipfs/${cid}/metadata.json`;
      const tx = await nftContract.methods
        .mint(
          tokenURI,
          userAddress,
          currency,
          calculatedPrice,
          nftStatus,
          calculatedRoyalty
        )
        .send({from: userAddress});
      console.log('=== token TxHash ===', tx);
      const tokenId = tx.events.Minted.returnValues.nftID;
      await restApi.post(`item`, {
          category: category,
          tokenId: tokenId,
          pairKey: '',
          collectionId: collection,
          name: name,
          price: price,
          assetType: assetType,
          auction: false,
          metadata: tokenURI,
          image: `https://ipfs.io/ipfs/${result[0].hash}`,
          creator: userAddress,
          owner: userAddress,
          currency: currency,
          royalties: royalties * 10,
          description: description,
          txHash: tx.transactionHash,
          status: nftStatus,
      })
     
      toast.success('NFT created successfully');
      setIsProcessing(false);
      setOpenCollectionModal(false);
      window.location.href = '/profile';
    } catch (err) {
      setIsProcessing(false);
      let message = err.message
        ? err.message
        : `Transaction Failed. Please make sure you have sufficient balance and Minimum Balance`;
      toast.error(message);
      console.error(err);
      return;
    }
  };

  // handle change asset type
  const handleAssetsType = (value) => {
    setAssetType(value);
    const fileType =
      value === 'image'
        ? 'image/*'
        : setAssetType(value) === 'audio'
        ? 'audio/*'
        : 'video/*';
    setAcceptFileType(fileType);
  };
  const handleChangeCurrency = (value) => {
    setCurrency(value);
  };
  // default did mount
  async function fetchCollections() {
    if(web3.userAccount) {
      restApi.get('collections', {
        params: {
          account: web3.userAccount
        }
      }).then(res => {
          setCollections(res.data.collections)
      }).catch(e => {
          console.log(e)
          setCollections([])
      })
    }else {
      setCollections([])
    }
  }

  useEffect(() => {
    if(web3.userAccount) {
      fetchCollections()
    }
  }, [web3.userAccount]);

  return (
    <section className="pb-5 mt-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <div className="section-title">
              <h2 className="section-heading section-heading-after">
                Create Single NFT
              </h2>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="mt-3 mb-5">
              <h6 className="mb-3"> Choose Asset Type </h6>
              <SortSelect 
                className="d-flex"
                width="100%"
                options={assetTypes} 
                defaultValue={0} 
                handleSort={({value, label}) => handleAssetsType(value)} />
            </div>
            
            <div className="mb-3">
              <h6 className="mb-3">Upload File</h6>
              <div {...getRootProps({className: 'dropzone text-center'})} onClick={() => { return false; }}>
                <input {...getInputProps()} id="dropzone" />
                <p className="mt-4"> PNG, GIF, WEBP, MP4 or MP3 (Max 3mb)</p>
                <label htmlFor="dropzone" className="btn btn-primary px-5 text-uppercase" style={{zIndex: 9}}>Choose File</label>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h6>Add To Markeplace</h6>
                <label className="ms-switch">
                  <input
                    name="checkbox"
                    type="checkbox"
                    checked={nftStatus}
                    onChange={(e) => setNftStatus(e.target.checked)}
                  />
                  <span className="ms-switch__control"></span>
                </label>
              </div>
              <div className="tabs-g mt-4">
                <nav className="nav nav-tabs border-0 row mx-0" role="tablist">
                  <button
                    className="btn btn-fat col active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab__fixedprice"
                  >
                    <img
                      className="btn-fat__icon"
                      src="assets/img/icons/1_1.png"
                      alt=""
                    />
                    <span className="btn-fat__txt">
                      Fixed <br /> Price
                    </span>
                  </button>
                  <button
                    className="btn btn-fat col mx-3"
                    data-bs-toggle="tab"
                    data-bs-target="#tab__timedauction"
                    disabled
                  >
                    <img
                      className="btn-fat__icon"
                      src="assets/img/icons/1_2.png"
                      alt=""
                    />
                    <span className="btn-fat__txt">
                      Timed <br /> Auction
                    </span>
                  </button>

                  <button
                    className="btn btn-fat col"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_unlimitedauction"
                    disabled
                  >
                    <img
                      className="btn-fat__icon"
                      src="assets/img/icons/1_3.png"
                      alt=""
                    />
                    <span className="btn-fat__txt">
                      Unlimited <br /> Auction
                    </span>
                  </button>
                </nav>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="tab__fixedprice"
                  >
                    <div className="py-4">
                      <h5> Price </h5>
                      <div className="group-input">
                        <input
                          type="text"
                          placeholder="Price per item"
                          className="form-air mb-0"
                          value={price}
                          onChange={handlePrice}
                        />
                        <div className="selct-flat">
                          <SortSelect 
                            options={[{value: false, label: 'MOONSTAR'}, {value: true, label: 'BNB'}]} 
                            width='150px'
                            defaultValue={0} 
                            handleSort={({value}) => handleChangeCurrency(value)}/>
                        </div>
                      </div>
                      <p className="mb-0">
                        <span className="text-muted"> Service Fee: </span> {tradingFee / 10}%
                      </p>
                      <p>
                        <span className="text-muted"> You Will Receive: </span>{' '}
                        {actualPrice}
                        {'  '}
                        {currency ? 'BNB' : 'Moonstar'}
                        <span className="p-2 priceInUsd">
                          ~
                          {currency
                            ? Number(actualPrice) * Number(tokenPrice.bnb)
                            : Number(actualPrice) *
                              Number(tokenPrice.moonstar)}{' '}
                          $
                        </span>
                      </p>

                      <div className="mt-5">
                        <h6 className="mb-3"> Choose Category </h6>
                        <SortSelect 
                          className="d-flex"
                          width="100%"
                          options={sortCategories} 
                          defaultValue={0} 
                          handleSort={({value, label}) => setCategory(value)} />
                      </div>

                      <div className="mt-5">
                        <h6 className="mb-3"> Choose Collection </h6>
                        <button
                          type="button"
                          className="btn btn-fat px-4 collection-btn"
                          data-bs-toggle="tab"
                          data-bs-target="#tab_unlimitedauction"
                          onClick={e => setOpenCollectionModal(true)}
                        >
                          <i className="fas fa-plus-circle btn-fat__icon"></i>
                          <span className="btn-fat__txt">Create</span>
                        </button>
                        {collections && collections.map((coll) => (
                            <button
                              key={coll.address}
                              type="button"
                              className={`btn btn-fat px-4 collection-btn ${coll.address==collection ? 'active' : ''}`}
                              data-bs-toggle="tab"
                              data-bs-target="#tab_unlimitedauction"
                              onClick={e => setCollection(coll.address)}
                            >
                              <img src={coll.image} className="collection-sm-image"/>
                              <span className="btn-fat__txt">{coll.name}</span>
                            </button>
                        ))}

                      </div>

                      <div className="mt-5">
                        <h6 className="mb-3"> Title </h6>
                        <div className="group-input mb-3">
                          <input
                            type="text"
                            placeholder="Title of Your NFT"
                            className="form-air"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <h6 className="mb-3"> Description </h6>
                        <div className="group-input mb-3">
                          <textarea
                            placeholder="A short description of your NFT"
                            className="form-air"
                            rows="3"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <h6 className="mb-3"> Royalties </h6>
                        <div className="group-input mb-3">
                          <input
                            type="text"
                            placeholder="10"
                            className="form-air"
                            value={royalties}
                            onChange={(e) => setRoyalties(e.target.value)}
                          />
                          <div className="selct-flat">%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab__timedauction">
                    <div className="py-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam earum ducimus eum magni sint voluptatibus Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas, nam perferendis porro, deleniti nostrum veniam
                      quae cumque ea, harum et nesciunt tempora voluptatem
                      optio? Perspiciatis, unde incidunt! Nam, modi veritatis.
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab_unlimitedauction">
                    <div className="py-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam earum ducimus eum magni sint voluptatibus
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary ml-5 px-5 btn-sm-block"
                  onClick={createNFT}
                >
                  {' '}
                  {!isProcessing ? 'CREAT NFT' : <Spinner size="sm" />}
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              className="mt-3"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h4> PREVIEW (350px x 350px) </h4>
              <div className="preview-img ml-2 mt-2">
                {assetType === 'image' ? (
                  <img
                    src={previewImg}
                    alt="PREVIEW"
                  />
                ) : assetType === 'video' ? (
                  <video
                    width="100%"
                    autoPlay
                    controls
                    muted
                    preload="metadata"
                  >
                    <source src={`${previewImg}#t=0.5`} type="video/mp4" />
                    <source src={`${previewImg}#t=0.5`} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <audio controls>
                    <source src={previewImg} type="audio/ogg" />
                    <source src={previewImg} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CollectionModal isOpen={isCollectionModalOpened} closeModal={() => onCloseCollectionModal()}></CollectionModal>
    </section>
  );
};

export default Create;
