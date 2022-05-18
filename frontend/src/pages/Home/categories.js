import React, {useEffect, useState} from 'react';
import icon1 from '../../assets/img/icons/1.png';
import useCategories from '../../hooks/useCategories';
const Categories = () => {
  const categories = useCategories();
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
                <img className="section-icon" src={icon1} alt="icon1" />
              </div>
              <div
                className="flex-grow-1 ms-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="section-heading section-heading-after">
                  BROWSE CATEGORIES
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center categorylist">
          <div className="col-lg-12 mt-4">
            <a
              className={`btn btn-outline-primary`}
              href="/marketplace"
              style={{fontSize: '20px'}}
            >
              🎨 All
            </a>
            {categories &&
              categories.map(({id, name}) => (
                <a
                  className={`btn btn-outline-primary m-1`}
                  href="/marketplace"
                  style={{fontSize: '20px'}}
                  key={id}
                >
                  {name}
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
