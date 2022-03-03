import React from 'react'

import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="home_header">
      <div className="row">
        <div className="col-xs-12 col-md-4  mb-3">
          <div className="container">
            <div className="home_headerleft">
              <div className="row ">
                      
                <div className="col-6">
                  <Link to="/about">About</Link>
                </div>
                <div className="col-6">
                  <a href="https://chrome.google.com/webstore">Store</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right header */}
        <div className="col-xs-12  col-md-8 mb-3">
          <div className="container">
            <div className="home_headerright">
              <div className="row ">
                <div className="col-3 rcol1">
                  <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                    Gmail
                  </a>
                </div>
                <div className="col-3 rcol2">
                  <a href="https://www.google.com/search?q=images&rlz=1C1CHBF_enIN992IN992&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiSvLS54Jz2AhXBJaYKHUOZBzQQ_AUoAXoECAEQAw&safe=active&ssui=on">
                    Images
                  </a>
                </div>
                <div className="col-3 rcol3">
                  <a href="https://about.google/products/?tab=rh">
                    <AppsIcon fontSize="medium"></AppsIcon>
                  </a>
                </div>
                <div className="col-3 rcol4">
                  <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                    <AccountCircleIcon fontSize="medium" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header