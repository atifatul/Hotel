import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import ActivitySearchFilter from "./ActivitySearchFilter";

const ExploreTours = () => {
  // --- States for API data and loading ---
  const [allPackages, setAllPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- State for Final Filtered Results ---
  const [filteredPackages, setFilteredPackages] = useState([]);

  // ***** NAYA CHANGE: Pagination ke liye State *****
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // 3 rows * 3 items. Aap ise 12 kar sakte hain (4 rows)

  // --- Read URL Search Parameters ---
  const [searchParams] = useSearchParams();
  const urlDest = searchParams.get("destination");
  const urlTheme = searchParams.get("theme");
  const urlDuration = searchParams.get("duration");

  // 1. API से डेटा Fetch करना (No Change)
  useEffect(() => {
    const url = "http://localhost/crm/API/packagelist.php";
    const requestBody = {
      EndUserIp: "192.110.1.33",
      searchdestination: "",
      TokenId: "1",
    };

    axios
      .post(url, requestBody)
      .then((response) => {
        const packagesData = response.data.Package || [];
        setAllPackages(packagesData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch packages.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // 2. Search criteria ke basis par filter karna
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
      const parts = duration.split(" / ");
      if (parts.length === 2) {
        const daysValue = parts[0].split(" ")[0];
        const nightsValue = parts[1].split(" ")[0];
        results = results.filter(
          (pkg) =>
            String(pkg.days) === daysValue && String(pkg.nights) === nightsValue
        );
      }
    }
    setFilteredPackages(results);
    // ***** NAYA CHANGE: Jab bhi naya search ho, page 1 par reset kar dein *****
    setCurrentPage(1);
  };

  // 3. URL Params ke basis par filter karna
  useEffect(() => {
    if (!loading && allPackages.length > 0) {
      if (urlDest || urlTheme || urlDuration) {
        handleSearch({
          destination: urlDest,
          theme: urlTheme,
          duration: urlDuration,
        });
      } else {
        setFilteredPackages(allPackages);
        // ***** NAYA CHANGE: Yahaan bhi page 1 par reset karein *****
        setCurrentPage(1);
      }
    }
  }, [loading, allPackages, urlDest, urlTheme, urlDuration]); // handleSearch ko dependency se hata sakte hain

  // ***** NAYA CHANGE: Pagination ke liye Calculations *****

  // Total pages calculate karein
  const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);

  // Current page ke liye items calculate karein
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredPackages.slice(firstItemIndex, lastItemIndex);

  // Page change ke liye functions
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Page change par top par scroll karein
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Dynamic page numbers banana (e.g., 1, 2, 3...)
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  // ***** NAYA CHANGE END *****

  // Loading aur Error states (No Change)
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

  // --- RETURN JSX ---
  return (
    <>
      {/* ... (Breadcrumb) ... */}
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/img/innerpages/breadcrumb-bg3.jpg')",
          marginTop: "-30px",
        }}
      >
        <div className="container">
          <div className="banner-content">
            <h1>Explore Tours</h1>
          </div>
        </div>
      </div>
      {/* === Breadcrumb end === */}
      {/* === Search bar start === */}
      <ActivitySearchFilter
        allPackages={allPackages}
        onSearch={handleSearch}
        isLoading={loading}
        initialDestination={urlDest}
        initialTheme={urlTheme}
        initialDuration={urlDuration}
      />
      {/* === Search bar end === */}
      {/* Package Grid Page Start */}
      <div
        className="package-grid-page pt-100 mb-100"
        style={{ marginTop: "-130px" }}
      >
        <div className="container">
          <div className="col-lg-12">
            <div className="list-grid-product-wrap">
              <div className="row gy-md-5 gy-4">
                {/* ***** NAYA CHANGE: 'filteredPackages' ki jagah 'currentItems' ko map karein ***** */}
                {currentItems.length > 0
                  ? currentItems.map((pkg) => (
                      <div
                        key={pkg.packageId}
                        className="col-lg-4 col-md-6 col-12 item wow animate fadeInDown"
                      >
                        {/* ... (Aapka Package Card JSX poora same rahega) ... */}
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
                                  <span>Duration:</span> {pkg.days} Days/
                                  {pkg.nights} Nights
                                </li>
                              </ul>
                              <div className="btn-and-price-area">
                                <Link
                                  to={`/insideTour/${pkg.packageId}`}
                                  className="primary-btn1"
                                >
                                  {/* ... (Book Now Button JSX) ... */}
                                  <span>
                                      Book Now  {" "}
                                    <svg
                                      width="10"
                                      height="10"
                                      viewBox="0 0 10 10"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                    </svg>
                                  </span>
                                  <span>
                                      Book Now  {" "}
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
                  : // ***** NAYA CHANGE: Ab 'No packages found' tabhi dikhega jab 'filteredPackages' 0 ho *****
                    // Yeh check 'filteredPackages' par hi rahega, 'currentItems' par nahi
                    filteredPackages.length === 0 &&
                    !loading && (
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
          </div>
        </div>
      </div>

      {/* ***** NAYA CHANGE: Dynamic Pagination Logic ***** */}
      {/* Sirf tabhi dikhao jab 1 se zyada page ho */}
      {totalPages > 1 && (
        <div
          className="pagination-area wow animate fadeInUp "
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
          style={{ padding: "107px", marginBottom: "-46px" }}
        >
          <div className="paginations-button ">
            {/* Prev Button ko 'disabled' class add karein agar first page par hai */}
            <a
              href="#"
              onClick={handlePrev}
              className={currentPage === 1 ? "disabled" : ""}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M7.86133 9.28516C7.14704 7.49944 3.57561 5.71373 1.43276 4.99944C3.57561 4.28516 6.7899 3.21373 7.86133 0.713728"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
              Prev
            </a>
          </div>
          <ul className="paginations">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageClick(number);
                  }}
                >
                  {/* '01', '02' format ke liye padStart use karein */}
                  {String(number).padStart(2, "0")}
                </a>
              </li>
            ))}
          </ul>
          <div className="paginations-button">
            {/* Next Button ko 'disabled' class add karein agar last page par hai */}
            <a
              href="#"
              onClick={handleNext}
              className={currentPage === totalPages ? "disabled" : ""}
            >
              Next
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M1.42969 9.28613C2.14397 7.50042 5.7154 5.7147 7.85826 5.00042C5.7154 4.28613 2.50112 3.21471 1.42969 0.714705"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      )}
      {/* Pagination end */}
    </>
  );
};

export default ExploreTours;
