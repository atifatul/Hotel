import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home1destination_section = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use the proxied URL
    const url = "http://localhost/crm/API/packagethemelist.php";
    const requestBody = {
      EndUserIp: "192.168.1.33",
      //   type: "domestic",
      TokenId: "1",
    };

    axios
      .post(url, requestBody)
      .then((response) => {
        console.log("API Response:", response.data.data);
        const destinationList = response.data.data || [];

        if (destinationList.length === 0) {
          setError("No theme found.");
        }
        setDestinations(destinationList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch theme.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="home6-destination-section mb-60">
        <div className="container">
          <div
            className="row justify-content-center mb-50 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center">
                <h2>Popular Theme </h2>
              </div>
            </div>
          </div>
          <div className="row g-xl-4 g-md-3 g-4">
            {loading ? (
              <p>Loading destinations...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <>
                {destinations[0] && (
                  <div
                    className="col-md-4 wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div
                      className="destination-card3 sm-card  "
                      style={{ height: "470px" }}
                    >
                      <img
                        style={{ height: "470px", objectFit: "fill" }}
                        src={destinations[0].photo}
                        alt={"#"}
                      />
                      <div className="destination-content">
                        <h2>
                          <Link to={`/Explore-Tours?theme=${destinations[0].name}`}>
                            {destinations[0].name}
                          </Link>
                          {/* <a href="#">{destinations[0].name}</a> */}
                          <span> Activities</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-md-4">
                  {destinations[1] && (
                    <div className="destination-card3 sm-card mb-20">
                      <img src={destinations[1].photo} alt={"#"} />
                      <div className="destination-content">
                        <h2>
                          <Link to={`/Explore-Tours?theme=${destinations[1].name}`}>
                            {destinations[1].name}
                          </Link>
                          {/* <a href="#">{destinations[1].name}</a> */}
                          <span> Activities</span>
                        </h2>
                      </div>
                    </div>
                  )}
                  {destinations[2] && (
                    <div className="destination-card3 sm-card">
                      <img src={destinations[2].photo} alt={"#"} />
                      <div className="destination-content">
                        <h2>
                          <Link to={`/Explore-Tours?theme=${destinations[2].name}`}>
                            {destinations[2].name}
                          </Link>
                          {/* <a href="#">{destinations[2].name}</a> */}
                          <span>Activities</span>
                        </h2>
                      </div>
                    </div>
                  )}
                </div>
                {destinations[3] && (
                  <div
                    className="col-md-4 wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div
                      className="destination-card3 sm-card "
                      style={{ height: "470px" }}
                    >
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "fill",
                        }}
                        src={destinations[3].photo}
                        alt={"#"}
                      />
                      <div className="destination-content">
                        <h2>
                          <Link to={`/Explore-Tours?theme=${destinations[3].name}`}>
                            {destinations[3].name}
                          </Link>
                          {/* <a href="#">{destinations[3].name}</a> */}
                          <span> Activities</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="home6-service-section mb-100">
        <div className="container">
          <div className="service-wrapper five">
            <div
              className="row justify-content-center wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="col-lg-9">
                <div className="section-title">
                  <h2>
                    We’re commited Our Traveler{" "}
                    <span>to provide best services.</span>
                  </h2>
                </div>
              </div>
            </div>
            <ul
              className="service-list wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <li className="single-service">
                <div className="icon">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M27.2713 21.3914L13.5213 10.1414C13.4297 10.0664 13.3187 10.0188 13.2012 10.0044C13.0836 9.98999 12.9644 10.0092 12.8574 10.0599C12.7504 10.1106 12.66 10.1906 12.5968 10.2907C12.5335 10.3908 12.4999 10.5068 12.5 10.6252V29.3752C12.5001 29.5093 12.5433 29.6398 12.6233 29.7474C12.7033 29.8551 12.8157 29.9341 12.9441 29.9729C13.0724 30.0117 13.2099 30.0083 13.3361 29.963C13.4623 29.9177 13.5706 29.833 13.645 29.7214L18.46 22.5002H26.875C27.004 22.5003 27.1298 22.4605 27.2353 22.3862C27.3407 22.312 27.4207 22.207 27.4641 22.0855C27.5075 21.9641 27.5122 21.8322 27.4777 21.7079C27.4432 21.5836 27.3711 21.4731 27.2713 21.3914Z" />
                      <path d="M9.75999 19.3751C4.93499 17.5201 2.51999 12.0851 4.37499 7.26008C6.22999 2.43508 11.665 0.020083 16.49 1.87508C21.315 3.73008 23.73 9.16633 21.875 13.9901C21.8203 14.1437 21.8278 14.3126 21.8958 14.4607C21.9639 14.6089 22.0871 14.7246 22.2393 14.7831C22.3915 14.8417 22.5605 14.8384 22.7103 14.7741C22.8601 14.7098 22.9789 14.5895 23.0412 14.4388C25.1437 8.97008 22.4062 2.81008 16.9387 0.707583C11.4712 -1.39492 5.31124 1.34258 3.20874 6.81008C1.10624 12.2788 3.84374 18.4388 9.31124 20.5413C9.46607 20.6008 9.63819 20.5965 9.78981 20.5292C9.94143 20.462 10.0602 20.3373 10.12 20.1826C10.1787 20.0277 10.1738 19.8559 10.1064 19.7047C10.0389 19.5534 9.91442 19.4349 9.75999 19.3751Z" />
                    </g>
                  </svg>
                </div>
                <div className="content">
                  <h4>One Click Booking</h4>
                  <p>
                    You can hassle-free and fast tour & travel package booking
                    by Us.
                  </p>
                </div>
              </li>
              <li className="single-service">
                <div className="icon">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.4896 4.14404C19.8384 3.81275 19.0419 4.07233 18.7107 4.72379L8.87091 24.0772C8.53971 24.7285 8.79929 25.5249 9.45066 25.8561C9.63601 25.9507 9.84112 26 10.0492 26C10.5313 26 10.996 25.7356 11.2296 25.2763L21.0694 5.92297C21.4006 5.27161 21.141 4.47523 20.4896 4.14404ZM13.4243 10.5172C13.4243 7.75042 11.1733 5.49943 8.40653 5.49943C5.63991 5.49943 3.38892 7.75042 3.38892 10.5172C3.38892 13.2839 5.63991 15.5349 8.40662 15.5349C11.1734 15.5349 13.4243 13.2839 13.4243 10.5172ZM8.40662 12.8889C7.09894 12.8889 6.03496 11.8249 6.03496 10.5172C6.03496 9.20945 7.09894 8.14548 8.40662 8.14548C9.71438 8.14548 10.7784 9.20937 10.7784 10.5172C10.7783 11.8249 9.71438 12.8889 8.40662 12.8889ZM21.5934 14.4653C18.8266 14.4653 16.5756 16.7163 16.5756 19.483C16.5756 22.2497 18.8265 24.5007 21.5934 24.5007C24.3601 24.5007 26.6111 22.2498 26.6111 19.483C26.6111 16.7162 24.3602 14.4653 21.5934 14.4653ZM21.5934 21.8546C20.2856 21.8546 19.2216 20.7906 19.2216 19.4829C19.2216 18.1752 20.2856 17.1113 21.5934 17.1113C22.901 17.1113 23.965 18.1752 23.965 19.4829C23.965 20.7906 22.9011 21.8546 21.5934 21.8546Z" />
                  </svg>
                </div>
                <div className="content">
                  <h4>Deals & Discounts</h4>
                  <p>
                    Agencies have special discounts on flights, hotels, &
                    packages.
                  </p>
                </div>
              </li>
              <li className="single-service">
                <div className="icon">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15 0C21.4662 0 26.7081 5.24194 26.7081 11.7081C26.7081 18.1743 21.4662 23.4163 15 23.4163C8.53375 23.4163 3.29187 18.1743 3.29187 11.7081C3.29187 5.24194 8.53375 0 15 0ZM23.7899 20.886C22.1639 22.4438 20.1246 23.5736 17.8531 24.0947L19.8539 28.7401L22.0141 25.2591L26.0274 26.081L23.7899 20.886ZM12.758 24.2191C10.4637 23.8108 8.38243 22.7867 6.69112 21.324L3.97262 27.1631L8.00831 26.4579L10.0666 30L12.758 24.2191ZM15.1981 7.58544C15.1294 7.40431 14.8707 7.40431 14.8019 7.58544L13.7848 10.2644C13.7706 10.3033 13.7451 10.337 13.7117 10.3613C13.6782 10.3856 13.6383 10.3994 13.597 10.4009L10.7348 10.5404C10.5401 10.5498 10.4604 10.7951 10.6124 10.9172L12.8459 12.7124C12.8785 12.7379 12.9027 12.7726 12.9154 12.8119C12.9282 12.8512 12.929 12.8934 12.9177 12.9332L12.1659 15.6984C12.1147 15.8865 12.3233 16.0381 12.4864 15.9313L14.8839 14.3618C14.9182 14.3387 14.9586 14.3264 15 14.3264C15.0413 14.3264 15.0817 14.3387 15.116 14.3618L17.5136 15.9313C17.6767 16.0381 17.8853 15.8865 17.8341 15.6984L17.0823 12.9333C17.071 12.8935 17.0717 12.8513 17.0845 12.8119C17.0973 12.7726 17.1215 12.738 17.154 12.7125L19.3876 10.9172C19.5395 10.7951 19.4598 10.5499 19.2652 10.5404L16.403 10.4009C16.3617 10.3994 16.3218 10.3856 16.2883 10.3613C16.2549 10.337 16.2294 10.3033 16.2152 10.2645L15.1981 7.58544ZM16.1065 3.43C15.4404 2.93137 14.5596 2.93137 13.8935 3.43C12.1593 4.72812 12.5526 4.58494 10.3897 4.70525C9.55893 4.75144 8.88418 5.31763 8.69443 6.12775C8.20037 8.23687 8.40962 7.87438 6.83012 9.35688C6.22343 9.92631 6.0705 10.7937 6.44587 11.5363C7.42312 13.4695 7.35043 13.0574 7.09337 15.2083C6.99462 16.0344 7.43506 16.7972 8.19987 17.1248C10.1912 17.9776 9.87056 17.7085 11.0562 19.5215C11.5116 20.2179 12.3392 20.5191 13.1357 20.2784C15.2093 19.6517 14.7908 19.6517 16.8644 20.2784C17.6609 20.5191 18.4886 20.2178 18.9439 19.5215C20.1296 17.7086 19.809 17.9776 21.8002 17.1248C22.5651 16.7972 23.0055 16.0344 22.9067 15.2083C22.6497 13.0573 22.577 13.4695 23.5542 11.5363C23.9296 10.7937 23.7766 9.92631 23.17 9.35688C21.5904 7.87444 21.7997 8.23687 21.3057 6.12775C21.1159 5.31763 20.4412 4.7515 19.6104 4.70525C17.4474 4.58494 17.8407 4.72806 16.1065 3.43Z"
                    />
                  </svg>
                </div>
                <div className="content">
                  <h4>Local Guidance</h4>
                  <p>
                    Travel agencies have experienced professionals guidance.
                  </p>
                </div>
              </li>
            </ul>
            <div
              className="bottom-area d-flex justify-content-center wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="batch">
                <span>You’ve Customize Your Travel Package by One Click.</span>
                <Link to="/contact" >
                  Customize Package
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/img/home6/vector/service-section-vector1.svg"
          alt=""
          className="vector1"
        />
        <img
          src="assets/img/home6/vector/service-section-vector2.svg"
          alt=""
          className="vector2"
        />
      </div>
    </>
  );
};

export default Home1destination_section;
