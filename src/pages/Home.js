import React from "react";
import Header from "../components/Header";
import Search from '../components/Search'
import {Link} from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container-fluid">
      <div className="home">
        <div className="Header">
          <Header />
        </div>
        {/* body */}
        <div className="home_body text-center">
          <Link to="/about">
            <img src="https://pixahive.com/wp-content/uploads/2020/09/itcompany-logo-by-pixahive.png" style={{width:'200px', height:'100px'}}/>
          </Link>
          <div className="home_inputcontainer">
            <Search />
          </div>
        </div>
        {/* body ebd */}
      </div>
    </div>
  );
}

export default Home;
