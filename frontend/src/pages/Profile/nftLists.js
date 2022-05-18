import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import icon1 from '../../assets/img/icons/1.png';
import restApi from '../../utils/restApi';
import SortSelect from '../../components/Main/SortSelect';
import ItemCard from '../../components/Main/ItemCard';

const nftLists = ({ isMyAccount, account }) => {
  const price = useSelector((state) => state.price);
  const web3 = useSelector((store) => store.web3);
  const [user, setUser] = useState(null);
  const [sortBy, setSortBy] = useState('mintedAt');
  const [category, setCategory] = useState('all');
  const [filteredNFTs, setFilteredNFT] = useState(null);
  const [activated, setActivated] = useState(0);
  const [tokenPrice, setTokenPrice] = useState({
    bnb: price.bnb,
    moonstar: price.moonstar,
  });

  const sortOptions = [
    { value: 'views', label: 'POPULARITY' },
    { value: 'mintedAt', label: 'NEWEST' },
    { value: 'price', label: 'PRICE' }
  ]

  useEffect(() => {
    setTokenPrice(price);
  }, [price]);

  useEffect(() => {
    if (account) {
      restApi.get('item', {
        params: {
          status: category,
          owner: account,
          sortDir: 'asc',
          sortBy: sortBy,
          page: 0,
          limit: 1000
        }
      }).then(res => {
        setFilteredNFT(res.data.items);
      }).catch(e => {
        console.log(e)
        setFilteredNFT([]);
      })
    }
  }, [sortBy, category, account]);

  useEffect(() => {
    if (web3.userAccount) {
      restApi.get(`user/${web3.userAccount}`).then(response => {
        if (response) {
          const data = response.data.user;
          setUser(Object.assign({
            name: 'Artist',
            avatar: 'https://ipfs.io/ipfs/QmRRXBjQRQBdnivJuGe9bgk4yqogULSYoLmcy32y6AierY',
            bio: 'Artist Bio',
            twitter: '',
            telegram: '',
            instagram: '',
          }, data))
        }
      })
    }
  }, [web3.userAccount]);

  const viewItem = (e, collectionId, nftId) => {
    e.preventDefault();
    if (isMyAccount) {
      window.location = `view/${collectionId}/${nftId}`;
    }
  };
  const onChangeCategory = async (e, categoryId) => {
    e.preventDefault();
    setFilteredNFT([]);
    setActivated(categoryId);
    if (categoryId === 0) {
      setCategory('all')
    } else if (categoryId === 1) {
      setCategory(true)
    } else {
      setCategory(false)
    }
  };
  // sort
  const handleSort = (e) => {
    if (e.value) {
      setSortBy(e.value)
    }
  };
  return (
    <section className="pb-5" data-aos="fade-up" data-aos-delay="400">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-4">
            <div className="section-title d-flex align-items-center">
              <div className="flex-shrink-0">
                <img className="section-icon" src={icon1} alt="icon1" />
              </div>
              <div className="flex-grow-1 ms-3">
                <h2 className="section-heading section-heading-after">
                  {isMyAccount ? 'YOUR' : `${user ? user.name : 'Artist'}`} NFT’S
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8">
            <div className="row align-items-center">
              <div className="col-sm-6 text-center-sm">
                <div className="btn btn-filter-group" role="group">
                  <button
                    className={`btn btn-filter ${activated === 0 ? 'active' : ''}`}
                    onClick={(e) => onChangeCategory(e, 0)}
                  >
                    ALL
                  </button>
                  <button
                    className={`btn btn-filter ${activated === 1 ? 'active' : ''}`}
                    onClick={(e) => onChangeCategory(e, 1)}
                  >
                    for sale
                  </button>
                  <button
                    className={`btn btn-filter ${activated === 2 ? 'active' : ''}`}
                    onClick={(e) => onChangeCategory(e, 2)}
                  >
                    STORAGE
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="sort-select">
                  <span className='me-1'>Sort By : </span>
                  <SortSelect handleSort={handleSort} options={sortOptions} defaultValue={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row  d-flex flex-wrap justify-content-around">
          {filteredNFTs && filteredNFTs.length > 0 ? (
            filteredNFTs.map((nft, key) => (
              <div className="col-lg-3 col-6">
                <ItemCard nft={nft} key={key} viewButton={true} />
              </div>
            ))
          ) : (
            <div className="text-center col-12">
              {filteredNFTs ? 'EMPTY' : <Spinner size="md" />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default nftLists;
