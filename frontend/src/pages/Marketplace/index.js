import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import restApi from '../../utils/restApi';
import icon1 from '../../assets/img/icons/1.png';
import spaceBack from '../../assets/img/spaceback.png';
import useCategories from '../../hooks/useCategories';
import { useLocation } from 'react-router';
import SortSelect from '../../components/Main/SortSelect';
import { useMediaQuery } from 'react-responsive';
import ItemCard from '../../components/Main/ItemCard';

const Marketplace = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const price = useSelector((state) => state.price);
  const [sortCategories, setSortCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // default did mount
  const [filteredNFTs, setFilteredNFT] = useState(null);
  const [sortBy, setSortBy] = useState('mintedAt');

  const search = new URLSearchParams(useLocation().search).get("search");

  const sortOptions = [
    { value: 'views', label: 'POPULARITY' },
    { value: 'mintedAt', label: 'NEWEST' },
    { value: 'price', label: 'PRICE' }
  ]

  const [tokenPrice, setTokenPrice] = useState({
    bnb: price.bnb,
    moonstar: price.moonstar,
  });

  useEffect(() => {
    setTokenPrice(price);
  }, [price]);

  const categories = useCategories();

  useEffect(() => {
    if (categories && categories.length) {
      let categoryList = [{
        value: '',
        label: '🎨 All'
      }];
      for (const category of categories) {
        categoryList.push({
          value: category.id,
          label: category.name
        })
      }
      setSortCategories(categoryList)
    }
  }, [categories])

  useEffect(() => {
    fetchItems(selectedCategory, sortBy, search)
  }, [search, sortBy, selectedCategory]);

  const fetchItems = (category, sortBy, search) => {
    restApi.get('item', {
      params: {
        status: true,
        search: search,
        category: category,
        sortDir: 'asc',
        sortBy: sortBy,
        page: 0,
        limit: 30
      }
    }).then(res => {
      setFilteredNFT(res.data.items);
    }).catch(e => {
      console.log(e)
      setFilteredNFT([]);
    })
  }

  const handleChangeCategory = (e, category) => {
    setSelectedCategory(category);
  };

  const handleChangeCategorySelect = (category) => {
    if (category.value) {
      setSelectedCategory(category.value);
    }
  };

  const buyItem = (e, collection, nftId) => {
    e.preventDefault();
    window.location = `/buy-nft/${collection}/${nftId}`;
  };

  // Sort NFTs by date or price
  const handleSort = (e) => {
    if (e.value) {
      setSortBy(e.value)
    }
  };
  return (
    <>
      <section
        className="intro-hero"
        style={{ background: `url(${spaceBack}) no-repeat center/cover` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h4
                className="intro-hero__subtitle"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                WORLD BEST NFT MARKETPLACE
              </h4>
              <h1
                className="intro-hero__title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                BUY / SELL YOUR ARTS WITH MOONSTAR
              </h1>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 mt-4">
              {isMobile ? (
                <div className="sort-select">
                  <span className='me-1'>Category : </span>
                  <SortSelect handleSort={handleChangeCategorySelect} options={sortCategories} defaultValue={0} />
                </div>
              ) : (
                <>
                  <button
                    className={`btn btn-outline-primary ${selectedCategory === '' ? 'active' : ''
                      }`}
                    onClick={(e) => handleChangeCategory(e, '')}
                  >
                    🎨 All
                  </button>
                  {categories &&
                    categories.map(({ id, name }) => (
                      <button
                        className={`btn btn-outline-primary mx-1 ${selectedCategory === id ? 'active' : ''
                          }`}
                        onClick={(e) => handleChangeCategory(e, id)}
                        key={id}
                      >
                        {name}
                      </button>
                    ))}
                </>)}
            </div>
            <div className="col-lg-8 mt-4"></div>
            <div className="col-lg-4">
              <div className="sort-select">
                <span className='me-1'>Sort By : </span>
                <SortSelect handleSort={handleSort} options={sortOptions} defaultValue={1} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 marketplacenft" data-aos="fade-up" data-aos-delay="400">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title d-flex align-items-center mb-3">
                <div className="flex-shrink-0">
                  <img className="section-icon" src={icon1} alt="icon1" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h2 className="section-heading section-heading-after ">
                    {selectedCategory} NFT’S
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {filteredNFTs && filteredNFTs.length > 0 ? (
              filteredNFTs.map((nft, key) => (
                <div className="col-lg-3 col-6">
                  <ItemCard nft={nft} key={key} />
                </div>
              ))
            ) : (
              <div className="text-center col-12">
                {filteredNFTs ? 'EMPTY' : <Spinner />}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Marketplace;
