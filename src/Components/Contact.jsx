import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [websiteInfo, setWebsiteInfo] = useState({});

  useEffect(() => {
    // Use the proxied URL
    const url = "http://localhost/crm/API/websiteinfo.php";
    const requestBody = {
      EndUserIp: "192.168.1.33",
      //   type: "domestic",
      TokenId: "1",
    };

    axios
      .post(url, requestBody)
      .then((response) => {
        let info = response.data.websiteinfo;
        //  console.log("Full Response:", response);
        console.log("Raw API Response for websiteinfo:", info);

        if (info && typeof info === "string") {
          try {
            // Clean the string and parse it
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
          setWebsiteInfo(info);
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
  return (
    <>
      {/* Start Breadcrumb section  */}
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('assets/img/innerpages/breadcrumb-bg2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   height: "400px", // optional
        }}
      >
        <div className="container">
          <div className="banner-content">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      {/* // End Breadcrumb section */}

      {/* Contact page start  */}
      <div className="contact-page pt-100 mb-100">
        <div className="container">
          <div
            className="row g-xl-4 g-lg-3 g-4 mb-100"
            style={{ justifyContent: "center" }}
          >
            <div className="col-lg-8 col-md-6">
              <div className="single-contact">
                <div className="icon">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.9981 1.125C15.0037 1.12887 12.133 2.32012 10.0156 4.4375C7.89824 6.55489 6.70699 9.42557 6.70313 12.42C6.70312 16.2056 10.7587 22.2638 13.92 26.4037C9.99937 27.0562 7.51875 28.6087 7.51875 30.4706C7.51875 32.9794 12.0244 34.875 17.9981 34.875C23.9719 34.875 28.4831 32.9794 28.4831 30.4706C28.4831 28.6087 26.0025 27.0562 22.0762 26.4037C25.2375 22.2581 29.2931 16.2056 29.2931 12.42C29.2893 9.42557 28.098 6.55489 25.9806 4.4375C23.8632 2.32012 20.9926 1.12887 17.9981 1.125ZM17.9981 29.6663C16.0237 27.3488 7.82812 17.415 7.82812 12.42C7.82812 9.72275 8.8996 7.13597 10.8068 5.22872C12.7141 3.32148 15.3009 2.25 17.9981 2.25C20.6954 2.25 23.2822 3.32148 25.1894 5.22872C27.0966 7.13597 28.1681 9.72275 28.1681 12.42C28.1681 17.415 19.9725 27.3488 17.9981 29.6663Z" />
                    <path d="M17.9966 18.1294C21.4853 18.1294 24.3134 15.3012 24.3134 11.8125C24.3134 8.3238 21.4853 5.49564 17.9966 5.49564C14.5078 5.49564 11.6797 8.3238 11.6797 11.8125C11.6797 15.3012 14.5078 18.1294 17.9966 18.1294Z" />
                  </svg>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                  <>
                    <h4>{websiteInfo.companyName}</h4>
                    <h6>
                      <span>Contact :</span>{" "}
                      <a href={`tel:${websiteInfo.contactPhone}`}>
                        {websiteInfo.contactPhone}
                      </a>
                    </h6>
                    <p>Address :{websiteInfo.contactAddress}</p>
                    <p>Email : {websiteInfo.contactEmail}</p>
                  </>
                )}
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-contact two">
                <div className="icon">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.9981 1.125C15.0037 1.12887 12.133 2.32012 10.0156 4.4375C7.89824 6.55489 6.70699 9.42557 6.70313 12.42C6.70312 16.2056 10.7587 22.2638 13.92 26.4037C9.99937 27.0562 7.51875 28.6087 7.51875 30.4706C7.51875 32.9794 12.0244 34.875 17.9981 34.875C23.9719 34.875 28.4831 32.9794 28.4831 30.4706C28.4831 28.6087 26.0025 27.0562 22.0762 26.4037C25.2375 22.2581 29.2931 16.2056 29.2931 12.42C29.2893 9.42557 28.098 6.55489 25.9806 4.4375C23.8632 2.32012 20.9926 1.12887 17.9981 1.125ZM17.9981 29.6663C16.0237 27.3488 7.82812 17.415 7.82812 12.42C7.82812 9.72275 8.8996 7.13597 10.8068 5.22872C12.7141 3.32148 15.3009 2.25 17.9981 2.25C20.6954 2.25 23.2822 3.32148 25.1894 5.22872C27.0966 7.13597 28.1681 9.72275 28.1681 12.42C28.1681 17.415 19.9725 27.3488 17.9981 29.6663Z" />
                    <path d="M17.9966 18.1294C21.4853 18.1294 24.3134 15.3012 24.3134 11.8125C24.3134 8.3238 21.4853 5.49564 17.9966 5.49564C14.5078 5.49564 11.6797 8.3238 11.6797 11.8125C11.6797 15.3012 14.5078 18.1294 17.9966 18.1294Z" />
                  </svg>
                </div>
                <h4>Dubai Office</h4>
                <h6>
                  <span>Contact :</span> <a href="#">+971 4 123 4567</a>
                </h6>
                <p>
                  Office No. 1203, 12th Floor, Bay Tower, Al Abraj Street,
                  Business Bay, Dubai, UAE
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-contact three">
                <div className="icon">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.9981 1.125C15.0037 1.12887 12.133 2.32012 10.0156 4.4375C7.89824 6.55489 6.70699 9.42557 6.70313 12.42C6.70312 16.2056 10.7587 22.2638 13.92 26.4037C9.99937 27.0562 7.51875 28.6087 7.51875 30.4706C7.51875 32.9794 12.0244 34.875 17.9981 34.875C23.9719 34.875 28.4831 32.9794 28.4831 30.4706C28.4831 28.6087 26.0025 27.0562 22.0762 26.4037C25.2375 22.2581 29.2931 16.2056 29.2931 12.42C29.2893 9.42557 28.098 6.55489 25.9806 4.4375C23.8632 2.32012 20.9926 1.12887 17.9981 1.125ZM17.9981 29.6663C16.0237 27.3488 7.82812 17.415 7.82812 12.42C7.82812 9.72275 8.8996 7.13597 10.8068 5.22872C12.7141 3.32148 15.3009 2.25 17.9981 2.25C20.6954 2.25 23.2822 3.32148 25.1894 5.22872C27.0966 7.13597 28.1681 9.72275 28.1681 12.42C28.1681 17.415 19.9725 27.3488 17.9981 29.6663Z" />
                    <path d="M17.9966 18.1294C21.4853 18.1294 24.3134 15.3012 24.3134 11.8125C24.3134 8.3238 21.4853 5.49564 17.9966 5.49564C14.5078 5.49564 11.6797 8.3238 11.6797 11.8125C11.6797 15.3012 14.5078 18.1294 17.9966 18.1294Z" />
                  </svg>
                </div>
                <h4>United Kingdom</h4>
                <h6>
                  <span>Contact :</span> <a href="#">+44 20 7946 1234</a>
                </h6>
                <p>
                  3rd Floor, 15 Bedford Street Covent Garden, London, WC2E 9HE,
                  UK
                </p>
              </div>
            </div> */}
          </div>
          <div className="contact-form">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="contact-form-wrap">
                  <div className="section-title text-center mb-60">
                    <h2>Get in Touch!</h2>
                    <p>
                      We’re excited to hear from you! Whether you have a
                      question about our services, want to discuss a new
                      project.
                    </p>
                  </div>
                  <form>
                    <div className="row g-4 mb-60">
                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Full Name</label>
                          <input type="text" placeholder="Wasington Mongla" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Email Address</label>
                          <input type="email" placeholder="info@example.com" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Phone Number</label>
                          <input type="text" placeholder="+92 567 *** ***" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Where are you going?</label>
                          <select>
                            <option>Maldives </option>
                            <option>France</option>
                            <option>United States</option>
                            <option>Thailand</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner">
                          <label>Brief/Message</label>
                          <textarea placeholder="Write somethings about inquiry"></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="contactCheck22"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="contactCheck22"
                            >
                              I will agree with yours privacy policy & terms &
                              conditions.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="primary-btn1">
                      <span>
                        Submit Now
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
                        </svg>
                      </span>
                      <span>
                        Submit Now
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/img/innerpages/vector/contact-page-vector1.svg"
          alt=""
          className="vector1"
        />
        <img
          src="assets/img/innerpages/vector/contact-page-vector2.svg"
          alt=""
          className="vector2"
        />
        <img
          src="assets/img/innerpages/vector/contact-page-vector3.svg"
          alt=""
          className="vector3"
        />
      </div>
      {/* // End Contact page */}

      {/* Contact Map Section Start */}
      <div className="contact-map-section">
        <iframe
          src="https://www.google.com/maps?q=28.583228,77.315109&z=17&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Contact Map Section End*/}
    </>
  );
};

export default Contact;
