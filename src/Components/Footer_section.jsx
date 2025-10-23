import { Link } from "react-router-dom";

const Footer_section = () => {
  return (
    <>
      <footer className="footer-section three">
        <div className="container">
          <div className="footer-menu-wrap">
            <div className="row gy-md-4 gy-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer-logo-and-addition-info">
                  <a href="#" className="footer-logo">
                    <img src="assets/img/footer-logo2.svg" alt="hello" />
                  </a>
                  <div className="address-area">
                    <span>GoFly Travel Agency</span>
                    <a href="#">
                      Skyline Plaza, 5th Floor, 123 Main Street Los Angeles, CA
                      90001, USA
                    </a>
                  </div>
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-md-end">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h5>Quick Links</h5>
                  </div>
                  <ul className="widget-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/Explore-Tours">Tours</Link>
                    </li>
                    <li>
                      <Link to={`/footer-data/${"terms-of-use"}`}>
                        Terms of Use
                      </Link>
                    </li>
                    <li>
                      <Link to={`/footer-data/${"privacy-policy"}`}>
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-md-end">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h5>Services</h5>
                  </div>
                  <ul className="widget-list">
                    <li>
                      <Link to={`/footer-data/${"hotel-booking"}`}>
                        Hotel Booking
                      </Link>
                    </li>
                    <li>
                      <Link to={`/footer-data/${"car-taxi-bus-booking"}`}>
                        Car/Taxi/Bus Booking
                      </Link>
                    </li>
                    <li>
                      <Link to={`/footer-data/${"bike-tour"}`}>Bike Tour</Link>
                    </li>
                    <li>
                      <Link to={`/footer-data/${"treaking"}`}>Treaking</Link>
                    </li>
                    <li>
                      <Link to={`/footer-data/${"Private-Tour"}`}>
                        private-tour
                      </Link>
                    </li>
                    <li>
                      <Link to={`/footer-data/${"B2C-CRM"}`}>B2C CRM</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-end">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h5>Get In Touch</h5>
                  </div>
                  <ul className="contact-list">
                    <li className="single-contact">
                      <div className="icon">
                        <img
                          src="assets/img/home3/icon/whatsapp-icon.svg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <span>WhatsApp</span>
                        <a href="https://wa.me/91345533865">+91 345 533 865</a>
                      </div>
                    </li>
                    <li className="single-contact">
                      <div className="icon">
                        <img src="assets/img/home3/icon/mail-icon.svg" alt="" />
                      </div>
                      <div className="content">
                        <span>Mail Us</span>
                        <a href="/cdn-cgi/l/email-protection#375e59515877524f565a475b521954585a">
                          <span
                            className="__cf_email__"
                            data-cfemail="b9d0d7dfd6f9dcc1d8d4c9d5dc97dad6d4"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </div>
                    </li>
                    <li className="single-contact">
                      <div className="icon">
                        <img src="assets/img/home1/icon/call-icon.svg" alt="" />
                      </div>
                      <div className="content">
                        <span>More Inquiry</span>
                        <a href="tel:+91456453345">+91 456 453 345</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright-and-payment-method-area">
              <p>
                Copyright 2025 <a href="https://www.egenslab.com/">travbizz</a>{" "}
                | All Right Reserved.
              </p>
              <div className="payment-method-area">
                <span>Accepted Payment Methods :</span>
                <ul>
                  <li>
                    <img
                      src="assets/img/home1/icon/mastar-card-icon.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img src="assets/img/home1/icon/visa-icon.svg" alt="" />
                  </li>
                  <li>
                    <img src="assets/img/home1/icon/paypal-icon.svg" alt="" />
                  </li>
                  <li>
                    <img src="assets/img/home1/icon/gpay-icon.svg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer_section;
