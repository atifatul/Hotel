import React from "react";

const ActivityBanner_section = () => {
  return (
    <>
      <div className="home6-activity-banner-section">
        <div className="swiper home6-activity-banner-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="banner-wrapper"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), url('assets/img/home6/home6-activity-banner-img1.jpg')",
                }}
              >
                <div className="container">
                  <div className="banner-content">
                    <h2>Scuba Driving</h2>
                    <a href="travel-package-01.html">View All Package</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="video-wrapper">
                <div className="banner-video-area">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="assets/video/home6-activity-video.mp4"
                  ></video>
                </div>
                <div className="banner-content-wrap">
                  <div className="container">
                    <div className="banner-content">
                      <h2>Surfing</h2>
                      <a href="travel-package-01.html">View All Package</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="banner-wrapper"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), url('assets/img/home6/home6-activity-banner-img2.jpg')",
                }}
              >
                <div className="container">
                  <div className="banner-content">
                    <h2>Water Rafting</h2>
                    <a href="travel-package-01.html">View All Package</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm-img-area">
          <div className="swiper home6-activity-sm-img-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="activity-sm-img">
                  <img
                    src="assets/img/home6/home6-activity-sm-img1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="activity-sm-img">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="assets/video/home6-activity-video.mp4"
                  ></video>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="activity-sm-img">
                  <img
                    src="assets/img/home6/home6-activity-sm-img2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityBanner_section;
