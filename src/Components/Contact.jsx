import React, { useState } from "react"; // useEffect hata diya
import axios from "axios";
import { useCompany } from "./Context/Company_context";

const Contact = () => {
  // Puraane states (error, loading, websiteInfo) hata diye
  // Sirf company data context se aa raha hai
  const { companydata } = useCompany();

  // 1. Naye states form ke liye
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Maldives"); // Default value
  const [briefMessage, setBriefMessage] = useState(""); // Textarea ke liye
  const [isChecked, setIsChecked] = useState(false); // Checkbox ke liye

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // { type: 'success', msg: '...' } ya { type: 'error', msg: '...' }

  // 2. Naya handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Checkbox validation
    if (!isChecked) {
      setSubmissionStatus({
        type: "error",
        msg: "Please agree to the terms and conditions.",
      });
      setIsSubmitting(false);
      return;
    }

    // Aapki addquery.php API ko 'startDate' chahiye.
    // Is form mein nahi hai, toh hum aaj ki date bhej rahe hain.
    const todayDate = new Date().toISOString().split("T")[0]; // 'YYYY-MM-DD' format

    const apiData = {
      name: fullName,
      email: email,
      contact: phone,
      destination: destination,
      startDate: todayDate, // ZAROORI: API ko yeh field chahiye
      endDate: "", // Form mein nahi hai
      adult: 1, // Default value
      child: 0, // Default value
      infant: 0, // Default value
    };

    const apiKey = "1";
    const tokenId = "1";
    const url = "http://localhost/crm/API/addquery.php";

    try {
      const response = await axios.post(url, apiData, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": apiKey,
          "X-Token-Id": tokenId,
        },
      });

      console.log("API Response:", response.data);

      if (response.data && response.data.status === "success") {
        setSubmissionStatus({
          type: "success",
          msg: "Enquiry sent successfully!",
        });
        // Form clear karein
        setFullName("");
        setEmail("");
        setPhone("");
        setDestination("Maldives");
        setBriefMessage("");
        setIsChecked(false);
      } else {
        setSubmissionStatus({
          type: "error",
          msg: response.data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
      setSubmissionStatus({
        type: "error",
        msg: "Failed to send enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Start Breadcrumb section */}
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('assets/img/innerpages/breadcrumb-bg7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="banner-content">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      {/* // End Breadcrumb section */}

      {/* Contact page start */}
      <div className="contact-page pt-100 mb-100">
        <div className="container">
          <div className="row mb-100" style={{ justifyContent: "center" }}>
            <div className="col-lg-6 col-md-6">
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
                {/* Ab loading/error ki zaroorat nahi, direct companydata check karein */}
                {companydata ? (
                  <>
                    <h4>{companydata.companyName}</h4>
                    <h6>
                      <span>Contact :</span>{" "}
                      <a href={`tel:${companydata.contactPhone}`}>
                        {companydata.contactPhone}
                      </a>
                    </h6>
                    <p>Address :{companydata.contactAddress}</p>
                    <p>Email : {companydata.contactEmail}</p>
                  </>
                ) : (
                  <p>Loading company info...</p>
                )}
              </div>
            </div>

            <div className="contact-form col-lg-6 col-md-6">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12">
                  <div className="contact-form-wrap">
                    <div className="section-title text-center mb-60">
                      <h2>Get in Touch!</h2>
                      <p>
                        We’re excited to hear from you! Whether you have a
                        question about our services, want to discuss a new
                        project.
                      </p>
                    </div>

                    {/* Form tag mein handleSubmit add kiya */}
                    <form onSubmit={handleSubmit}>
                      <div className="row g-4 mb-60">
                        <div className="col-md-6">
                          <div className="form-inner">
                            <label>Full Name *</label>
                            <input
                              type="text"
                              placeholder="Your Full Name"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner">
                            <label>Email Address *</label>
                            <input
                              type="email"
                              placeholder="info@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner">
                            <label>Phone Number *</label>
                            <input
                              type="tel"
                              placeholder="+91 123 456 7890"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner">
                            <label>Where are you going?</label>
                            <select
                              value={destination}
                              onChange={(e) => setDestination(e.target.value)}
                            >
                              <option>Maldives</option>
                              <option>France</option>
                              <option>United States</option>
                              <option>Thailand</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-inner">
                            <label>Brief/Message</label>
                            <textarea
                              placeholder="Write somethings about inquiry"
                              value={briefMessage}
                              onChange={(e) => setBriefMessage(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-inner2">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="contactCheck22"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="contactCheck22"
                              >
                                I agree with the privacy policy & terms.
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="primary-btn1"
                        disabled={isSubmitting}
                      >
                        {/* Button text change karein jab submitting ho */}
                        <span>
                          {isSubmitting ? "Submitting..." : "Submit Now"}
                          {/* SVG... */}
                        </span>
                        <span>
                          {isSubmitting ? "Submitting..." : "Submit Now"}
                          {/* SVG... */}
                        </span>
                      </button>

                      {/* Submission status message */}
                      {submissionStatus && (
                        <p
                          className="mt-3 text-center"
                          style={{
                            color:
                              submissionStatus.type === "error"
                                ? "red"
                                : "green",
                          }}
                        >
                          {submissionStatus.msg}
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Baaki commented-out office sections... */}
          </div>

          {/* === YEH FORM AB WORKING HAI === */}
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
      {/* <div className="contact-map-section">
        <iframe
          src="https://www.google.com/maps?q=28.583228,77.315109&z=17&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
      {/* Contact Map Section End*/}
    </>
  );
};

export default Contact;
