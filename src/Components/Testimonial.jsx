import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
    const testimonials = [
    {
      name: "Robert Kcarery",
      role: "GoFly Traveler",
      title: "Excellent Tourist Place!",
      text: "Our honeymoon package to the Maldives was beyond amazing! The travel agency took care of every detail.",
      img: "/assets/img/home1/testimonial-author-img1.png",
      videoUrl: "https://www.youtube.com/watch?v=MLpWrANjFbI",
      rating: 5,
    },
    {
      name: "Selina Henry",
      role: "GoFly Traveler",
      title: "Great Experience!",
      text: "This was the best trip of my life! Everything was perfectly planned, from airport pickup to guided tours. The accommodations were fantastic, and the itinerary was well-balanced. Highly recommended!",
      img: "/assets/img/home1/testimonial-author-img2.png",
      rating: 5,
      isTrustpilot: true,
    },
    {
      name: "James Bonde",
      role: "GoFly Traveler",
      title: "Average Experience",
      text: "The tour was well-organized, and we enjoyed every bit of it. However, I wish we had more free time to explore on our own. Overall, a great experience!",
      img: "/assets/img/home1/testimonial-author-img3.png",
      videoUrl: "https://www.youtube.com/watch?v=MLpWrANjFbI",
      rating: 4.5,
    },
    {
      name: "Michael D Linda",
      role: "GoFly Traveler",
      title: "Great Visitors Venue!",
      text: "Thank you so much for your work on our honeymoon. We really did have such a great time and it was everything we were hoping!",
      img: "/assets/img/home1/testimonial-author-img4.png",
      videoUrl: "https://www.youtube.com/watch?v=MLpWrANjFbI",
      rating: 4.5,
    },
    {
      name: "Amber Lashley",
      role: "GoFly Traveler",
      title: "Fantastic Service!",
      text: "We have returned from Greece and want to let you know how terrific the trip was! Everything was great. We highly recommend them. Thank you so much!",
      img: "/assets/img/home1/testimonial-author-img5.png",
      rating: 5,
      isTrustpilot: true,
    },
  ];

  const renderRating = (rating, isTrustpilot = false) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <li key={i}>
            <i className="bi bi-circle-fill"></i>
          </li>
        );
      } else if (i < rating) {
        stars.push(
          <li key={i}>
            <i className="bi bi-circle-half"></i>
          </li>
        );
      } else {
        // You can add an empty star if you want
      }
    }
    if (isTrustpilot) {
      // Special rendering for trustpilot if needed, for now, it's the same.
    }
    return (
      <ul className={`rating-area ${isTrustpilot ? "trustpilot" : ""}`}>
        {stars}
      </ul>
    );
  };
  return (
    <>
    {/* home1 testimonial Section Start */}
      <div className="home1-testimonial-section mb-100">
        <div className="container">
          <div
            className="row justify-content-center mb-50 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center">
                <h2>Hear It from Travelers</h2>
                <p>
                  We go beyond just booking trips—we create unforgettable travel
                  experiences that match your dreams!
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-40">
            <div className="col-lg-12">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ el: ".testimonial-pagination", clickable: true }}
                breakpoints={{
                  280: { slidesPerView: 1 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  992: { slidesPerView: 3 },
                }}
                className="home1-testimonial-slider"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-card">
                      <div className="author-area">
                        <div className="author-img">
                          <img src={testimonial.img} alt="" />
                          {testimonial.videoUrl && (
                            <a
                              data-fancybox="video-player"
                              href={testimonial.videoUrl}
                              className="play-btn"
                            >
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="13"
                                  cy="13"
                                  r="12.5"
                                  fill="white"
                                  stroke="#110F0F"
                                />
                                <g>
                                  <path d="M8.4375 13V9.7519C8.4375 8.4062 9.89453 7.5644 11.0586 8.23823L13.873 9.86323L16.6875 11.4882C17.8535 12.1601 17.8535 13.8437 16.6875 14.5156L13.873 16.1406L11.0586 17.7656C9.89453 18.4355 8.4375 17.5957 8.4375 16.25V13Z" />
                                </g>
                              </svg>
                            </a>
                          )}
                        </div>
                        <div className="author-info">
                          <h5>{testimonial.name}</h5>
                          <span>{testimonial.role}</span>
                        </div>
                      </div>
                      {renderRating(
                        testimonial.rating,
                        testimonial.isTrustpilot
                      )}
                      <h5>{testimonial.title}</h5>
                      <div className="content">
                        <p>{testimonial.text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* <div
            className="review-wrap wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="tripadvisor-rating-area">
              <a
                href="https://www.tripadvisor.com/"
                className="tripadvisor-rating"
              >
                <img src="/assets/img/home1/icon/tripadvisor-logo.svg" alt="" />
                <div className="rating-area">
                  <span>Reviews</span>
                  <img
                    src="/assets/img/home1/icon/tripadvisor-start.svg"
                    alt=""
                  />
                </div>
              </a>
              <svg
                className="divider"
                width="6"
                height="52"
                viewBox="0 0 6 52"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 47L0.113249 52H5.88675L3.5 47H2.5ZM2.5 4.5V47.5H3.5V4.5H2.5Z" />
              </svg>
            </div>
            <a href="http://trustpilot.com/" className="trustpilot-rating-area">
              <strong>4.5</strong>
              <div className="trustpilot-rating">
                <img src="/assets/img/home1/icon/trustpilot-logo.svg" alt="" />
                <div className="rating-area">
                  <img
                    src="/assets/img/home1/icon/trustpilot-star.svg"
                    alt=""
                  />
                  <span>(2K reviews)</span>
                </div>
              </div>
            </a>
          </div> */}
        </div>
      </div>
      {/* home1 testimonial Section End */}
    </>
  )
}

export default Testimonial
