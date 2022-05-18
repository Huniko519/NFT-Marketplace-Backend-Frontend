import React from 'react';
import icon2 from '../../assets/img/icons/buy1.svg';
import icon3 from '../../assets/img/icons/buy2.svg';
import icon4 from '../../assets/img/icons/buy3.svg';
import icon5 from '../../assets/img/icons/buy4.svg';
const GetStarted = () => {
  return (
    <section className="section-get-started d-none d-md-block">
      <div className="container text-center">
        <div className="row row-get-started">
          <div className="col-12">
            <div className="get-started-title">
              <h3>Get Started</h3>
              <h1 className="section-heading">CREATE  &  SELL NFTs</h1>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="nft-promo">
              <div className="nft-promo__icon">
                <img src={icon2} alt="icon2" />
              </div>
              <h4 className="nft-promo__title">CONNECT YOUR WALLET</h4>
              <div className="nft-promo__txt">
                <p>
                  To get started simply connect your wallet to Moonstar NFT by
                  clicking the connect button in the top right corner
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="nft-promo">
              <div className="nft-promo__icon">
                <img src={icon3} alt="icon3" />
              </div>
              <h4 className="nft-promo__title">
                CREATE A <br /> COLLECTION
              </h4>
              <div className="nft-promo__txt">
                <p>
                  Click the Create button and fill out the details such as
                  description and social links to start your collection
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="nft-promo">
              <div className="nft-promo__icon">
                <img src={icon4} alt="icon4" />
              </div>
              <h4 className="nft-promo__title">
                CREATE YOUR <br /> NFT
              </h4>
              <div className="nft-promo__txt">
                <p>
                  Upload your work (image, video, audio, or 3D art), and
                  customize your NFTs description and details
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="nft-promo">
              <div className="nft-promo__icon">
                <img src={icon5} alt="icon5" />
              </div>
              <h4 className="nft-promo__title">
                SELL YOUR <br /> NFT!
              </h4>
              <div className="nft-promo__txt">
                <p>
                  You pick how you want to sell your NFTs, and we help you sell
                  them! Select between auctions or fixed-price listings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
