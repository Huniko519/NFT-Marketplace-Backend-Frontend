import React from 'react';
import { Spinner } from 'reactstrap';
import fireImg from '../../assets/img/icons/fire.png';
import { DefaultAvatar } from '../../constants';
import useCollections from '../../hooks/useCollections';

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
const Collections = ({ account }) => {
  const collections = useCollections(account, 10);

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

  const Carousel = () => {
    return (
      <div className="px-4">
        <Slider className="carousel" {...settings}>
          {collections && collections.map(item => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={item.address}>
              <div
                className="hot-card"
              >
                <div className="hot-card__inner">
                  <div className="hot-card__image" style={{ backgroundImage: `url(${item.image})` }}>
                    <img src={item.user && item.user.avatar ? item.user.avatar : DefaultAvatar} className="hot-card__avatar" alt='Avatar' />
                  </div>
                  <h4 className="hot-card__title">{item.name}</h4>
                  <a href={`/profile/${item.address}`} className="hot-card__username">
                    {item.user && item.user.name ? `@${item.user.name}` : '@Artist'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  return (
    <section className="section">
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
                  HOT COLLECTIONS
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {collections && collections.length > 0 ? (
            <Carousel />) : (
            <div className="text-center">
              {collections ? 'EMPTY' : <Spinner />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Collections;
