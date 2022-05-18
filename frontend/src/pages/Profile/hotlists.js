import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Spinner} from 'reactstrap';

import restApi from '../../utils/restApi';
import fireImg from '../../assets/img/icons/fire.png';
import ItemCard from '../../components/Main/ItemCard';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      style={{ ...style }}
      onClick={onClick}
      viewBox="0 0 100 100">
      <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" transform="translate(100, 100) rotate(180) "></path>
    </svg>
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      style={{ ...style }}
      onClick={onClick}
      viewBox="0 0 100 100">
      <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow"></path>
    </svg>
  );
}
const HotLists = ({account}) => {
  const price = useSelector((state) => state.price);
  const [filteredNFTs, setFilteredNFT] = useState(null);
  const [tokenPrice, setTokenPrice] = useState({
    bnb: price.bnb,
    moonstar: price.moonstar,
  });
  useEffect(() => {
    setTokenPrice(price);
  }, [price]);

  useEffect(() => {
    if(account) {
      restApi.get('item', {
        params: {
          status: true,
          owner: account, 
          sortDir: 'asc',
          sortBy: 'mintedAt',
          page: 0,
          limit: 4
        }
      }).then(res => {
        setFilteredNFT(res.data.items);
      }).catch(e => {
        console.log(e)
        setFilteredNFT([]);
      }) 
    }
  }, [account]);
  const buyItem = (e, collection, nftId) => {
    e.preventDefault();
    window.location = `/buy-nft/${collection}/${nftId}`;
  };
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  };
  return (
    <section className="pt-2 pb-5" data-aos="fade-up" data-aos-delay="800">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title d-flex align-items-center">
              <div
                className="flex-shrink-0"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img className="section-icon" src={fireImg} alt="" />
              </div>
              <div
                className="flex-grow-1 ms-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="section-heading section-heading-after">
                  HOT NFT's
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          {filteredNFTs && filteredNFTs.length > 0 ? (
            <Slider className="carousel" {...settings}>
              {filteredNFTs.map((nft, key) => (
                <ItemCard nft={nft} key={key} viewButton={true}/>
              ))}
            </Slider>
          ) : (
            <div className="text-center">
              {filteredNFTs ? 'EMPTY' : <Spinner />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HotLists;
