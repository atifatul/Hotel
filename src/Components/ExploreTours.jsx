import { useState, useEffect, useRef } from "react"; // useRef को import करें

import { Link } from "react-router-dom";

import axios from "axios";

const ExploreTours = () => {
  // --- States for API data and loading ---

  const [allPackages, setAllPackages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  // --- States for Search Filters ---

  const [allDestinations, setAllDestinations] = useState([]);

  const [availableThemes, setAvailableThemes] = useState([]);

  // --- States for User Selections ---

  const [selectedDestination, setSelectedDestination] = useState(null);

  const [selectedTheme, setSelectedTheme] = useState(null);

  // --- States for Dropdown controls ---

  const [isDestinationOpen, setIsDestinationOpen] = useState(false);

  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const [destinationSearchTerm, setDestinationSearchTerm] = useState("");

  // --- State for Final Filtered Results to display ---

  const [filteredPackages, setFilteredPackages] = useState([]);

  // --- Refs for dropdowns to handle outside clicks ---

  const destinationRef = useRef(null);

  const themeRef = useRef(null);

  // 1. API से डेटा Fetch करना (सिर्फ एक बार)

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
        // console.log(response);

        const packagesData = response.data.Package || [];

        setAllPackages(packagesData);

        setFilteredPackages(packagesData);

        const destinationsSet = new Set();

        packagesData.forEach((pkg) => {
          if (pkg.destination) {
            pkg.destination

              .split(",")

              .map((d) => d.trim())

              .filter((d) => d)

              .forEach((d) => destinationsSet.add(d));
          }
        });

        setAllDestinations(Array.from(destinationsSet));
      })

      .catch((error) => {
        console.error("Error fetching data:", error);

        setError("Failed to fetch packages.");
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  // 2. जब भी Destination बदले, तो उससे जुड़े Themes अपडेट करें

  useEffect(() => {
    if (selectedDestination) {
      const themesSet = new Set();

      allPackages

        .filter(
          (pkg) =>
            pkg.destination &&
            pkg.destination.includes(selectedDestination) &&
            pkg.themeName
        )

        .forEach((pkg) => themesSet.add(pkg.themeName));

      setAvailableThemes(Array.from(themesSet));

      setSelectedTheme(null);
    } else {
      setAvailableThemes([]);
    }
  }, [selectedDestination, allPackages]);

  // --- Effect to handle clicks outside of dropdowns ---

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        destinationRef.current &&
        !destinationRef.current.contains(event.target)
      ) {
        setIsDestinationOpen(false);
      }

      if (themeRef.current && !themeRef.current.contains(event.target)) {
        setIsThemeOpen(false);
      }
    };

    // Event listener जोड़ें

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function: component unmount होने पर listener हटा दें

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Destination dropdown के लिए search logic

  const filteredDestinations = destinationSearchTerm
    ? allDestinations.filter((dest) =>
        dest.toLowerCase().includes(destinationSearchTerm.toLowerCase())
      )
    : allDestinations.slice(0, 5);

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);

    setIsDestinationOpen(false);

    setDestinationSearchTerm("");
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);

    setIsThemeOpen(false);
  };

  // 3. Search बटन क्लिक पर Packages Filter करना

  const handleSearch = (e) => {
    e.preventDefault();

    let results = allPackages;

    if (selectedDestination) {
      results = results.filter(
        (pkg) =>
          pkg.destination && pkg.destination.includes(selectedDestination)
      );
    }

    if (selectedTheme) {
      results = results.filter((pkg) => pkg.themeName === selectedTheme);
    }

    setFilteredPackages(results);
  };

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
      {/* ... (Breadcrumb code is unchanged) ... */}

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

      {/* Search bar start */}

      <div className="filter-wrapper two mb-100">
        <div className="container">
          <div className="filter-input-wrap">
            <h6>Find Your Favourite Destinations</h6>

            <form className="filter-input show" onSubmit={handleSearch}>
              {/* Destination Dropdown */}

              <div className="single-search-box" ref={destinationRef}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M12.5944 8.99987C12.5944 10.988 10.9826 12.5998 8.99443 12.5998C7.00627 12.5998 5.39465 10.988 5.39465 8.99987C5.39465 7.0117 7.00627 5.40009 8.99443 5.40009C10.9826 5.40009 12.5944 7.0117 12.5944 8.99987Z" />

                    <path d="M17.4601 8.4599H16.2564C15.9858 4.86535 13.1291 2.00812 9.53458 1.7372V0.539976C9.53458 0.241723 9.29268 0 8.9946 0C8.69635 0 8.45462 0.241723 8.45462 0.539976V1.7372C4.85986 2.00812 2.00297 4.86535 1.73235 8.4599H0.540018C0.241723 8.4599 0 8.7017 0 8.99987C0 9.29813 0.241723 9.53985 0.539976 9.53985H1.73239C2.00297 13.1344 4.85991 15.9916 8.45441 16.2625V17.4601C8.45441 17.7583 8.69614 18 8.99439 18C9.29251 18 9.53428 17.7583 9.53428 17.4601V16.2625C13.1289 15.9918 15.9858 13.1346 16.2564 9.53985H17.4601C17.7583 9.53985 18 9.29813 18 8.99987C18 8.70175 17.7583 8.4599 17.4601 8.4599ZM8.99443 15.2096C5.56504 15.2094 2.78509 12.4291 2.78509 8.9997C2.78522 5.57014 5.56554 2.7902 8.99494 2.7902C12.4245 2.7902 15.2046 5.57048 15.2046 8.99987C15.2005 12.428 12.4225 15.2058 8.99443 15.2096Z" />
                  </g>
                </svg>

                <div
                  className="custom-select-dropdown destination-dropdown"
                  onClick={() => setIsDestinationOpen(!isDestinationOpen)}
                >
                  <input
                    type="text"
                    readOnly
                    value={selectedDestination || "Where are you going?"}
                  />
                </div>

                <div
                  className={`custom-select-wrap ${
                    isDestinationOpen ? "active" : ""
                  }`}
                >
                  <div className="custom-select-search-area">
                    <i className="bx bx-search"></i>

                    <input
                      type="text"
                      placeholder="Type Your Destination"
                      value={destinationSearchTerm}
                      onChange={(e) => setDestinationSearchTerm(e.target.value)}
                    />
                  </div>

                  <ul className="option-list-destination">
                    {filteredDestinations.length > 0 ? (
                      filteredDestinations.map((dest) => (
                        <li
                          key={dest}
                          onClick={() => handleDestinationSelect(dest)}
                        >
                          <div className="destination">
                            <h6>{dest}</h6>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li>No destination found</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Activity/Theme Dropdown */}

              <div className="single-search-box" ref={themeRef}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.3023 4.186H9.99992C9.81489 4.186 9.63743 4.1125 9.50659 3.98166C9.37575 3.85082 9.30225 3.67336 9.30225 3.48833C9.30225 3.30329 9.37575 3.12583 9.50659 2.99499C9.63743 2.86415 9.81489 2.79065 9.99992 2.79065H19.3023C19.4873 2.79065 19.6648 2.86415 19.7956 2.99499C19.9265 3.12583 20 3.30329 20 3.48833C20 3.67336 19.9265 3.85082 19.7956 3.98166C19.6648 4.1125 19.4873 4.186 19.3023 4.186ZM17.4418 7.90695H9.99992C9.81489 7.90695 9.63743 7.83344 9.50659 7.7026C9.37575 7.57176 9.30225 7.39431 9.30225 7.20927C9.30225 7.02424 9.37575 6.84678 9.50659 6.71594C9.63743 6.5851 9.81489 6.5116 9.99992 6.5116H17.4418C17.6269 6.5116 17.8043 6.5851 17.9351 6.71594C18.066 6.84678 18.1395 7.02424 18.1395 7.20927C18.1395 7.39431 18.066 7.57176 17.9351 7.7026C17.8043 7.83344 17.6269 7.90695 17.4418 7.90695ZM19.3023 13.4884H9.99992C9.81489 13.4884 9.63743 13.4149 9.50659 13.284C9.37575 13.1532 9.30225 12.9757 9.30225 12.7907C9.30225 12.6057 9.37575 12.4282 9.50659 12.2974C9.63743 12.1665 9.81489 12.093 9.99992 12.093H19.3023C19.4873 12.093 19.6648 12.1665 19.7956 12.2974C19.9265 12.4282 20 12.6057 20 12.7907C20 12.9757 19.9265 13.1532 19.7956 13.284C19.6648 13.4149 19.4873 13.4884 19.3023 13.4884ZM17.4418 17.2093H9.99992C9.81489 17.2093 9.63743 17.1358 9.50659 17.005C9.37575 16.8741 9.30225 16.6967 9.30225 16.5116C9.30225 16.3266 9.37575 16.1491 9.50659 16.0183C9.63743 15.8875 9.81489 15.814 9.99992 15.814H17.4418C17.6269 15.814 17.8043 15.8875 17.9351 16.0183C18.066 16.1491 18.1395 16.3266 18.1395 16.5116C18.1395 16.6967 18.066 16.8741 17.9351 17.005C17.8043 17.1358 17.6269 17.2093 17.4418 17.2093Z" />

                  <path d="M3.48839 8.83719C5.41497 8.83719 6.97677 7.27538 6.97677 5.3488C6.97677 3.42222 5.41497 1.86041 3.48839 1.86041C1.5618 1.86041 0 3.42222 0 5.3488C0 7.27538 1.5618 8.83719 3.48839 8.83719Z" />

                  <path d="M3.48839 18.1396C5.41497 18.1396 6.97677 16.5778 6.97677 14.6512C6.97677 12.7246 5.41497 11.1628 3.48839 11.1628C1.5618 11.1628 0 12.7246 0 14.6512C0 16.5778 1.5618 18.1396 3.48839 18.1396Z" />
                </svg>

                <div
                  className="custom-select-dropdown"
                  onClick={() => setIsThemeOpen(!isThemeOpen)}
                >
                  <input
                    type="text"
                    readOnly
                    value={selectedTheme || "Activity Category"}
                  />
                </div>

                <div
                  className={`custom-select-wrap two no-scroll ${
                    isThemeOpen ? "active" : ""
                  }`}
                >
                  <ul className="option-list">
                    {availableThemes.length > 0 ? (
                      availableThemes.map((theme) => (
                        <li
                          className="single-item"
                          key={theme}
                          onClick={() => handleThemeSelect(theme)}
                        >
                          <h6>{theme}</h6>
                        </li>
                      ))
                    ) : (
                      <li className="single-item">
                        <h6>Select destination first</h6>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* ... Date and Submit Button ... */}

              <div className="single-search-box date-field">{/*...*/}</div>

              <button type="submit" className="primary-btn1 three">
                {/*...*/} Find Activities
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Search bar end */}

      {/* Package Grid Page Start */}

      <div className="package-grid-page pt-100 mb-100">
        <div className="container">
          <div className="col-lg-12">
            <div className="list-grid-product-wrap">
              <div className="row gy-md-5 gy-4">
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
                            />
                          </a>
                        </div>

                        {/* **** यह हिस्सा ठीक किया गया है **** */}

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
                  <p>No packages found for the selected criteria.</p>
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
