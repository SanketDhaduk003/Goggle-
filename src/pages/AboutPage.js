import React from 'react'
import Header from '../components/Header'
import { Link } from "react-router-dom";
import pic from '../images/company1.png'
import pic2  from '../images/compan2.jpg'

function AboutPage() {
  return (
    <div className="container">
      <div className="Header ">
        <Header />
      </div>

      <div className="body">
        <div className="container">
          <div className="row ">
            <div className=" col-xs-12 col-md-6 mb-4 text-center">
              <a>
                <img src={pic} style={image}></img>
              </a>
            </div>
            <div className="col-xs-12 col-md-6 mb-4">
              A company is a legal entity formed by a group of individuals to
              engage in and operate a business—commercial or
              industrial—enterprise. A company may be organized in various ways
              for tax and financial liability purposes depending on the
              corporate law of its jurisdiction.
            </div>
          </div>
          <div className="row ">
            <div className="col-xs-12 col-md-6 mb-4 ">
              The benefits of starting a company include income diversification,
              a strong correlation between effort and reward, creative freedom,
              and flexibility. Another advantage of companies is that they
              create jobs. If an individual starts a company and it grows, most
              often they have to hire employees. This increases the number of
              jobs available in a nation, employs people, reduces unemployment,
              and brings wealth into the economy. There is often a tremendous
              amount of personal satisfaction garnered from starting your own
              company. This involves following your dreams and passions and
              leaving a legacy.
            </div>
            <div className=" col-xs-12 col-md-6 mb-4 text-center">
              <a>
                <img src={pic2} style={image}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const image = {
        
height:"300px",
};
export default AboutPage