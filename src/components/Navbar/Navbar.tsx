import React, { Component } from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";



export default class extends Component {


  render() {
    return (
      <div
        className="header-area wow fadeInDown header-absolate"
        id="nav"
        data-0="position:fixed;"
        data-top-top="position:fixed;top:0;"
        data-edge-strategy="set"
      >
        <div className="container">
          <div className="row">
            <div className="col-4 d-block d-lg-none">
              <div className="mobile-menu"></div>
            </div>
            <div className="col-4 col-lg-2">
              <div className="logo-area">
                <Link to="/">
                  <img alt="img" src={ "/img/compute-ex32.png"} />
                </Link>
              </div>
            </div>
            <div className="col-4 col-lg-8 d-none d-lg-block">
              <div className="main-menu text-center">
                <nav>
                  <ul id="slick-nav">
                    <li className="navlink-custom">
                      <a className="scroll" href="#about">
                        About
                      </a>
                    </li>
                    <li className="navlink-custom dropdown">
                      <div className="nav-link dropbtn" >
                        Services
                      </div>
                      <div className="dropdown-content">
                        <Link to="/multiexchange"> Multi Exchange</Link>
                        <Link to="/lending"> Lending & Borrowing </Link>
                        <Link to="/btc-to-es"> BTC To ES</Link>
                      </div>
                    </li>
                    <li className="navlink-custom">
                      <a className="scroll" href="#faq">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-4 col-lg-2 text-right">
              <ConnectWallet />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
