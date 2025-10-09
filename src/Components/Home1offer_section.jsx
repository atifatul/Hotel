import React from 'react'

const Home1offer_section = () => {
  return (
    <>
    <div className="home1-offer-section mb-100">
      <div className="container">
        <div
          className="row justify-content-center mb-50 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2>Discounts & Offers</h2>
              <p>
                A curated list of the most popular travel packages based on
                different destinations.
              </p>
            </div>
          </div>
        </div>
        <div className="swiper home1-offer-slider mb-40">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="travel-package-01.html"
                ><img src="assets/img/home1/home1-offer-img1.jpg" alt=""
              /></a>
            </div>
            <div className="swiper-slide">
              <a href="travel-package-details.html"
                ><img src="assets/img/home1/home1-offer-img2.jpg" alt=""
              /></a>
            </div>
            <div className="swiper-slide">
              <a href="travel-package-01.html"
                ><img src="assets/img/home1/home1-offer-img3.jpg" alt=""
              /></a>
            </div>
            <div className="swiper-slide">
              <a href="travel-package-details.html"
                ><img src="assets/img/home1/home1-offer-img4.jpg" alt=""
              /></a>
            </div>
            <div className="swiper-slide">
              <a href="travel-package-details.html"
                ><img src="assets/img/home1/home1-offer-img5.jpg" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="swiper-pagination1 paginations"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home1offer_section
