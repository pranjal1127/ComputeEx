import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footera-area section-padding wow fadeInDown">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer">
              <div className="logo-area footer">
                <a href="/">
                  <img src="/img/compute-ex32.png" alt="" />
                </a>
              </div>
              <div className="space-20"></div>
              <p className="">Social Media links</p>
              <ul className="social-menu">
                <li>
                  <a href="https://www.facebook.com/eraswap" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/eraswap/"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/eraswap/?hl=en"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>{" "}
                </li>
                <li>
                  <a href="https://twitter.com/EraSwapTech" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@eraswap" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-medium"></i>
                  </a>
                </li>
                <li>
                  <a href="https://eraswap.tumblr.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-tumblr"></i>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/eraswap" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-telegram"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://github.com/KMPARDS" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.reddit.com/user/EraSwap" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-reddit"></i>
                  </a>{" "}
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCGCP4f5DF1W6sbCjS6y3T1g?view_as=subscriber"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>

              <div className="space-10"></div>
              <p>Copyright &copy; {new Date().getFullYear()}</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-2">
            <div className="single-footer">
              <ul>
                <li>
                  <a className="scroll" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <Link to="/multiexchange"> Multi Exchange</Link>
                </li>
                <li>
                  <Link to="/lending"> Lending & Borrowing </Link>
                  
                </li>
                <li>
                  <Link to="/btc-to-es"> BTC To ES</Link>
                 
                </li>
                <li>
                <Link to="/btc-to-es">Uphold </Link>

                 
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="single-footer">
              <ul>
                <li>
                  <a className="scroll" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="http://eraswaptoken.io/pdf/era-swap-howey-test-letter-august7-2018.pdf"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Howey Test
                  </a>
                </li>
                <li>
                  <a
                    href="https://eraswaptoken.io/pdf/eraswap_whitepaper.pdf"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Era Swap White Paper
                  </a>
                </li>
                <li>
                  <a
                    href=" http://eraswaptoken.io/pdf/eraswap-terms-conditions.pdf"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Era Swap Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="terms_conditions.pdf" target="_blank" rel="noopener noreferrer">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="privacy_policy.pdf" target="_blank" rel="noopener noreferrer">
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer">
              <p>Subscribe to our Newsletter</p>
              <div className="space-20"></div>
              <div className="footer-form ">
                <form action="#">
                  <input type="email" placeholder="Email Address" />
                  <a href="/" className="gradient-btn subscribe">
                    GO
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
