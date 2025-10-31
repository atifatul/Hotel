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
                      <img src={destinations[0].photo} alt={"#"} />
                      <div className="destination-content">
                        <h2>
                          <Link
                            to={`/Explore-Tours?theme=${destinations[0].name}`}
                          >
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
                          <Link
                            to={`/Explore-Tours?theme=${destinations[1].name}`}
                          >
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
                          <Link
                            to={`/Explore-Tours?theme=${destinations[2].name}`}
                          >
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
                          <Link
                            to={`/Explore-Tours?theme=${destinations[3].name}`}
                          >
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


      


      
    </>
  );
};

export default Home1destination_section;
