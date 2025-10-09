import React, { useEffect } from "react";

const Tourguide_section = () => {
  useEffect(() => {
    const swiper = new Swiper(".home3-guide-slider", {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".guide-slider-next",
        prevEl: ".guide-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <div className="home6-tour-guide-section mb-100">
        <div className="container">
          <div
            className="row justify-content-center mb-50 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center">
                <h2>GoFly Experties</h2>
                <p>We’ve 200+ friendly tour experties in worldwide.</p>
              </div>
            </div>
          </div>
          <div className="team-slider-area mb-40">
            <div className="swiper home3-guide-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="tour-guide-card three">
                    <div className="guide-img-wrap">
                      <a href="guider-details.html" className="guide-img">
                        <img
                          src="assets/img/home5/tour-guide-img1.png"
                          alt=""
                        />
                      </a>
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
                      </ul>
                    </div>
                    <div className="guide-info">
                      <h5>
                        <a href="guider-details.html">Oliver Liam</a>
                      </h5>
                      <span>GoFly Guider</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tour-guide-card three">
                    <div className="guide-img-wrap">
                      <a href="guider-details.html" className="guide-img">
                        <img
                          src="assets/img/home5/tour-guide-img2.png"
                          alt=""
                        />
                      </a>
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
                      </ul>
                    </div>
                    <div className="guide-info">
                      <h5>
                        <a href="guider-details.html">Mrs. Emelia Jong</a>
                      </h5>
                      <span>GoFly Guider</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tour-guide-card three">
                    <div className="guide-img-wrap">
                      <a href="guider-details.html" className="guide-img">
                        <img
                          src="assets/img/home5/tour-guide-img3.png"
                          alt=""
                        />
                      </a>
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
                      </ul>
                    </div>
                    <div className="guide-info">
                      <h5>
                        <a href="guider-details.html">Alexander Benjamin</a>
                      </h5>
                      <span>GoFly Guider</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tour-guide-card three">
                    <div className="guide-img-wrap">
                      <a href="guider-details.html" className="guide-img">
                        <img
                          src="assets/img/home5/tour-guide-img4.png"
                          alt=""
                        />
                      </a>
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
                      </ul>
                    </div>
                    <div className="guide-info">
                      <h5>
                        <a href="guider-details.html">Samuel Henry</a>
                      </h5>
                      <span>GoFly Guider</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tour-guide-card three">
                    <div className="guide-img-wrap">
                      <a href="guider-details.html" className="guide-img">
                        <img
                          src="assets/img/home5/tour-guide-img5.png"
                          alt=""
                        />
                      </a>
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
                      </ul>
                    </div>
                    <div className="guide-info">
                      <h5>
                        <a href="guider-details.html">David Reynolds</a>
                      </h5>
                      <span>GoFly Guider</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tour-guide-card three">
                    <div className="guide-img-wrap">
                      <a href="guider-details.html" className="guide-img">
                        <img
                          src="assets/img/home5/tour-guide-img6.png"
                          alt=""
                        />
                      </a>
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
                      </ul>
                    </div>
                    <div className="guide-info">
                      <h5>
                        <a href="guider-details.html">Thomas Mitchell</a>
                      </h5>
                      <span>GoFly Guider</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tour-guide-card three">
                    <div className="guide-img-wrap">
                      <a href="guider-details.html" className="guide-img">
                        <img
                          src="assets/img/home5/tour-guide-img7.png"
                          alt=""
                        />
                      </a>
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
                      </ul>
                    </div>
                    <div className="guide-info">
                      <h5>
                        <a href="guider-details.html">James Carter</a>
                      </h5>
                      <span>GoFly Guider</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="swiper-pagination1 paginations two"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tourguide_section;
