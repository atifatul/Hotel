import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// Naye search component ko import karein
import ActivitySearchFilter from "./ActivitySearchFilter"; // Sahi path dein

const ExploreTours = () => {
  // --- States for API data and loading ---
  const [allPackages, setAllPackages] = useState([]); // API se mila saara data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- State for Final Filtered Results to display ---
  const [filteredPackages, setFilteredPackages] = useState([]); // Woh packages jo user ko dikhenge

  // 1. API से डेटा Fetch करना (सिर्फ एक बार)
  useEffect(() => {
    const url = "http://localhost/crm/API/packagelist.php";
    const requestBody = {
      EndUserIp: "192.110.1.33", // Note: IP address change kiya, 192.168 local hota hai
      searchdestination: "",
      TokenId: "1",
    };

    axios
      .post(url, requestBody)
      .then((response) => {
        const packagesData = response.data.Package || [];
        setAllPackages(packagesData); // Saare packages ko save karein
        setFilteredPackages(packagesData); // Shuru mein saare packages dikhayein
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch packages.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // [] matlab yeh sirf ek baar run hoga

  // 2. Search component se mile criteria ke basis par filter karna
  // Yeh function 'ActivitySearchFilter' component ko as a prop pass kiya jayega
  const handleSearch = (criteria) => {
    const { destination, theme, duration } = criteria;

    let results = allPackages;

    if (destination) {
      results = results.filter(
        (pkg) => pkg.destination && pkg.destination.includes(destination)
      );
    }

    if (theme) {
      results = results.filter((pkg) => pkg.themeName === theme);
    }

    if (duration) {
      // 'duration' string "5 Days / 4 Nights" jaisi hai
      // Ise wapas 'days' aur 'nights' mein todna hoga
      const parts = duration.split(" / "); // ["5 Days", "4 Nights"]
      const daysValue = parts[0].split(" ")[0]; // "5"
      const nightsValue = parts[1].split(" ")[0]; // "4"

      results = results.filter(
        (pkg) => pkg.days === daysValue && pkg.nights === nightsValue
      );
    }

    setFilteredPackages(results);
  };

  // Loading aur Error states
  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Loading tours...
      </div>
    );

  if (error)
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
        {error}
      </div>
    );

  return (
    <>
      {/* ... (Aapka Breadcrumb code) ... */}
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/img/innerpages/breadcrumb-bg3.jpg')",
        }}
      >
        <div className="container">
          <div className="banner-content">
            <h1>Explore Tours</h1>
          </div>
        </div>
      </div>

      {/* === Search bar ki jagah naya component === */}

      <ActivitySearchFilter
        allPackages={allPackages}
        onSearch={handleSearch}
        isLoading={loading}
      />
      {/* === Search bar end === */}

      {/* Package Grid Page Start */}
      <div className="package-grid-page pt-100 mb-100" style={{marginTop:"-130px"}}>
        <div className="container">
          <div className="col-lg-12">
            <div className="list-grid-product-wrap">
              <div className="row gy-md-5 gy-4">
                {/* Ab yeh 'filteredPackages' state se map hoga */}
                {filteredPackages.length > 0 ? (
                  filteredPackages.map((pkg) => (
                    <div
                      key={pkg.packageId}
                      className="col-lg-4 col-md-6 col-12 item wow animate fadeInDown"
                    >
                      <div className="package-card four">
                        <div className="package-img-wrap">
                          <a href="#" className="package-img">
                            <img
                              src={
                                pkg.banner.endsWith("/")
                                  ? "assets/img/innerpages/tour-package-img1.jpg"
                                  : pkg.banner
                              }
                              alt={pkg.name}
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                              }}
                            />
                          </a>
                        </div>

                        <div className="package-content">
                          <div className="package-content-title-area">
                            <h5>
                              <a href="#">{pkg.name}</a>
                            </h5>
                          </div>
                          <div className="package-content-bottom-area">
                            <ul className="package-info-list">
                              <li>
                                <span>Duration:</span> {pkg.days} Days/{" "}
                                {pkg.nights} Nights
                              </li>
                            </ul>
                            <div className="btn-and-price-area">
                              <Link
                                to={`/insideTour/${pkg.packageId}`}
                                className="primary-btn1"
                              >
                                <span>
                                  Book Now{" "}
                                  <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                  </svg>
                                </span>
                              </Link>
                              <div className="price-area">
                                <h6>Per Person</h6>
                                <span>₹{pkg.price || "N/A"}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "50px",
                      width: "100%",
                    }}
                  >
                    <h3>No packages found</h3>
                    <p>Try adjusting your search criteria.</p>
                  </div>
                )}
              </div>
            </div>
            {/* ... (Pagination remains unchanged) . */}
          </div>
        </div>
      </div>
      {/* Package Grid Page End*/}
    </>
  );
};

export default ExploreTours;
