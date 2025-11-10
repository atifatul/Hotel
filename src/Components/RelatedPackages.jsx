// src/components/RelatedPackages.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Yeh component 'allPackages' aur 'currentPackageId' ko props se lega
const RelatedPackages = ({ allPackages, currentPackageId }) => {
  const [randomPackages, setRandomPackages] = useState([]);

  useEffect(() => {
    // Check karein ki allPackages (props se) mile ya nahi
    // Agar nahi mile (jaise page refresh par), toh kuch mat karo
    if (!allPackages || allPackages.length === 0) {
      return;
    }

    // 1. Current package ko list se hatayein
    const otherPackages = allPackages.filter(
      (pkg) => String(pkg.packageId) !== currentPackageId
    );

    // 2. List ko shuffle (randomize) karein
    const shuffled = otherPackages.sort(() => 0.5 - Math.random());

    // 3. Pehle 3 packages ko chunein
    const randomThree = shuffled.slice(0, 3);

    // 4. State mein set karein
    setRandomPackages(randomThree);

    // Yeh logic tab chalega jab list ya current package ID badlega
  }, [allPackages, currentPackageId]);

  // Agar dikhane ke liye koi package nahi hai, toh component kuch bhi render nahi karega
  if (randomPackages.length === 0) {
    return null;
  }

  // Agar packages hain, toh poora section render karein
  return (
    <div
      className="package-grid-page pt-100 mb-100"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2>You Might Also Like</h2>
              <p>Check out these other similar packages.</p>
            </div>
          </div>
        </div>

        <div className="row gy-md-5 gy-4">
          {randomPackages.map((pkg) => (
            <div
              key={pkg.packageId}
              className="col-lg-4 col-md-6 col-12 item wow animate fadeInDown"
            >
              {/* === Package Card (ExploreTours se copy kiya gaya) === */}
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
                        <span>Duration:</span> {pkg.days} Days/{pkg.nights}{" "}
                        Nights
                      </li>
                    </ul>
                    <div className="btn-and-price-area">
                      {/* ZAROORI: Yahaan bhi state ko aage pass karna hai, 
                        taaki user agar is card se agle page par jaaye, 
                        toh wahaan bhi "Related Packages" dikhein.
                      */}
                      <Link
                        to={`/insideTour/${pkg.packageId}?price=${
                          pkg.price || "NA"
                        }`}
                        state={{ allPackages: allPackages }} // <-- State yahaan bhi pass karein
                        className="primary-btn1"
                      >
                         {/* Aapka Book Now Button ka JSX ( maine ise simplify kiya hai) */}
                        <span>
                          Book Now
                          <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" /></svg>
                        </span>
                        <span>
                          Book Now
                          <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" /></svg>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedPackages;