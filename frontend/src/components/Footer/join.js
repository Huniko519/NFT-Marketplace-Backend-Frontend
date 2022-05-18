import { useMediaQuery } from 'react-responsive'
import React from 'react';

const JoinUs = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  
  return ( isMobile && 
    <section className="section join-us-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title d-flex align-items-center flex-column">
              <h2 className="section-heading text-center px-3 pb-4">
                Join Our Community and Share Your NFTs
              </h2>
              <a className="btn btn-white-outline btn-md" href='/create'>CREATE NFT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
