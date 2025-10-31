import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCompany } from "./Context/Company_context";

const Navbar1 = () => {
  const { companydata } = useCompany();
  const logo = `${companydata.image}${companydata.websiteLogo}`;

  // State for scroll to top button
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Show button
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate progress
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollProgress =
        totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;

      // Assuming the path length is around 308 for a 102x102 viewbox with a 49 radius circle
      const pathLength = 307.919;
      const progressOffset = pathLength - (scrollProgress / 100) * pathLength;
      setProgress(progressOffset);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  // Domestic aur International ke liye alag-alag state
  const [domesticDestinations, setDomesticDestinations] = useState([]);
  const [internationalDestinations, setInternationalDestinations] = useState(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://localhost/crm/API/destinationlist.php";
    const requestBody = {
      EndUserIp: "192.168.1.33",
      TokenId: "1",
    };

    axios
      .post(url, requestBody)
      .then((response) => {
        // console.log("Full Response:", response);

        console.log("API Response:", response.data);

        // API response se Domestic aur International lists ko nikalein
        const domesticList = response.data.Destination.Domestic || [];
        const internationalList = response.data.Destination.International || [];

        if (domesticList.length === 0 && internationalList.length === 0) {
          setError("No destinations found.");
        }

        // Dono states ko update karein
        setDomesticDestinations(domesticList);
        setInternationalDestinations(internationalList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch destinations.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Destination list ko render karne ke liye ek helper function
  const renderDestinationList = (destinations) => {
    // Sirf pehle 6 items dikhane ke liye slice() ka istemal
    return destinations.slice(0, 6).map((dest, index) => {
      // URL-friendly format mein convert karein
      const slug = dest.name.replace(/ & /g, "-and-").replace(/ /g, "-");
      return (
        <li key={index}>
          <Link
            to={`/Explore-Tours?destination=${slug}`}
            // to={`/destination/${slug}`}
            onClick={() => setIsDestinationOpen(false)}
          >
            {/* Agar photo hai to dikhayein, nahi to default icon */}
            <img
              src={"/assets/img/home1/default-flag.png"} // Default flag agar photo na ho
              alt=""
              // onError={(e) => { e.target.onerror = null; e.target.src="/assets/img/home1/default-flag.png"; }} // Fallback agar image load na ho
            />
            {dest.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <div
        className={`progress-wrap ${isVisible ? "active-progress" : ""}`}
        onClick={scrollToTop}
        style={{ cursor: "pointer" }}
      >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: progress,
            }}
          />
        </svg>
        <svg
          className="arrow"
          width="22"
          height="25"
          viewBox="0 0 24 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.556131 11.4439L11.8139 0.186067L13.9214 2.29352L13.9422 20.6852L9.70638 20.7061L9.76793 8.22168L3.6064 14.4941L0.556131 11.4439Z" />
          <path d="M23.1276 11.4999L16.0288 4.40105L15.9991 10.4203L20.1031 14.5243L23.1276 11.4999Z" />
        </svg>
      </div>

      <header
        className="style-1 two"
        style={{ padding: "15px 0px", position: "fixed", top: "0px" }}
      >
        <div className="container d-flex flex-nowrap align-items-center justify-content-between">
          <a href="/" className="header-logo">
            <img
              src={logo}
              alt="logo"
              style={{ width: "160px", height: "auto" }}
            />
            {/* <img src="/assets/img/header-logo3.svg" alt="logo" className="" /> */}
          </a>
          <div className="main-menu">
            <div className="mobile-logo-area d-lg-none d-flex align-items-center justify-content-between">
              <a href="index.html" className="mobile-logo-wrap">
                <img src="/assets/img/header-logo2.svg" alt="" />
              </a>
              <div className="menu-close-btn">
                <i className="bi bi-x"></i>
              </div>
            </div>

            <ul className="menu-list">
              <li className="menu-item-has-children active">
                <Link to="/" className="drop-down">
                  Home
                </Link>
              </li>

              <li
                className="menu-item-has-children position-inherit"
                onMouseEnter={() => setIsDestinationOpen(true)}
                onMouseLeave={() => setIsDestinationOpen(false)}
              >
                <a href="#" className="drop-down">
                  Destination
                  <i className="bi bi-caret-down-fill"></i>
                </a>
                <i className="bi bi-plus dropdown-icon"></i>
                <div
                  className="mega-menu"
                  style={{ display: isDestinationOpen ? "block" : "none" }}
                >
                  <div className="container">
                    <div className="menu-row">
                      {loading ? (
                        <div className="menu-single-item">Loading...</div>
                      ) : error ? (
                        <div className="menu-single-item">{error}</div>
                      ) : (
                        <>
                          {/* Domestic Column */}
                          <div className="menu-single-item">
                            <div className="menu-title">
                              <h5>Domestic</h5>
                            </div>
                            <ul className="destination-list-horizontal">
                              {domesticDestinations.length > 0 ? (
                                renderDestinationList(domesticDestinations)
                              ) : (
                                <li>No domestic destinations.</li>
                              )}
                            </ul>
                          </div>

                          {/* International Column */}
                          <div className="menu-single-item">
                            <div className="menu-title">
                              <h5>International</h5>
                            </div>
                            <ul className="destination-list-horizontal">
                              {internationalDestinations.length > 0 ? (
                                renderDestinationList(internationalDestinations)
                              ) : (
                                <li>No international destinations.</li>
                              )}
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <img
                    src="/assets/img/home1/mega-menu-vector1.svg"
                    alt=""
                    className="vector1"
                  />
                  <img
                    src="/assets/img/home1/mega-menu-vector2.svg"
                    alt=""
                    className="vector2"
                  />
                </div>
              </li>

              <li>
                <Link to="/Explore-Tours"> Explore Tours</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Baaki ka menu aur mobile view ka code yahan se shuru hota hai */}

            <div className="language-and-login-area d-lg-none d-block">
              {/* ... mobile menu ka content ... */}
            </div>
          </div>
          <div className="nav-right">{/* ... nav right content ... */}</div>
        </div>
      </header>
    </>
  );
};

export default Navbar1;
