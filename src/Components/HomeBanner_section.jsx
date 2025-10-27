import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // <-- useNavigate ko import karein
import axios from "axios";
import { useCompany } from "./Context/Company_context";
import ActivitySearchFilter from "./ActivitySearchFilter";

const HomeBanner_section = () => {
  const { companydata } = useCompany();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [homebanner, sethomebanner] = useState([]);

  // ========== NAYE STATES SEARCH FILTER KE LIYE ==========
  const [allPackages, setAllPackages] = useState([]);
  const [packagesLoading, setPackagesLoading] = useState(true);
  // const [packagesError, setPackagesError] = useState(null); // Aap chahein toh error handling add kar sakte hain
  const navigate = useNavigate(); // <-- NAYA: Redirect karne ke liye
  // ========================================================

  // --- PURANA CODE (CONFLICTING STATES) - INHEIN REMOVE KAR DEIN ---
  // const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  // const [selectedDestination, setSelectedDestination] = useState({
  //   name: "Cox's Bazar",
  //   country: "Bangladesh",
  // });
  // const [searchTerm, setSearchTerm] = useState("");
  // const destinations = [ ... ];
  // const filteredDestinations = ...;
  // const handleDestinationSelect = (destination) => { ... };
  // -------------------------------------------------------------

  // Yeh useEffect 'homebanner' API ko call karta hai (Ise waise hi rehne dein)
  useEffect(() => {
    // Use the proxied URL
    const url = "http://localhost/crm/API/homebanner.php";
    const requestBody = {
      EndUserIp: "192.168.1.33",
      TokenId: "1",
    };

    axios
      .post(url, requestBody)
      .then((response) => {
        let info = response.data.BannerDetails;
        console.log("Raw API Response for BannerDetails:", info);

        if (info && typeof info === "string") {
          try {
            const cleanedString = info.replace(/[\n\r\t]/g, "");
            info = JSON.parse(cleanedString);
            console.log("Parsed info from string:", info);
          } catch (e) {
            console.error("Failed to parse websiteinfo string:", e);
            setError("Website info format is incorrect.");
            return;
          }
        }

        if (info && typeof info === "object" && Object.keys(info).length > 0) {
          sethomebanner(info);
        } else {
          setError("Website info not found or is empty.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch theme.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // ========== NAYA useEffect SEARCH FILTER DATA KE LIYE ==========
  useEffect(() => {
    const url = "http://localhost/crm/API/packagelist.php";
    const requestBody = {
      EndUserIp: "192.168.1.33",
      searchdestination: "",
      TokenId: "1",
    };

    axios
      .post(url, requestBody)
      .then((response) => {
        const packagesData = response.data.Package || [];
        setAllPackages(packagesData); // <-- Data ko state mein set karein
      })
      .catch((error) => {
        console.error("Error fetching packages for filter:", error);
        // setPackagesError("Failed to load search filter data."); // Optional error handling
      })
      .finally(() => {
        setPackagesLoading(false); // <-- Filter ki loading ko false set karein
      });
  }, []); // [] matlab yeh sirf ek baar run hoga
  // ==============================================================

  // Yeh useEffect Swiper ke liye hai (Ise waise hi rehne dein)
  useEffect(() => {
    const swiper = new Swiper(".home6-banner-slider", {
      // ... aapki swiper settings
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".banner-slider-next",
        prevEl: ".banner-slider-prev",
      },
      pagination: {
        el: ".franctional-pagi1",
        type: "fraction",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  // ========== NAYA 'handleSearch' FUNCTION ==========
  // Yeh function ActivitySearchFilter se data lega
  const handleSearch = (criteria) => {
    const { destination, theme, duration } = criteria;

    // Search criteria ko URL query parameters mein convert karein
    const queryParams = new URLSearchParams();
    if (destination) queryParams.append("destination", destination);
    if (theme) queryParams.append("theme", theme);
    if (duration) queryParams.append("duration", duration);

    // User ko '/Explore-Tours' page par redirect karein, search query ke saath
    navigate(`/Explore-Tours?${queryParams.toString()}`);
  };
  // ===================================================

  return (
    <>
      <div className="home6-banner-section">
        <div className="swiper home6-banner-slider">
          <div className="swiper-wrapper">
            {loading ? (
              <p>Loading ....</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <>
                {/* ...Aapka saara swiper-slide ka code (no change) ... */}
                {homebanner[0] && (
                  <div className="swiper-slide">
                    <div className="banner-wrapper">
                      <div className="banner-img-area">
                        <img src={homebanner[0].photo} alt="" />
                      </div>
                      <div className="banner-content-wrap">
                        <div className="container">
                          <div className="banner-content two">
                            <h1>{homebanner[0].name}</h1>
                            <Link
                              to="/Explore-Tours"
                              className="primary-btn1 two"
                            >
                              <span>
                                View All Tour
                                <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
                                </svg>
                              </span>
                              <span>
                                View All Tour
                                <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
                                </svg>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* ... baaki ke swiper-slide components ... */}

              </>
            )}
          </div>
        </div>
        
        {/* ... Aapka slider-btn-grp aur social-list ... */}
        <div className="slider-btn-grp">
           {/* ... buttons ... */}
        </div>
        <ul className="social-list">
           {/* ... social links ... */}
        </ul>

      </div>
      
      {/* Search bar start */}
      <ActivitySearchFilter
        allPackages={allPackages}
        onSearch={handleSearch}
        isLoading={packagesLoading}
      />
      {/* Search bar end  */}
    </>
  );
};

export default HomeBanner_section;