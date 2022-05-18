import React from 'react';
import spaceBack from '../../assets/img/spaceback.png';
const Landing = () => {
  return (
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
              data-aos-delay="300"
            >
              Find, Collect & Create
            </h4>
            <h1
              className="intro-hero__title"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Explore the next generation of NFT marketplaces
            </h1>
            <a
              href="/marketplace"
              className="btn btn-primary-outline btn-min-width"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              EXPLORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
