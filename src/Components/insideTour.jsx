import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // useParams hook ko import karein
import axios from "axios";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const InsideTour = () => {
  // useParams se URL se packageId nikalna
  const { packageId } = useParams();

  // State to hold package details, loading, and error status
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API call ke liye useEffect
  useEffect(() => {
    if (!packageId) return; // Agar ID na ho to kuch na karein

    setLoading(true); // Har baar nayi ID aane par loading state set karein
    const url = "http://localhost/crm/API/packagedetails.php";
    const requestBody = {
      EndUserIp: "192.168.1.33",
      type: "",
      packageId: packageId, // URL se aayi hui ID yahan use karein
    };

    axios
      .post(url, requestBody)
      .then((response) => {
        // Assume API returns an array with a single package object
        if (response.data && response.data.Package && response.data.Package.length > 0) {
          setPackageDetails(response.data.Package[0]);
        } else {
          setError("Package details not found.");
        }
      })
      .catch((err) => {
        console.error("Error fetching package details:", err);
        setError("Failed to fetch package details.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [packageId]); // Yeh effect tab chalega jab packageId badlega

  // Sliders ke liye useEffect
  useEffect(() => {
    if (!loading && packageDetails) {
      // Yeh sliders tabhi initialize honge jab data aa chuka ho
      const breadcrumbSlider = new Swiper(".home2-banner-slider", {
        slidesPerView: 1,
        speed: 1500,
        effect: "fade",
        autoplay: { delay: 4000, disableOnInteraction: false },
        navigation: {
          nextEl: ".banner-slider-next",
          prevEl: ".banner-slider-prev",
        },
      });
      
      // Baaki ke sliders bhi yahan initialize karein agar zaroorat ho
      // ...

      return () => {
        breadcrumbSlider.destroy();
      };
    }
  }, [loading, packageDetails]);

  if (loading) {
    return <div style={{ textAlign: "center", padding: "100px" }}>Loading Package Details...</div>;
  }

  if (error || !packageDetails) {
    return <div style={{ textAlign: "center", padding: "100px", color: "red" }}>{error || "Could not load package details."}</div>;
  }

  // Calculate destination count
  const destinationCount = packageDetails.destination ? packageDetails.destination.split(',').filter(d => d.trim() !== '').length : 0;

  return (
    <>
      {/* Breadcrumb section start */}
      <div className="breadcrumb-section two">
        <div className="swiper home2-banner-slider">
          <div className="swiper-wrapper">
            {/* Yahan aap multiple images (agar API se aati hain) map kar sakte hain */}
            <div className="swiper-slide">
              <div
                className="banner-bg"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${packageDetails.banner || 'assets/img/innerpages/package-breadcrumb-bg1.jpg'}')`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="banner-content-wrap">
          <div className="container">
            <div className="banner-content">
              <span>
                Starting From <strong>₹{packageDetails.price}</strong>/per person
              </span>
              <h1>{packageDetails.name}</h1>
              <div className="batch">
                <span>{packageDetails.days} Days | {packageDetails.nights} Nights | {destinationCount} Destinations</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-btn-grp">
          {/* ... Slider buttons ... */}
        </div>
      </div>
      {/* Breadcrumb section end */}

      {/* Baaki ka saara JSX ab packageDetails object se data lega */}
      {/* Example: */}
      <div className="package-details-page pt-100 mb-100">
        <div className="container">
          {/* ... */}
          <div className="package-info-wrap mb-60">
            <h4>About Tour Package</h4>
            {/* Yahan API se aane wala description daalein. Abhi ke liye static hai. */}
            <p>
              Paris, the City of Lights...
            </p>
            <ul className="package-info-list">
              <li>
                {/* ...SVG... */}
                <div className="content">
                  <span>Accomodation</span>
                  <strong>{packageDetails.inclusion.includes('Accommodation') ? 'Included' : 'Not Included'}</strong>
                </div>
              </li>
              {/* Isi tarah baaki details ko bhi dynamic karein */}
            </ul>
          </div>
          {/* ... */}
        </div>
      </div>
    </>
  );
};

export default InsideTour;