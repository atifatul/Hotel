import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom"; // Link ko bhi import karein
import axios from "axios";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import EnquiryForm from "./Enquiryform";

const InsideTour = () => {
  const { packageId } = useParams();

  // ----- STATES FOR ALL API DATA -----
  const [packageDetails, setPackageDetails] = useState(null);
  const [imageGallery, setImageGallery] = useState([]);
  const [dayDetails, setDayDetails] = useState([]);
  const [terms, setTerms] = useState([]);
  const [SectionTypeData, setSectionTypeData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. API CALL TO FETCH DETAILS BASED ON packageId
  useEffect(() => {
    if (!packageId) return;

    setLoading(true);
    const url = "http://localhost/crm/API/packagedetails.php";
    const requestBody = {
      EndUserIp: "192.168.1.33",
      type: "",
      packageId: packageId,
    };

    axios
      .post(url, requestBody)
      .then((response) => {
        const data = response.data;
        // ===== YAHAN CHANGE KIYA GAYA HAI =====
        if (data && data.PackageDetails) {
          setPackageDetails(data.PackageDetails);
          setImageGallery(data.ImageGallery || []);
          setDayDetails(data.DayDetails || []);
          setTerms(data.Terms || []);
          setSectionTypeData(data.SectionTypeData || []);
        } else {
          setError(
            "Package details could not be loaded from the API response."
          );
        }
      })
      .catch((err) => {
        console.error("Error fetching package details:", err);
        setError(
          "Failed to fetch package details. Please check the API connection."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [packageId]);

  console.log("SectionTypeData is:", SectionTypeData);

  // 2. SLIDER INITIALIZATION
  useEffect(() => {
    if (!loading && imageGallery.length > 0) {
      const breadcrumbSlider = new Swiper(".home2-banner-slider", {
        slidesPerView: 1,
        speed: 1500,
        effect: "fade",
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        navigation: {
          nextEl: ".banner-slider-next",
          prevEl: ".banner-slider-prev",
        },
      });

      return () => {
        breadcrumbSlider.destroy();
      };
    }
  }, [loading, imageGallery]);

  // Helper function to find term description
  const getTermDescription = (termName) => {
    const term = terms.find(
      (t) => t.name.toLowerCase() === termName.toLowerCase()
    );
    return term ? term.description : "Not specified.";
  };

  // 3. SECTIONTYPE DATA KO GROUP KARNE KA LOGIC
  const groupedSections = useMemo(() => {
    // Yadi data nahi hai, toh khaali object return karein
    if (!SectionTypeData || SectionTypeData.length === 0) {
      return {};
    }

    // reduce ka istemal karke data ko group karein
    return SectionTypeData.reduce((acc, item) => {
      const type = item.sectionType; // Jaise "Flight", "Accommodation"

      // Agar is type ka group pehle se nahi hai, toh ek khaali array banayein
      if (!acc[type]) {
        acc[type] = [];
      }

      // Us group mein current item ko push karein
      acc[type].push(item);

      return acc;
    }, {}); // Shuruaat ek khaali object se karein
  }, [SectionTypeData]); // Yeh logic tabhi chalega jab SectionTypeData change hoga

  // ... console.log("SectionTypeData is:", SectionTypeData); // Iske baad yeh line daalein
  console.log("Grouped Data is:", groupedSections);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "100px" }}>
        Loading Package Details...
      </div>
    );
  }

  if (error || !packageDetails) {
    return (
      <div style={{ textAlign: "center", padding: "100px", color: "red" }}>
        {error}
      </div>
    );
  }

  const destinationCount = packageDetails.destination
    ? packageDetails.destination.split(",").filter((d) => d.trim() !== "")
        .length
    : 0;

  return (
    <>
      {/* ===== BREADCRUMB SECTION (DYNAMIC) ===== */}
      <div className="breadcrumb-section two">
        <div className="swiper home2-banner-slider">
          <div className="swiper-wrapper">
            {imageGallery.length > 0 ? (
              imageGallery.map((img, index) => (
                <div className="swiper-slide" key={index}>
                  <div
                    className="banner-bg"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${img.image}')`,
                    }}
                  ></div>
                </div>
              ))
            ) : (
              <div className="swiper-slide">
                <div
                  className="banner-bg"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/img/innerpages/package-breadcrumb-bg1.jpg')`,
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
        <div className="banner-content-wrap">
          <div className="container">
            <div className="banner-content">
              <span>
                Starting From <strong>₹{packageDetails.price}</strong>/per
                person
              </span>
              <h1>{packageDetails.name}</h1>
              <div className="batch">
                <span>
                  {packageDetails.days} Days | {packageDetails.nights} Nights
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-btn-grp">{/* Slider buttons... */}</div>
      </div>

      {/* ===== PACKAGE DETAILS PAGE (DYNAMIC) ===== */}
      <div className="package-details-page pt-100 mb-100">
        <div className="container">
          <div className="row  justify-content-between">
            <div className=" col-lg-8">
              <div className="package-details-warpper">
                <div className="package-info-wrap mb-60">
                  <h4>About Tour Package</h4>
                  <p>{packageDetails.pkgdisc || "No description available."}</p>
                </div>

                {/* SectionTypeData part starts */}
                {/* Humne tour-itinerary-area jaisi same classes ka istemal kiya hai consistent design ke liye */}
                <div className="tour-itinerary-area mb-60">
                  <div className="itinerary-title">
                    <h4>Package Services</h4>
                  </div>

                  {/* Check karein ki groupedSections mein data hai ya nahi */}
                  {Object.keys(groupedSections).length > 0 ? (
                    /* Object.keys() se har group (jaise "Flight", "Accommodation") par loop karein */
                    Object.keys(groupedSections).map((sectionType) => (
                      <div
                        key={sectionType}
                        style={{ marginBottom: "25px", borderRadius: "50px" }}
                      >
                        {/* Group ka Title (jaise "Flight") */}
                        <h5
                          style={{
                            borderBottom: "1px solid #eee",
                            paddingBottom: "10px",
                            marginBottom: "15px",
                          }}
                        >
                          {sectionType}
                        </h5>

                        {/* Ab us group ke andar ke sabhi items par loop karein */}
                        {groupedSections[sectionType].map((item) => (
                          <div
                            key={item.id}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "10px",
                            }}
                          >
                            {/* Item ki Image (agar default nahi hai toh) */}

                            {item.coverPhoto && (
                              <img
                                src={
                                  item.coverPhoto.endsWith("/")
                                    ? "assets/img/innerpages/tour-package-img2.jpg"
                                    : item.coverPhoto
                                }
                                // alt={item.name}
                                style={{
                                  width: "100px",
                                  height: "70px",
                                  marginRight: "15px",
                                  objectFit: "cover",
                                  borderRadius: "5px",
                                }}
                              />
                            )}

                            {/* Item ka Content */}
                            <div>
                              <strong>{item.name}</strong>
                              {/* Aap yahaan aur bhi details (jaise dates) dikha sakte hain */}
                              <p
                                style={{
                                  margin: 0,
                                  fontSize: "0.9em",
                                  color: "#666",
                                }}
                              >
                                Date:{" "}
                                {new Date(item.startDate).toLocaleDateString()}
                              </p>
                              {/* Agar notes hain toh woh bhi dikha sakte hain */}
                              {item.notes && (
                                <p
                                  style={{
                                    margin: 0,
                                    fontSize: "0.9em",
                                    color: "#777",
                                  }}
                                >
                                  Notes: {item.notes}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))
                  ) : (
                    // Agar SectionTypeData khaali hai
                    <p>
                      No additional service details available for this package.
                    </p>
                  )}
                </div>

                {/* SectionTypeData part ends*/}

                {/* ===== TOUR ITINERARY (DYNAMIC) ===== */}
                <div className="tour-itinerary-area mb-60">
                  <div className="itinerary-title">
                    <h4>Tour Itinerary</h4>
                  </div>

                  <ul className="itinerary-list">
                    {dayDetails.map((day, index) => (
                      <li className="single-itinerary" key={index}>
                        <div className="location-title">
                          <h5>{day.name}</h5>
                        </div>
                        <div className="tour-plan-wrap">
                          <div
                            className="accordion accordion-flush"
                            id={`accordion-day-${day.day}`}
                          >
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <div className="collapsed">
                                  <h6>
                                    <span>Day-{day.day}</span> {day.name}
                                  </h6>
                                </div>
                              </div>
                              <div className="flex items-center flexcnttext">
                                <div>
                                  <img
                                    style={{
                                      width: "150px",
                                      height: "100px",
                                      paddingRight: "14px",
                                    }}
                                    src={day.eventPhoto}
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <p
                                    style={{
                                      lineHeight: "20px",
                                      fontSize: "14px",
                                    }}
                                  >
                                    {day.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ===== FEATURES LIST (DYNAMIC) ===== */}
                <div className="feature-list-area mb-60">
                  <h4>Package Features List</h4>
                  <div className="row gy-md-5 gy-4 justify-content-between">
                    <div className="col-lg-5 col-md-6">
                      <div className="single-feature-list">
                        <h5>Include Features</h5>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: getTermDescription("Inclusions"),
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <div className="single-feature-list">
                        <h5>Exclude Features</h5>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: getTermDescription("Exclusion"),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar remains mostly static, so no major changes needed there */}
            <div className="col-lg-4">
              <aside
                className="package-widget-area"
                style={{ border: "2px solid", height: "fit-content" }}
              >
                {" "}
                {/* Sidebar wrapper */}
                <EnquiryForm
                  price={packageDetails.price}
                  packageName={packageDetails.name}
                />
                {/* Agar koi aur widgets hain toh woh yahaan aa sakte hain */}
                {/* Example:
                 <div className="widget-card widget-support"> ... </div>
                 */}
              </aside>

              {/* ========== ADD THIS NEW SECTION BELOW ========== */}
              <div
                className="widget-card mb-30 mt-3 "
                style={{ border: "2px solid", height: "fit-content" }}
              >
                {" "}
                {/* Use the same card style */}
                <div className="widget-body text-center">
                  {" "}
                  {/* Center align content */}
                  <h5 className="package-sidebar-title mb-3">
                    Need Help?
                  </h5>{" "}
                  {/* Title */}
                  <p style={{ fontSize: "0.95em", marginBottom: "0.5rem" }}>
                    We are here to help you!
                  </p>
                  <p
                    style={{
                      fontSize: "0.9em",
                      color: "#555",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {" "}
                    {/* Slightly smaller text */}
                    You Get Online support
                  </p>
                  <Link
                    to="/contact" /* <-- Make sure '/contact' is your correct contact page route */
                    className="primary-btn1 two" /* Use your button style */
                  >
                    <span>Contact</span>
                    <span>Contact</span>{" "}
                    {/* For hover effect if your button uses it */}
                  </Link>
                </div>
              </div>
              {/* ============================================== */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsideTour;
