import React from 'react';
import { useMediaQuery } from 'react-responsive';
import spaceBack from '../../assets/img/spaceback.png';
const Landing = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return ( !isMobile && 
    <section
      className="intro-hero"
      style={{background: `url(${spaceBack}) no-repeat bottom/cover`}}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-auto text-center">
            <h4
              className="intro-hero__subtitle"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Join Our Growing Marketplace
            </h4>
            <h1
              className="intro-hero__title"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              CREATE NFT
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
