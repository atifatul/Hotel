import React from "react";

const Newletter_section = () => {
  return (
    <>
      <div className="home6-newletter-section mb-100">
        <div className="container">
          <div
            className="row justify-content-center wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-xl-10">
              <div className="newsletter-wrapper">
                <h3>Subscribe our newsletter to discount 10% all package.</h3>
                <form className="newsletter-form">
                  <input type="text" placeholder="Type Your Email Address" />
                  <button>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.9597 0.771505C18.0006 0.669287 18.0107 0.557308 17.9885 0.449451C17.9664 0.341594 17.9131 0.242601 17.8353 0.164747C17.7574 0.0868923 17.6584 0.033599 17.5506 0.0114739C17.4427 -0.0106512 17.3307 -0.000635146 17.2285 0.0402804L0.863689 6.58643H0.862564L0.354081 6.78892C0.257774 6.82734 0.173959 6.89163 0.111895 6.97469C0.0498308 7.05775 0.0119333 7.15635 0.00238854 7.25959C-0.00715624 7.36284 0.0120231 7.46671 0.0578081 7.55974C0.103593 7.65278 0.174202 7.73134 0.261834 7.78676L0.723068 8.07925L0.724193 8.0815L6.34337 11.6566L9.9185 17.2758L9.92075 17.2781L10.2132 17.7393C10.2688 17.8266 10.3474 17.8968 10.4404 17.9423C10.5334 17.9878 10.6371 18.0068 10.7401 17.9972C10.8432 17.9875 10.9416 17.9496 11.0245 17.8876C11.1073 17.8257 11.1715 17.742 11.21 17.6459L17.9597 0.771505ZM15.8977 2.89768L7.46721 11.3281L7.22534 10.9479C7.18103 10.8781 7.12188 10.819 7.0521 10.7747L6.67186 10.5328L15.1023 2.10233L16.4275 1.57248L15.8988 2.89768H15.8977Z" />
                    </svg>
                  </button>
                </form>
                <span>To get monthly upto 10% best offer in all package. </span>
                <img
                  src="assets/img/home6/newletter-img.png"
                  alt=""
                  className="newsletter-img"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/img/home6/vector/refund-area-vector.svg"
          alt=""
          className="vector1"
        />
      </div>
    </>
  );
};

export default Newletter_section;
