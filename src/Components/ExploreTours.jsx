import React from "react";

const ExploreTours = () => {
  return (
    <>
      {/* Breadcrumb start */}

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
            {/* <ul className="breadcrumb-list">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Tour Package 02</li>
            </ul> */}
          </div>
        </div>
      </div>

      {/* Breadcrumb end */}

      {/* Map View Modal section Start */}
      <div
        className="modal map-view-modal fade"
        id="mapViewModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.00247 0.500545C1.79016 0.505525 1.58918 0.582706 1.4362 0.735547L0.694403 1.479C0.345704 1.82743 0.389689 2.43243 0.79164 2.83493L3.00694 5.05341L0.79164 7.27092C0.389689 7.67328 0.345566 8.27842 0.694403 8.62753L1.4362 9.37044C1.7849 9.71872 2.38879 9.67543 2.7913 9.27293L5.00659 7.05473L7.22189 9.27293C7.62467 9.67543 8.22898 9.71872 8.57699 9.37044L9.31989 8.62753C9.6679 8.27856 9.62461 7.67342 9.22182 7.27092L7.00653 5.05341L9.22182 2.83493C9.62461 2.43243 9.6679 1.82743 9.31989 1.479L8.57699 0.735547C8.22898 0.386433 7.62467 0.430557 7.22189 0.833614L5.00659 3.05126L2.7913 0.833753C2.56515 0.606635 2.27482 0.493906 2.00247 0.500545Z" />
              </svg>
            </button>
            <div className="title-area">
              <a href="https://www.tripadvisor.com/" className="rating-area">
                <img
                  src="assets/img/innerpages/icon/tripadvisor-rating2.svg"
                  alt=""
                />
                <span>134 reviews</span>
              </a>
              <h2 className="modal-title" id="ratingModalLabel">
                Paris & Île-de-France
              </h2>
              <ul className="package-features">
                <li>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                  </svg>
                  No Booking Fee
                </li>
                <li>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                  </svg>
                  Best Price Ever
                </li>
              </ul>
            </div>
            <div className="modal-body">
              <div className="map-area">
                <div id="mapModal"></div>
              </div>
              <div className="bottom-area">
                <strong>
                  $899<span>/per person</span>
                </strong>
                <span>Eiffel Tower + Louvre Museum + Palace of Versailles</span>
                <a
                  href="travel-package-details.html"
                  className="primary-btn1 two"
                >
                  <span>
                    Book Now
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
                    Book Now
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map View Modal section End*/}

      {/* Package Grid Page Start */}
      <div className="package-grid-page pt-100 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="package-sidebar-area">
                <div className="sidebar-wrapper">
                  <div className="title-area">
                    <h5>Filter</h5>
                    <span id="clear-filters">Clear All</span>
                  </div>
                  <div className="single-widgets">
                    <div className="widget-title">
                      <h5>Destinations</h5>
                    </div>
                    <div className="checkbox-container">
                      <ul>
                        <li className="sidebar-category-dropdown">
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>Europe</strong>
                          </label>
                          <ul className="sub-category">
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Paris, France</span> <span>08</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Rome, Italy</span> <span>12</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>United Kingdom</span> <span>15</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Netherlands</span> <span>02</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Portugal</span> <span>10</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Germany</span> <span>12</span>
                                </strong>
                              </label>
                            </li>
                          </ul>
                          <i className="bi bi-caret-right-fill sidebar-category-icon active"></i>
                        </li>
                        <li className="sidebar-category-dropdown">
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>Asia</strong>
                          </label>
                          <ul className="sub-category">
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Tokyo, Japan</span> <span>15</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Indonesia</span> <span>07</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Thailand</span> <span>18</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Malaysia</span> <span>08</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Hanoi, Vietnam</span> <span>10</span>
                                </strong>
                              </label>
                            </li>
                          </ul>
                          <i className="bi bi-caret-right-fill sidebar-category-icon"></i>
                        </li>
                        <li className="sidebar-category-dropdown">
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>Africa</strong>
                          </label>
                          <ul className="sub-category">
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Egypt</span> <span>05</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>South Africa</span> <span>07</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Thailand</span> <span>18</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Zimbabwe</span> <span>02</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Morocco</span> <span>12</span>
                                </strong>
                              </label>
                            </li>
                          </ul>
                          <i className="bi bi-caret-right-fill sidebar-category-icon"></i>
                        </li>
                        <li className="sidebar-category-dropdown">
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>North America</strong>
                          </label>
                          <ul className="sub-category">
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>United States</span> <span>20</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Canada</span> <span>08</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Mexico</span> <span>13</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Costa Rica</span> <span>06</span>
                                </strong>
                              </label>
                            </li>
                          </ul>
                          <i className="bi bi-caret-right-fill sidebar-category-icon"></i>
                        </li>
                        <li className="sidebar-category-dropdown">
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>Oceania</strong>
                          </label>
                          <ul className="sub-category">
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Australia</span> <span>12</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>New Zealand</span> <span>08</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Papua New Guinea</span> <span>14</span>
                                </strong>
                              </label>
                            </li>
                          </ul>
                          <i className="bi bi-caret-right-fill sidebar-category-icon"></i>
                        </li>
                        <li className="sidebar-category-dropdown">
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>Middle East</strong>
                          </label>
                          <ul className="sub-category">
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>United Arab Emirates</span>{" "}
                                  <span>04</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Qatar</span> <span>06</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Saudi Arabia</span> <span>13</span>
                                </strong>
                              </label>
                            </li>
                            <li>
                              <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <strong>
                                  <span>Jordan</span> <span>03</span>
                                </strong>
                              </label>
                            </li>
                          </ul>
                          <i className="bi bi-caret-right-fill sidebar-category-icon"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-widgets">
                    <div className="widget-title">
                      <h5>Tour Type</h5>
                    </div>
                    <ul className="tour-type">
                      <li>Group Tours</li>
                      <li>Small Group</li>
                      <li>Family</li>
                      <li>Single Tours</li>
                      <li>Private Tours</li>
                    </ul>
                  </div>
                  <div className="single-widgets">
                    <div className="widget-title">
                      <h5>Pricing</h5>
                    </div>
                    <div className="range-wrap">
                      <div className="row">
                        <div className="col-sm-12">
                          <form>
                            <input type="hidden" name="min-value" value="" />
                            <input type="hidden" name="max-value" value="" />
                          </form>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div id="slider-range"></div>
                        </div>
                      </div>
                      <div className="slider-labels">
                        <div className="caption">
                          <span id="slider-range-value1"></span>
                        </div>
                        <div className="caption">
                          <span id="slider-range-value2"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Yeh Activites and Discount and offer wala hai .  */}
                  {/* <div className="single-widgets">
                    <div className="widget-title">
                      <h5>Activities</h5>
                    </div>
                    <div className="checkbox-container two">
                      <ul className="experience">
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>
                              <span>Hiking & Trekking</span> <span>04</span>
                            </strong>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>
                              <span>Rock Climbing</span> <span>06</span>
                            </strong>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>
                              <span>Zip-lining</span> <span>02</span>
                            </strong>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>
                              <span>Bungee Jumping</span> <span>07</span>
                            </strong>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>
                              <span>Paragliding</span> <span>12</span>
                            </strong>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>
                              <span>Skydiving</span> <span>06</span>
                            </strong>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>
                              <span>Surfing</span> <span>08</span>
                            </strong>
                          </label>
                        </li>
                      </ul>
                      <span className="expand">See More +</span>
                    </div>
                  </div>
                  <div className="single-widgets">
                    <div className="widget-title">
                      <h5>Discount & Offer</h5>
                    </div>
                    <div className="checkbox-container two">
                      <ul>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>
                              <span>Special Offer</span> <span>04</span>
                            </strong>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <strong>
                              <span>Last Minutes Deal</span> <span>06</span>
                            </strong>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="package-grid-top-area">
                <span>
                  <strong>70</strong> Unforgettable Journeys Await!
                </span>
                <div className="selector-and-list-grid-area">
                  <div className="filter-btn d-lg-none d-flex">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_456_25)">
                        <path d="M0.5625 3.17317H9.12674C9.38486 4.34806 10.4341 5.2301 11.6853 5.2301C12.9366 5.2301 13.9858 4.3481 14.2439 3.17317H17.4375C17.7481 3.17317 18 2.92131 18 2.61067C18 2.30003 17.7481 2.04817 17.4375 2.04817H14.2437C13.9851 0.873885 12.9344 -0.00871277 11.6853 -0.00871277C10.4356 -0.00871277 9.38545 0.873744 9.12695 2.04817H0.5625C0.251859 2.04817 0 2.30003 0 2.61067C0 2.92131 0.251859 3.17317 0.5625 3.17317ZM10.191 2.61215L10.191 2.6061C10.1935 1.78461 10.8638 1.11632 11.6853 1.11632C12.5057 1.11632 13.1761 1.78369 13.1796 2.6048L13.1797 2.61306C13.1784 3.43597 12.5086 4.10513 11.6853 4.10513C10.8625 4.10513 10.1928 3.43663 10.191 2.61422L10.191 2.61215ZM17.4375 14.8268H14.2437C13.985 13.6525 12.9344 12.7699 11.6853 12.7699C10.4356 12.7699 9.38545 13.6524 9.12695 14.8268H0.5625C0.251859 14.8268 0 15.0786 0 15.3893C0 15.7 0.251859 15.9518 0.5625 15.9518H9.12674C9.38486 17.1267 10.4341 18.0087 11.6853 18.0087C12.9366 18.0087 13.9858 17.1267 14.2439 15.9518H17.4375C17.7481 15.9518 18 15.7 18 15.3893C18 15.0786 17.7481 14.8268 17.4375 14.8268ZM11.6853 16.8837C10.8625 16.8837 10.1928 16.2152 10.191 15.3928L10.191 15.3908L10.191 15.3847C10.1935 14.5632 10.8638 13.8949 11.6853 13.8949C12.5057 13.8949 13.1761 14.5623 13.1796 15.3834L13.1797 15.3916C13.1785 16.2146 12.5086 16.8837 11.6853 16.8837ZM17.4375 8.43751H8.87326C8.61514 7.26262 7.56594 6.38062 6.31466 6.38062C5.06338 6.38062 4.01418 7.26262 3.75606 8.43751H0.5625C0.251859 8.43751 0 8.68936 0 9.00001C0 9.31068 0.251859 9.56251 0.5625 9.56251H3.75634C4.01498 10.7368 5.06559 11.6194 6.31466 11.6194C7.56439 11.6194 8.61455 10.7369 8.87305 9.56251H17.4375C17.7481 9.56251 18 9.31068 18 9.00001C18 8.68936 17.7481 8.43751 17.4375 8.43751ZM7.80901 8.99853L7.80898 9.00458C7.80652 9.82607 7.13619 10.4944 6.31466 10.4944C5.49429 10.4944 4.82393 9.82699 4.82038 9.00591L4.82027 8.99769C4.8215 8.17468 5.49141 7.50562 6.31466 7.50562C7.13753 7.50562 7.80718 8.17408 7.80905 8.99653L7.80901 8.99853Z"></path>
                      </g>
                    </svg>
                    <span>Filters</span>
                  </div>
                  <div className="selector-area">
                    <span>Sort By:</span>
                    <select>
                      <option value="1">Default</option>
                      <option value="2">latest</option>
                      <option value="2">Price High</option>
                      <option value="2">Price Low</option>
                    </select>
                  </div>
                  <ul className="grid-view d-md-flex d-none">
                    <li className="column-2 active">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 11C5.65685 11 7 12.3431 7 14C7 15.6569 5.65685 17 4 17C2.34315 17 1 15.6569 1 14C1 12.3431 2.34315 11 4 11ZM14 11C15.6569 11 17 12.3431 17 14C17 15.6569 15.6569 17 14 17C12.3431 17 11 15.6569 11 14C11 12.3431 12.3431 11 14 11ZM4 1C5.65685 1 7 2.34315 7 4C7 5.65685 5.65685 7 4 7C2.34315 7 1 5.65685 1 4C1 2.34315 2.34315 1 4 1ZM14 1C15.6569 1 17 2.34315 17 4C17 5.65685 15.6569 7 14 7C12.3431 7 11 5.65685 11 4C11 2.34315 12.3431 1 14 1Z" />
                      </svg>
                    </li>
                    <li className="column-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.25 9.95007H0.75C0.336 9.95007 0 9.61407 0 9.20007C0 8.78607 0.336 8.45007 0.75 8.45007H17.25C17.664 8.45007 18 8.78607 18 9.20007C18 9.61407 17.664 9.95007 17.25 9.95007ZM17.25 4.20001H0.75C0.336 4.20001 0 3.86401 0 3.45001C0 3.03601 0.336 2.70001 0.75 2.70001H17.25C17.664 2.70001 18 3.03601 18 3.45001C18 3.86401 17.664 4.20001 17.25 4.20001ZM17.25 15.6999H0.75C0.336 15.6999 0 15.3639 0 14.9499C0 14.5359 0.336 14.1999 0.75 14.1999H17.25C17.664 14.1999 18 14.5359 18 14.9499C18 15.3639 17.664 15.6999 17.25 15.6999Z" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="list-grid-product-wrap">
                <div className="row gy-md-5 gy-4">
                  <div
                    className="col-md-6 item wow animate fadeInDown"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="package-card four">
                      <div className="package-img-wrap">
                        <div className="swiper package-card-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <a
                                href="travel-package-details.html"
                                className="package-img"
                              >
                                <img
                                  src="assets/img/innerpages/tour-package-img1.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                href="travel-package-details.html"
                                className="package-img"
                              >
                                <img
                                  src="assets/img/home1/tour-package-img2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                href="travel-package-details.html"
                                className="package-img"
                              >
                                <img
                                  src="assets/img/home1/tour-package-img10.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-btn-grp">
                          <div className="slider-btn package-img-slider-prev">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4.84554 6.00254L9.33471 1.51317C9.45832 1.38985 9.52632 1.22498 9.52632 1.04917C9.52632 0.873268 9.45832 0.708488 9.33471 0.584976L8.94135 0.191805C8.81793 0.0680975 8.65295 0 8.47715 0C8.30134 0 8.13656 0.0680975 8.01305 0.191805L2.66798 5.53678C2.54398 5.66068 2.47608 5.82624 2.47657 6.00224C2.47608 6.17902 2.54388 6.34439 2.66798 6.46839L8.00808 11.8082C8.13159 11.9319 8.29637 12 8.47227 12C8.64808 12 8.81286 11.9319 8.93647 11.8082L9.32973 11.415C9.58564 11.1591 9.58564 10.7425 9.32973 10.4867L4.84554 6.00254Z" />
                            </svg>
                          </div>
                          <div className="slider-btn package-img-slider-next">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.15446 6.00254L2.66529 1.51317C2.54168 1.38985 2.47368 1.22498 2.47368 1.04917C2.47368 0.873268 2.54168 0.708488 2.66529 0.584976L3.05865 0.191805C3.18207 0.0680975 3.34705 0 3.52285 0C3.69866 0 3.86344 0.0680975 3.98695 0.191805L9.33202 5.53678C9.45602 5.66068 9.52392 5.82624 9.52343 6.00224C9.52392 6.17902 9.45612 6.34439 9.33202 6.46839L3.99192 11.8082C3.86841 11.9319 3.70363 12 3.52773 12C3.35192 12 3.18714 11.9319 3.06353 11.8082L2.67027 11.415C2.41436 11.1591 2.41436 10.7425 2.67027 10.4867L7.15446 6.00254Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="batch">
                          <span>Hot Sale!</span>
                        </div>
                        <a
                          href="#"
                          className="map-view-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#mapViewModal"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M13.125 3.28125C13.125 3.75238 12.9846 4.21493 12.752 4.57227L10.8125 7.55273L8.87305 4.57227C8.64043 4.21494 8.5 3.75238 8.5 3.28125C8.50001 2.00412 9.53534 0.96875 10.8125 0.96875C12.0897 0.968755 13.125 2.00412 13.125 3.28125ZM14.125 3.28125C14.125 1.45184 12.6419 -0.0312455 10.8125 -0.03125C8.98305 -0.03125 7.50001 1.45184 7.5 3.28125C7.5 3.9403 7.69305 4.59297 8.03418 5.11719L10.8125 9.38574L13.5908 5.11719C13.9319 4.59298 14.125 3.94031 14.125 3.28125Z" />
                              <path d="M11.25 3.28125C11.25 3.54336 11.0322 3.75 10.8125 3.75C10.5928 3.75 10.375 3.54336 10.375 3.28125C10.375 3.04058 10.5718 2.84375 10.8125 2.84375C11.0532 2.84375 11.25 3.04058 11.25 3.28125ZM12.25 3.28125C12.25 2.4883 11.6055 1.84375 10.8125 1.84375C10.0195 1.84375 9.375 2.4883 9.375 3.28125C9.375 4.05277 9.99859 4.75 10.8125 4.75C11.6264 4.75 12.25 4.05276 12.25 3.28125Z" />
                              <path d="M5.19336 14.1855L10.6562 15.9756L10.8271 16.0312L15.7129 14.1221L16.0312 13.998V3.51465L12.6914 4.83496L13.0586 5.76465L15.0312 4.98535V13.3154L10.7979 14.9697L5.34277 13.1807L5.18066 13.1279L0.96875 14.6348V6.46484L5.20215 4.7832L8.70605 5.9502L9.02246 5.00098L5.17285 3.71777L0.28418 5.66016L-0.03125 5.78613V16.0537L5.19336 14.1855Z" />
                              <path d="M5.6875 13.6562V4.25H4.6875V13.6562H5.6875Z" />
                              <path d="M11.3125 15.5V8.46875H10.3125V15.5H11.3125Z" />
                            </g>
                          </svg>
                          View Map
                        </a>
                      </div>
                      <div className="package-content">
                        <div className="package-content-title-area">
                          <a
                            href="https://www.tripadvisor.com/"
                            className="rating-area"
                          >
                            <img
                              src="assets/img/innerpages/icon/tripadvisor-rating2.svg"
                              alt=""
                            />
                            <span>134 reviews</span>
                          </a>
                          <h5>
                            <a href="travel-package-details.html">
                              Paris & Île-de-France
                            </a>
                          </h5>
                          <ul className="package-features">
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              No Booking Fee
                            </li>
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              Best Price Ever
                            </li>
                          </ul>
                        </div>
                        <div className="package-content-bottom-area">
                          <ul className="package-info-list">
                            <li>
                              <span>Duration:</span> 5 Days/ 4 Nights
                            </li>
                            <li>
                              <span>Operated:</span> English
                            </li>
                          </ul>
                          <div className="location-area">
                            <span>
                              Destinations:{" "}
                              <strong>
                                Eiffel Tower + Louvre Museum + Palace of
                                Versailles.
                              </strong>
                            </span>
                          </div>
                          <div className="btn-and-price-area">
                            <a
                              href="travel-package-details.html"
                              className="primary-btn1"
                            >
                              <span>
                                Book Now
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
                                Book Now
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                </svg>
                              </span>
                            </a>
                            <div className="price-area">
                              <h6>Per Person</h6>
                              <span>$399</span>
                            </div>
                          </div>
                          <svg
                            className="divider"
                            height="6"
                            viewBox="0 0 374 6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM369 3.5L374 5.88675V0.113249L369 2.5V3.5ZM4.5 3.5H369.5V2.5H4.5V3.5Z" />
                          </svg>
                          <div className="bottom-area">
                            <ul>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.2732 12.9807H6.7268C6.68429 12.9807 6.64298 12.9666 6.60935 12.9406C6.55906 12.9018 5.36398 11.9718 4.14989 10.4857C3.43499 9.61078 2.86499 8.72565 2.45543 7.8549C1.93974 6.75846 1.67834 5.68141 1.67834 4.65329C1.67834 3.50657 2.36043 2.33394 3.54995 1.43595C4.1378 0.992226 4.81163 0.641781 5.55321 0.394396C6.33797 0.132617 7.16112 0 8 0C8.83888 0 9.66203 0.132617 10.4466 0.394396C11.1882 0.641781 11.862 0.992035 12.4499 1.43595C13.6392 2.33394 14.3215 3.50676 14.3215 4.65329C14.3215 5.63247 14.0599 6.67939 13.544 7.7647C13.1348 8.62565 12.5652 9.51367 11.8511 10.4036C10.6383 11.9148 9.40697 12.9272 9.39468 12.9371C9.36046 12.9653 9.31752 12.9807 9.2732 12.9807ZM6.79378 12.5969H9.20334C9.4465 12.3905 10.5082 11.4651 11.5563 10.1576C12.6425 8.8026 13.9374 6.74772 13.9374 4.65329C13.9374 2.63794 11.3981 0.38384 7.99981 0.38384C4.60148 0.38384 2.06238 2.63794 2.06238 4.65329C2.06238 6.85769 3.3563 8.90624 4.44199 10.2364C5.49084 11.5215 6.55311 12.4032 6.79378 12.5969Z" />
                                  <path d="M7.51886 12.7888C7.51886 12.7888 5.68372 9.03538 5.68372 4.65327C5.68372 2.43045 6.72066 0.191895 8 0.191895C9.27934 0.191895 10.3163 2.43045 10.3163 4.65327C10.3163 8.82024 8.48114 12.7888 8.48114 12.7888" />
                                  <path d="M7.34653 12.873C7.32753 12.8343 6.87594 11.9042 6.41802 10.4209C5.9956 9.05229 5.492 6.94079 5.492 4.65329C5.492 3.53843 5.74668 2.39036 6.19079 1.50312C6.67577 0.533921 7.31832 0 8.00002 0C8.68172 0 9.32426 0.53373 9.80944 1.50312C10.2535 2.39036 10.5082 3.53843 10.5082 4.65329C10.5082 6.82928 10.0048 8.94655 9.5824 10.3393C9.12505 11.8478 8.67423 12.8283 8.65542 12.8692L8.30709 12.7082C8.31169 12.6984 8.7675 11.7058 9.21717 10.2213C9.63114 8.85481 10.1246 6.77977 10.1246 4.65329C10.1246 3.5962 9.88467 2.51051 9.46648 1.67489C9.05577 0.854428 8.52146 0.38384 8.00021 0.38384C7.47895 0.38384 6.94465 0.854428 6.53394 1.67489C6.11574 2.51051 5.87584 3.5962 5.87584 4.65329C5.87584 6.893 6.37023 8.96439 6.78497 10.3076C7.23406 11.7626 7.68699 12.6951 7.6916 12.7043L7.34653 12.873ZM8.77038 16H7.22965C6.84658 16 6.5349 15.6883 6.5349 15.3052V13.9892C6.5349 13.8833 6.62088 13.7973 6.72682 13.7973H9.27321C9.37915 13.7973 9.46513 13.8833 9.46513 13.9892V15.3052C9.46513 15.6883 9.15346 16 8.77038 16ZM6.91874 14.1812V15.3052C6.91874 15.4766 7.05826 15.6162 7.22965 15.6162H8.77038C8.94177 15.6162 9.08129 15.4766 9.08129 15.3052V14.1812H6.91874Z" />
                                  <path d="M8.90952 14.1812H7.0907C7.00606 14.1812 6.93159 14.126 6.90703 14.045L6.54334 12.8445C6.52568 12.7863 6.53662 12.7232 6.5729 12.6745C6.60917 12.6257 6.66636 12.5969 6.72701 12.5969H9.2734C9.33424 12.5969 9.39143 12.6257 9.42751 12.6745C9.4454 12.6985 9.45739 12.7264 9.46252 12.756C9.46765 12.7855 9.46579 12.8158 9.45707 12.8445L9.09338 14.045C9.06862 14.1258 8.99397 14.1812 8.90952 14.1812ZM7.23291 13.7974H8.76693L9.01431 12.9808H6.98552L7.23291 13.7974Z" />
                                </svg>
                                Experience
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    Including Activities{" "}
                                    <span>
                                      Scuba Diving, Zip-lining, Rafting & Rock
                                      Climbing
                                    </span>{" "}
                                    with this premium package.
                                  </div>
                                </div>
                              </li>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g>
                                    <path d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4108 16 8C16 3.58916 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.728 1.23934 8C1.23934 4.27203 4.27266 1.23934 8 1.23934C11.7273 1.23934 14.7607 4.27203 14.7607 8C14.7607 11.728 11.728 14.7607 8 14.7607Z" />
                                    <path d="M11.0984 7.32445H8.6197V4.84576C8.6197 4.5037 8.3427 4.22607 8.00001 4.22607C7.65733 4.22607 7.38033 4.5037 7.38033 4.84576V7.32445H4.90164C4.55895 7.32445 4.28195 7.60207 4.28195 7.94414C4.28195 8.2862 4.55895 8.56382 4.90164 8.56382H7.38033V11.0425C7.38033 11.3846 7.65733 11.6622 8.00001 11.6622C8.3427 11.6622 8.6197 11.3846 8.6197 11.0425V8.56382H11.0984C11.4411 8.56382 11.7181 8.2862 11.7181 7.94414C11.7181 7.60207 11.4411 7.32445 11.0984 7.32445Z" />
                                  </g>
                                </svg>
                                Inclusion
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    This package covers{" "}
                                    <span>
                                      Accommodation, Daily Meals, Entry Fees &
                                      Local Transfers
                                    </span>{" "}
                                    to ensure a worry-free trip.
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 item wow animate fadeInDown"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="package-card four">
                      <div className="package-img-wrap">
                        <a
                          href="travel-package-details.html"
                          className="package-img"
                        >
                          <img
                            src="assets/img/innerpages/tour-package-img2.jpg"
                            alt=""
                          />
                        </a>
                        <div className="batch">
                          <span className="discount">Featured</span>
                        </div>
                        <a
                          href="#"
                          className="map-view-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#mapViewModal"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M13.125 3.28125C13.125 3.75238 12.9846 4.21493 12.752 4.57227L10.8125 7.55273L8.87305 4.57227C8.64043 4.21494 8.5 3.75238 8.5 3.28125C8.50001 2.00412 9.53534 0.96875 10.8125 0.96875C12.0897 0.968755 13.125 2.00412 13.125 3.28125ZM14.125 3.28125C14.125 1.45184 12.6419 -0.0312455 10.8125 -0.03125C8.98305 -0.03125 7.50001 1.45184 7.5 3.28125C7.5 3.9403 7.69305 4.59297 8.03418 5.11719L10.8125 9.38574L13.5908 5.11719C13.9319 4.59298 14.125 3.94031 14.125 3.28125Z" />
                              <path d="M11.25 3.28125C11.25 3.54336 11.0322 3.75 10.8125 3.75C10.5928 3.75 10.375 3.54336 10.375 3.28125C10.375 3.04058 10.5718 2.84375 10.8125 2.84375C11.0532 2.84375 11.25 3.04058 11.25 3.28125ZM12.25 3.28125C12.25 2.4883 11.6055 1.84375 10.8125 1.84375C10.0195 1.84375 9.375 2.4883 9.375 3.28125C9.375 4.05277 9.99859 4.75 10.8125 4.75C11.6264 4.75 12.25 4.05276 12.25 3.28125Z" />
                              <path d="M5.19336 14.1855L10.6562 15.9756L10.8271 16.0312L15.7129 14.1221L16.0312 13.998V3.51465L12.6914 4.83496L13.0586 5.76465L15.0312 4.98535V13.3154L10.7979 14.9697L5.34277 13.1807L5.18066 13.1279L0.96875 14.6348V6.46484L5.20215 4.7832L8.70605 5.9502L9.02246 5.00098L5.17285 3.71777L0.28418 5.66016L-0.03125 5.78613V16.0537L5.19336 14.1855Z" />
                              <path d="M5.6875 13.6562V4.25H4.6875V13.6562H5.6875Z" />
                              <path d="M11.3125 15.5V8.46875H10.3125V15.5H11.3125Z" />
                            </g>
                          </svg>
                          View Map
                        </a>
                      </div>
                      <div className="package-content">
                        <div className="package-content-title-area">
                          <a
                            href="https://www.tripadvisor.com/"
                            className="rating-area"
                          >
                            <img
                              src="assets/img/innerpages/icon/tripadvisor-rating2.svg"
                              alt=""
                            />
                            <span>138 reviews</span>
                          </a>
                          <h5>
                            <a href="travel-package-details.html">
                              Loire Valley & Central France
                            </a>
                          </h5>
                          <ul className="package-features">
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              No Booking Fee
                            </li>
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              Best Price Ever
                            </li>
                          </ul>
                        </div>
                        <div className="package-content-bottom-area">
                          <ul className="package-info-list">
                            <li>
                              <span>Duration:</span> 4 Days
                            </li>
                            <li>
                              <span>Operated:</span> English
                            </li>
                          </ul>
                          <div className="location-area">
                            <span>
                              Destinations:{" "}
                              <strong>
                                Château de Chambord + Arc History + Bourges
                                Cathedra.
                              </strong>
                            </span>
                          </div>
                          <div className="btn-and-price-area">
                            <a
                              href="travel-package-details.html"
                              className="primary-btn1"
                            >
                              <span>
                                Book Now
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
                                Book Now
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                </svg>
                              </span>
                            </a>
                            <div className="price-area">
                              <h6>Per Person</h6>
                              <span>$599</span>
                            </div>
                          </div>
                          <svg
                            className="divider"
                            height="6"
                            viewBox="0 0 374 6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM369 3.5L374 5.88675V0.113249L369 2.5V3.5ZM4.5 3.5H369.5V2.5H4.5V3.5Z" />
                          </svg>
                          <div className="bottom-area">
                            <ul>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.2732 12.9807H6.7268C6.68429 12.9807 6.64298 12.9666 6.60935 12.9406C6.55906 12.9018 5.36398 11.9718 4.14989 10.4857C3.43499 9.61078 2.86499 8.72565 2.45543 7.8549C1.93974 6.75846 1.67834 5.68141 1.67834 4.65329C1.67834 3.50657 2.36043 2.33394 3.54995 1.43595C4.1378 0.992226 4.81163 0.641781 5.55321 0.394396C6.33797 0.132617 7.16112 0 8 0C8.83888 0 9.66203 0.132617 10.4466 0.394396C11.1882 0.641781 11.862 0.992035 12.4499 1.43595C13.6392 2.33394 14.3215 3.50676 14.3215 4.65329C14.3215 5.63247 14.0599 6.67939 13.544 7.7647C13.1348 8.62565 12.5652 9.51367 11.8511 10.4036C10.6383 11.9148 9.40697 12.9272 9.39468 12.9371C9.36046 12.9653 9.31752 12.9807 9.2732 12.9807ZM6.79378 12.5969H9.20334C9.4465 12.3905 10.5082 11.4651 11.5563 10.1576C12.6425 8.8026 13.9374 6.74772 13.9374 4.65329C13.9374 2.63794 11.3981 0.38384 7.99981 0.38384C4.60148 0.38384 2.06238 2.63794 2.06238 4.65329C2.06238 6.85769 3.3563 8.90624 4.44199 10.2364C5.49084 11.5215 6.55311 12.4032 6.79378 12.5969Z" />
                                  <path d="M7.51886 12.7888C7.51886 12.7888 5.68372 9.03538 5.68372 4.65327C5.68372 2.43045 6.72066 0.191895 8 0.191895C9.27934 0.191895 10.3163 2.43045 10.3163 4.65327C10.3163 8.82024 8.48114 12.7888 8.48114 12.7888" />
                                  <path d="M7.34653 12.873C7.32753 12.8343 6.87594 11.9042 6.41802 10.4209C5.9956 9.05229 5.492 6.94079 5.492 4.65329C5.492 3.53843 5.74668 2.39036 6.19079 1.50312C6.67577 0.533921 7.31832 0 8.00002 0C8.68172 0 9.32426 0.53373 9.80944 1.50312C10.2535 2.39036 10.5082 3.53843 10.5082 4.65329C10.5082 6.82928 10.0048 8.94655 9.5824 10.3393C9.12505 11.8478 8.67423 12.8283 8.65542 12.8692L8.30709 12.7082C8.31169 12.6984 8.7675 11.7058 9.21717 10.2213C9.63114 8.85481 10.1246 6.77977 10.1246 4.65329C10.1246 3.5962 9.88467 2.51051 9.46648 1.67489C9.05577 0.854428 8.52146 0.38384 8.00021 0.38384C7.47895 0.38384 6.94465 0.854428 6.53394 1.67489C6.11574 2.51051 5.87584 3.5962 5.87584 4.65329C5.87584 6.893 6.37023 8.96439 6.78497 10.3076C7.23406 11.7626 7.68699 12.6951 7.6916 12.7043L7.34653 12.873ZM8.77038 16H7.22965C6.84658 16 6.5349 15.6883 6.5349 15.3052V13.9892C6.5349 13.8833 6.62088 13.7973 6.72682 13.7973H9.27321C9.37915 13.7973 9.46513 13.8833 9.46513 13.9892V15.3052C9.46513 15.6883 9.15346 16 8.77038 16ZM6.91874 14.1812V15.3052C6.91874 15.4766 7.05826 15.6162 7.22965 15.6162H8.77038C8.94177 15.6162 9.08129 15.4766 9.08129 15.3052V14.1812H6.91874Z" />
                                  <path d="M8.90952 14.1812H7.0907C7.00606 14.1812 6.93159 14.126 6.90703 14.045L6.54334 12.8445C6.52568 12.7863 6.53662 12.7232 6.5729 12.6745C6.60917 12.6257 6.66636 12.5969 6.72701 12.5969H9.2734C9.33424 12.5969 9.39143 12.6257 9.42751 12.6745C9.4454 12.6985 9.45739 12.7264 9.46252 12.756C9.46765 12.7855 9.46579 12.8158 9.45707 12.8445L9.09338 14.045C9.06862 14.1258 8.99397 14.1812 8.90952 14.1812ZM7.23291 13.7974H8.76693L9.01431 12.9808H6.98552L7.23291 13.7974Z" />
                                </svg>
                                Experience
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    Including Activities{" "}
                                    <span>
                                      Scuba Diving, Zip-lining, Rafting & Rock
                                      Climbing
                                    </span>{" "}
                                    with this premium package.
                                  </div>
                                </div>
                              </li>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g>
                                    <path d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4108 16 8C16 3.58916 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.728 1.23934 8C1.23934 4.27203 4.27266 1.23934 8 1.23934C11.7273 1.23934 14.7607 4.27203 14.7607 8C14.7607 11.728 11.728 14.7607 8 14.7607Z" />
                                    <path d="M11.0984 7.32445H8.6197V4.84576C8.6197 4.5037 8.3427 4.22607 8.00001 4.22607C7.65733 4.22607 7.38033 4.5037 7.38033 4.84576V7.32445H4.90164C4.55895 7.32445 4.28195 7.60207 4.28195 7.94414C4.28195 8.2862 4.55895 8.56382 4.90164 8.56382H7.38033V11.0425C7.38033 11.3846 7.65733 11.6622 8.00001 11.6622C8.3427 11.6622 8.6197 11.3846 8.6197 11.0425V8.56382H11.0984C11.4411 8.56382 11.7181 8.2862 11.7181 7.94414C11.7181 7.60207 11.4411 7.32445 11.0984 7.32445Z" />
                                  </g>
                                </svg>
                                Inclusion
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    This package covers{" "}
                                    <span>
                                      Accommodation, Daily Meals, Entry Fees &
                                      Local Transfers
                                    </span>{" "}
                                    to ensure a worry-free trip.
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 item wow animate fadeInDown"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="package-card four">
                      <div className="package-img-wrap">
                        <a
                          href="travel-package-details.html"
                          className="package-img"
                        >
                          <img
                            src="assets/img/innerpages/tour-package-img3.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          href="#"
                          className="map-view-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#mapViewModal"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M13.125 3.28125C13.125 3.75238 12.9846 4.21493 12.752 4.57227L10.8125 7.55273L8.87305 4.57227C8.64043 4.21494 8.5 3.75238 8.5 3.28125C8.50001 2.00412 9.53534 0.96875 10.8125 0.96875C12.0897 0.968755 13.125 2.00412 13.125 3.28125ZM14.125 3.28125C14.125 1.45184 12.6419 -0.0312455 10.8125 -0.03125C8.98305 -0.03125 7.50001 1.45184 7.5 3.28125C7.5 3.9403 7.69305 4.59297 8.03418 5.11719L10.8125 9.38574L13.5908 5.11719C13.9319 4.59298 14.125 3.94031 14.125 3.28125Z" />
                              <path d="M11.25 3.28125C11.25 3.54336 11.0322 3.75 10.8125 3.75C10.5928 3.75 10.375 3.54336 10.375 3.28125C10.375 3.04058 10.5718 2.84375 10.8125 2.84375C11.0532 2.84375 11.25 3.04058 11.25 3.28125ZM12.25 3.28125C12.25 2.4883 11.6055 1.84375 10.8125 1.84375C10.0195 1.84375 9.375 2.4883 9.375 3.28125C9.375 4.05277 9.99859 4.75 10.8125 4.75C11.6264 4.75 12.25 4.05276 12.25 3.28125Z" />
                              <path d="M5.19336 14.1855L10.6562 15.9756L10.8271 16.0312L15.7129 14.1221L16.0312 13.998V3.51465L12.6914 4.83496L13.0586 5.76465L15.0312 4.98535V13.3154L10.7979 14.9697L5.34277 13.1807L5.18066 13.1279L0.96875 14.6348V6.46484L5.20215 4.7832L8.70605 5.9502L9.02246 5.00098L5.17285 3.71777L0.28418 5.66016L-0.03125 5.78613V16.0537L5.19336 14.1855Z" />
                              <path d="M5.6875 13.6562V4.25H4.6875V13.6562H5.6875Z" />
                              <path d="M11.3125 15.5V8.46875H10.3125V15.5H11.3125Z" />
                            </g>
                          </svg>
                          View Map
                        </a>
                      </div>
                      <div className="package-content">
                        <div className="package-content-title-area">
                          <a
                            href="https://www.tripadvisor.com/"
                            className="rating-area"
                          >
                            <img
                              src="assets/img/innerpages/icon/tripadvisor-rating2.svg"
                              alt=""
                            />
                            <span>12 reviews</span>
                          </a>
                          <h5>
                            <a href="travel-package-details.html">
                              The Grand French Escape
                            </a>
                          </h5>
                          <ul className="package-features">
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              No Booking Fee
                            </li>
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              Best Price Ever
                            </li>
                          </ul>
                        </div>
                        <div className="package-content-bottom-area">
                          <ul className="package-info-list">
                            <li>
                              <span>Duration:</span> 2 Days
                            </li>
                            <li>
                              <span>Operated:</span> English
                            </li>
                          </ul>
                          <div className="location-area">
                            <span>
                              Destinations:{" "}
                              <strong>
                                Paris + Loire Valley + French Riviera +
                                Bordeaux.
                              </strong>
                            </span>
                          </div>
                          <div className="btn-and-price-area">
                            <a
                              href="travel-package-details.html"
                              className="primary-btn1"
                            >
                              <span>
                                Book Now
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
                                Book Now
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                </svg>
                              </span>
                            </a>
                            <div className="price-area">
                              <h6>Per Person</h6>
                              <span>$499</span>
                            </div>
                          </div>
                          <svg
                            className="divider"
                            height="6"
                            viewBox="0 0 374 6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM369 3.5L374 5.88675V0.113249L369 2.5V3.5ZM4.5 3.5H369.5V2.5H4.5V3.5Z" />
                          </svg>
                          <div className="bottom-area">
                            <ul>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.2732 12.9807H6.7268C6.68429 12.9807 6.64298 12.9666 6.60935 12.9406C6.55906 12.9018 5.36398 11.9718 4.14989 10.4857C3.43499 9.61078 2.86499 8.72565 2.45543 7.8549C1.93974 6.75846 1.67834 5.68141 1.67834 4.65329C1.67834 3.50657 2.36043 2.33394 3.54995 1.43595C4.1378 0.992226 4.81163 0.641781 5.55321 0.394396C6.33797 0.132617 7.16112 0 8 0C8.83888 0 9.66203 0.132617 10.4466 0.394396C11.1882 0.641781 11.862 0.992035 12.4499 1.43595C13.6392 2.33394 14.3215 3.50676 14.3215 4.65329C14.3215 5.63247 14.0599 6.67939 13.544 7.7647C13.1348 8.62565 12.5652 9.51367 11.8511 10.4036C10.6383 11.9148 9.40697 12.9272 9.39468 12.9371C9.36046 12.9653 9.31752 12.9807 9.2732 12.9807ZM6.79378 12.5969H9.20334C9.4465 12.3905 10.5082 11.4651 11.5563 10.1576C12.6425 8.8026 13.9374 6.74772 13.9374 4.65329C13.9374 2.63794 11.3981 0.38384 7.99981 0.38384C4.60148 0.38384 2.06238 2.63794 2.06238 4.65329C2.06238 6.85769 3.3563 8.90624 4.44199 10.2364C5.49084 11.5215 6.55311 12.4032 6.79378 12.5969Z" />
                                  <path d="M7.51886 12.7888C7.51886 12.7888 5.68372 9.03538 5.68372 4.65327C5.68372 2.43045 6.72066 0.191895 8 0.191895C9.27934 0.191895 10.3163 2.43045 10.3163 4.65327C10.3163 8.82024 8.48114 12.7888 8.48114 12.7888" />
                                  <path d="M7.34653 12.873C7.32753 12.8343 6.87594 11.9042 6.41802 10.4209C5.9956 9.05229 5.492 6.94079 5.492 4.65329C5.492 3.53843 5.74668 2.39036 6.19079 1.50312C6.67577 0.533921 7.31832 0 8.00002 0C8.68172 0 9.32426 0.53373 9.80944 1.50312C10.2535 2.39036 10.5082 3.53843 10.5082 4.65329C10.5082 6.82928 10.0048 8.94655 9.5824 10.3393C9.12505 11.8478 8.67423 12.8283 8.65542 12.8692L8.30709 12.7082C8.31169 12.6984 8.7675 11.7058 9.21717 10.2213C9.63114 8.85481 10.1246 6.77977 10.1246 4.65329C10.1246 3.5962 9.88467 2.51051 9.46648 1.67489C9.05577 0.854428 8.52146 0.38384 8.00021 0.38384C7.47895 0.38384 6.94465 0.854428 6.53394 1.67489C6.11574 2.51051 5.87584 3.5962 5.87584 4.65329C5.87584 6.893 6.37023 8.96439 6.78497 10.3076C7.23406 11.7626 7.68699 12.6951 7.6916 12.7043L7.34653 12.873ZM8.77038 16H7.22965C6.84658 16 6.5349 15.6883 6.5349 15.3052V13.9892C6.5349 13.8833 6.62088 13.7973 6.72682 13.7973H9.27321C9.37915 13.7973 9.46513 13.8833 9.46513 13.9892V15.3052C9.46513 15.6883 9.15346 16 8.77038 16ZM6.91874 14.1812V15.3052C6.91874 15.4766 7.05826 15.6162 7.22965 15.6162H8.77038C8.94177 15.6162 9.08129 15.4766 9.08129 15.3052V14.1812H6.91874Z" />
                                  <path d="M8.90952 14.1812H7.0907C7.00606 14.1812 6.93159 14.126 6.90703 14.045L6.54334 12.8445C6.52568 12.7863 6.53662 12.7232 6.5729 12.6745C6.60917 12.6257 6.66636 12.5969 6.72701 12.5969H9.2734C9.33424 12.5969 9.39143 12.6257 9.42751 12.6745C9.4454 12.6985 9.45739 12.7264 9.46252 12.756C9.46765 12.7855 9.46579 12.8158 9.45707 12.8445L9.09338 14.045C9.06862 14.1258 8.99397 14.1812 8.90952 14.1812ZM7.23291 13.7974H8.76693L9.01431 12.9808H6.98552L7.23291 13.7974Z" />
                                </svg>
                                Experience
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    Including Activities{" "}
                                    <span>
                                      Scuba Diving, Zip-lining, Rafting & Rock
                                      Climbing
                                    </span>{" "}
                                    with this premium package.
                                  </div>
                                </div>
                              </li>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g>
                                    <path d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4108 16 8C16 3.58916 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.728 1.23934 8C1.23934 4.27203 4.27266 1.23934 8 1.23934C11.7273 1.23934 14.7607 4.27203 14.7607 8C14.7607 11.728 11.728 14.7607 8 14.7607Z" />
                                    <path d="M11.0984 7.32445H8.6197V4.84576C8.6197 4.5037 8.3427 4.22607 8.00001 4.22607C7.65733 4.22607 7.38033 4.5037 7.38033 4.84576V7.32445H4.90164C4.55895 7.32445 4.28195 7.60207 4.28195 7.94414C4.28195 8.2862 4.55895 8.56382 4.90164 8.56382H7.38033V11.0425C7.38033 11.3846 7.65733 11.6622 8.00001 11.6622C8.3427 11.6622 8.6197 11.3846 8.6197 11.0425V8.56382H11.0984C11.4411 8.56382 11.7181 8.2862 11.7181 7.94414C11.7181 7.60207 11.4411 7.32445 11.0984 7.32445Z" />
                                  </g>
                                </svg>
                                Inclusion
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    This package covers{" "}
                                    <span>
                                      Accommodation, Daily Meals, Entry Fees &
                                      Local Transfers
                                    </span>{" "}
                                    to ensure a worry-free trip.
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 item wow animate fadeInDown"
                    data-wow-delay="800ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="package-card four">
                      <div className="package-img-wrap">
                        <div className="swiper package-card-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <a
                                href="travel-package-details.html"
                                className="package-img"
                              >
                                <img
                                  src="assets/img/innerpages/tour-package-img4.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                href="travel-package-details.html"
                                className="package-img"
                              >
                                <img
                                  src="assets/img/home1/tour-package-img4.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                href="travel-package-details.html"
                                className="package-img"
                              >
                                <img
                                  src="assets/img/home1/tour-package-img13.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-btn-grp">
                          <div className="slider-btn package-img-slider-prev">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4.84554 6.00254L9.33471 1.51317C9.45832 1.38985 9.52632 1.22498 9.52632 1.04917C9.52632 0.873268 9.45832 0.708488 9.33471 0.584976L8.94135 0.191805C8.81793 0.0680975 8.65295 0 8.47715 0C8.30134 0 8.13656 0.0680975 8.01305 0.191805L2.66798 5.53678C2.54398 5.66068 2.47608 5.82624 2.47657 6.00224C2.47608 6.17902 2.54388 6.34439 2.66798 6.46839L8.00808 11.8082C8.13159 11.9319 8.29637 12 8.47227 12C8.64808 12 8.81286 11.9319 8.93647 11.8082L9.32973 11.415C9.58564 11.1591 9.58564 10.7425 9.32973 10.4867L4.84554 6.00254Z" />
                            </svg>
                          </div>
                          <div className="slider-btn package-img-slider-next">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.15446 6.00254L2.66529 1.51317C2.54168 1.38985 2.47368 1.22498 2.47368 1.04917C2.47368 0.873268 2.54168 0.708488 2.66529 0.584976L3.05865 0.191805C3.18207 0.0680975 3.34705 0 3.52285 0C3.69866 0 3.86344 0.0680975 3.98695 0.191805L9.33202 5.53678C9.45602 5.66068 9.52392 5.82624 9.52343 6.00224C9.52392 6.17902 9.45612 6.34439 9.33202 6.46839L3.99192 11.8082C3.86841 11.9319 3.70363 12 3.52773 12C3.35192 12 3.18714 11.9319 3.06353 11.8082L2.67027 11.415C2.41436 11.1591 2.41436 10.7425 2.67027 10.4867L7.15446 6.00254Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="batch">
                          <span>Hot Sale!</span>
                        </div>
                        <a
                          href="#"
                          className="map-view-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#mapViewModal"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M13.125 3.28125C13.125 3.75238 12.9846 4.21493 12.752 4.57227L10.8125 7.55273L8.87305 4.57227C8.64043 4.21494 8.5 3.75238 8.5 3.28125C8.50001 2.00412 9.53534 0.96875 10.8125 0.96875C12.0897 0.968755 13.125 2.00412 13.125 3.28125ZM14.125 3.28125C14.125 1.45184 12.6419 -0.0312455 10.8125 -0.03125C8.98305 -0.03125 7.50001 1.45184 7.5 3.28125C7.5 3.9403 7.69305 4.59297 8.03418 5.11719L10.8125 9.38574L13.5908 5.11719C13.9319 4.59298 14.125 3.94031 14.125 3.28125Z" />
                              <path d="M11.25 3.28125C11.25 3.54336 11.0322 3.75 10.8125 3.75C10.5928 3.75 10.375 3.54336 10.375 3.28125C10.375 3.04058 10.5718 2.84375 10.8125 2.84375C11.0532 2.84375 11.25 3.04058 11.25 3.28125ZM12.25 3.28125C12.25 2.4883 11.6055 1.84375 10.8125 1.84375C10.0195 1.84375 9.375 2.4883 9.375 3.28125C9.375 4.05277 9.99859 4.75 10.8125 4.75C11.6264 4.75 12.25 4.05276 12.25 3.28125Z" />
                              <path d="M5.19336 14.1855L10.6562 15.9756L10.8271 16.0312L15.7129 14.1221L16.0312 13.998V3.51465L12.6914 4.83496L13.0586 5.76465L15.0312 4.98535V13.3154L10.7979 14.9697L5.34277 13.1807L5.18066 13.1279L0.96875 14.6348V6.46484L5.20215 4.7832L8.70605 5.9502L9.02246 5.00098L5.17285 3.71777L0.28418 5.66016L-0.03125 5.78613V16.0537L5.19336 14.1855Z" />
                              <path d="M5.6875 13.6562V4.25H4.6875V13.6562H5.6875Z" />
                              <path d="M11.3125 15.5V8.46875H10.3125V15.5H11.3125Z" />
                            </g>
                          </svg>
                          View Map
                        </a>
                      </div>
                      <div className="package-content">
                        <div className="package-content-title-area">
                          <a
                            href="https://www.tripadvisor.com/"
                            className="rating-area"
                          >
                            <img
                              src="assets/img/innerpages/icon/tripadvisor-rating2.svg"
                              alt=""
                            />
                            <span>110 reviews</span>
                          </a>
                          <h5>
                            <a href="travel-package-details.html">
                              A Magical City Adventure
                            </a>
                          </h5>
                          <ul className="package-features">
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              No Booking Fee
                            </li>
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              Best Price Ever
                            </li>
                          </ul>
                        </div>
                        <div className="package-content-bottom-area">
                          <ul className="package-info-list">
                            <li>
                              <span>Duration:</span> 8 Days
                            </li>
                            <li>
                              <span>Operated:</span> English
                            </li>
                          </ul>
                          <div className="location-area">
                            <span>
                              Destinations:{" "}
                              <strong>
                                Eiffel Tower + Louvre Museum + Palace of
                                Versailles
                              </strong>
                            </span>
                          </div>
                          <div className="btn-and-price-area">
                            <a
                              href="travel-package-details.html"
                              className="primary-btn1"
                            >
                              <span>
                                Book Now
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
                                Book Now
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                </svg>
                              </span>
                            </a>
                            <div className="price-area">
                              <h6>Per Person</h6>
                              <span>$449</span>
                            </div>
                          </div>
                          <svg
                            className="divider"
                            height="6"
                            viewBox="0 0 374 6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM369 3.5L374 5.88675V0.113249L369 2.5V3.5ZM4.5 3.5H369.5V2.5H4.5V3.5Z" />
                          </svg>
                          <div className="bottom-area">
                            <ul>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.2732 12.9807H6.7268C6.68429 12.9807 6.64298 12.9666 6.60935 12.9406C6.55906 12.9018 5.36398 11.9718 4.14989 10.4857C3.43499 9.61078 2.86499 8.72565 2.45543 7.8549C1.93974 6.75846 1.67834 5.68141 1.67834 4.65329C1.67834 3.50657 2.36043 2.33394 3.54995 1.43595C4.1378 0.992226 4.81163 0.641781 5.55321 0.394396C6.33797 0.132617 7.16112 0 8 0C8.83888 0 9.66203 0.132617 10.4466 0.394396C11.1882 0.641781 11.862 0.992035 12.4499 1.43595C13.6392 2.33394 14.3215 3.50676 14.3215 4.65329C14.3215 5.63247 14.0599 6.67939 13.544 7.7647C13.1348 8.62565 12.5652 9.51367 11.8511 10.4036C10.6383 11.9148 9.40697 12.9272 9.39468 12.9371C9.36046 12.9653 9.31752 12.9807 9.2732 12.9807ZM6.79378 12.5969H9.20334C9.4465 12.3905 10.5082 11.4651 11.5563 10.1576C12.6425 8.8026 13.9374 6.74772 13.9374 4.65329C13.9374 2.63794 11.3981 0.38384 7.99981 0.38384C4.60148 0.38384 2.06238 2.63794 2.06238 4.65329C2.06238 6.85769 3.3563 8.90624 4.44199 10.2364C5.49084 11.5215 6.55311 12.4032 6.79378 12.5969Z" />
                                  <path d="M7.51886 12.7888C7.51886 12.7888 5.68372 9.03538 5.68372 4.65327C5.68372 2.43045 6.72066 0.191895 8 0.191895C9.27934 0.191895 10.3163 2.43045 10.3163 4.65327C10.3163 8.82024 8.48114 12.7888 8.48114 12.7888" />
                                  <path d="M7.34653 12.873C7.32753 12.8343 6.87594 11.9042 6.41802 10.4209C5.9956 9.05229 5.492 6.94079 5.492 4.65329C5.492 3.53843 5.74668 2.39036 6.19079 1.50312C6.67577 0.533921 7.31832 0 8.00002 0C8.68172 0 9.32426 0.53373 9.80944 1.50312C10.2535 2.39036 10.5082 3.53843 10.5082 4.65329C10.5082 6.82928 10.0048 8.94655 9.5824 10.3393C9.12505 11.8478 8.67423 12.8283 8.65542 12.8692L8.30709 12.7082C8.31169 12.6984 8.7675 11.7058 9.21717 10.2213C9.63114 8.85481 10.1246 6.77977 10.1246 4.65329C10.1246 3.5962 9.88467 2.51051 9.46648 1.67489C9.05577 0.854428 8.52146 0.38384 8.00021 0.38384C7.47895 0.38384 6.94465 0.854428 6.53394 1.67489C6.11574 2.51051 5.87584 3.5962 5.87584 4.65329C5.87584 6.893 6.37023 8.96439 6.78497 10.3076C7.23406 11.7626 7.68699 12.6951 7.6916 12.7043L7.34653 12.873ZM8.77038 16H7.22965C6.84658 16 6.5349 15.6883 6.5349 15.3052V13.9892C6.5349 13.8833 6.62088 13.7973 6.72682 13.7973H9.27321C9.37915 13.7973 9.46513 13.8833 9.46513 13.9892V15.3052C9.46513 15.6883 9.15346 16 8.77038 16ZM6.91874 14.1812V15.3052C6.91874 15.4766 7.05826 15.6162 7.22965 15.6162H8.77038C8.94177 15.6162 9.08129 15.4766 9.08129 15.3052V14.1812H6.91874Z" />
                                  <path d="M8.90952 14.1812H7.0907C7.00606 14.1812 6.93159 14.126 6.90703 14.045L6.54334 12.8445C6.52568 12.7863 6.53662 12.7232 6.5729 12.6745C6.60917 12.6257 6.66636 12.5969 6.72701 12.5969H9.2734C9.33424 12.5969 9.39143 12.6257 9.42751 12.6745C9.4454 12.6985 9.45739 12.7264 9.46252 12.756C9.46765 12.7855 9.46579 12.8158 9.45707 12.8445L9.09338 14.045C9.06862 14.1258 8.99397 14.1812 8.90952 14.1812ZM7.23291 13.7974H8.76693L9.01431 12.9808H6.98552L7.23291 13.7974Z" />
                                </svg>
                                Experience
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    Including Activities{" "}
                                    <span>
                                      Scuba Diving, Zip-lining, Rafting & Rock
                                      Climbing
                                    </span>{" "}
                                    with this premium package.
                                  </div>
                                </div>
                              </li>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g>
                                    <path d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4108 16 8C16 3.58916 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.728 1.23934 8C1.23934 4.27203 4.27266 1.23934 8 1.23934C11.7273 1.23934 14.7607 4.27203 14.7607 8C14.7607 11.728 11.728 14.7607 8 14.7607Z" />
                                    <path d="M11.0984 7.32445H8.6197V4.84576C8.6197 4.5037 8.3427 4.22607 8.00001 4.22607C7.65733 4.22607 7.38033 4.5037 7.38033 4.84576V7.32445H4.90164C4.55895 7.32445 4.28195 7.60207 4.28195 7.94414C4.28195 8.2862 4.55895 8.56382 4.90164 8.56382H7.38033V11.0425C7.38033 11.3846 7.65733 11.6622 8.00001 11.6622C8.3427 11.6622 8.6197 11.3846 8.6197 11.0425V8.56382H11.0984C11.4411 8.56382 11.7181 8.2862 11.7181 7.94414C11.7181 7.60207 11.4411 7.32445 11.0984 7.32445Z" />
                                  </g>
                                </svg>
                                Inclusion
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    This package covers{" "}
                                    <span>
                                      Accommodation, Daily Meals, Entry Fees &
                                      Local Transfers
                                    </span>{" "}
                                    to ensure a worry-free trip.
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 item wow animate fadeInDown"
                    data-wow-delay="800ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="package-card four">
                      <div className="package-img-wrap">
                        <a
                          href="travel-package-details.html"
                          className="package-img"
                        >
                          <img
                            src="assets/img/home6/tour-package-img2.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          href="#"
                          className="map-view-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#mapViewModal"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M13.125 3.28125C13.125 3.75238 12.9846 4.21493 12.752 4.57227L10.8125 7.55273L8.87305 4.57227C8.64043 4.21494 8.5 3.75238 8.5 3.28125C8.50001 2.00412 9.53534 0.96875 10.8125 0.96875C12.0897 0.968755 13.125 2.00412 13.125 3.28125ZM14.125 3.28125C14.125 1.45184 12.6419 -0.0312455 10.8125 -0.03125C8.98305 -0.03125 7.50001 1.45184 7.5 3.28125C7.5 3.9403 7.69305 4.59297 8.03418 5.11719L10.8125 9.38574L13.5908 5.11719C13.9319 4.59298 14.125 3.94031 14.125 3.28125Z" />
                              <path d="M11.25 3.28125C11.25 3.54336 11.0322 3.75 10.8125 3.75C10.5928 3.75 10.375 3.54336 10.375 3.28125C10.375 3.04058 10.5718 2.84375 10.8125 2.84375C11.0532 2.84375 11.25 3.04058 11.25 3.28125ZM12.25 3.28125C12.25 2.4883 11.6055 1.84375 10.8125 1.84375C10.0195 1.84375 9.375 2.4883 9.375 3.28125C9.375 4.05277 9.99859 4.75 10.8125 4.75C11.6264 4.75 12.25 4.05276 12.25 3.28125Z" />
                              <path d="M5.19336 14.1855L10.6562 15.9756L10.8271 16.0312L15.7129 14.1221L16.0312 13.998V3.51465L12.6914 4.83496L13.0586 5.76465L15.0312 4.98535V13.3154L10.7979 14.9697L5.34277 13.1807L5.18066 13.1279L0.96875 14.6348V6.46484L5.20215 4.7832L8.70605 5.9502L9.02246 5.00098L5.17285 3.71777L0.28418 5.66016L-0.03125 5.78613V16.0537L5.19336 14.1855Z" />
                              <path d="M5.6875 13.6562V4.25H4.6875V13.6562H5.6875Z" />
                              <path d="M11.3125 15.5V8.46875H10.3125V15.5H11.3125Z" />
                            </g>
                          </svg>
                          View Map
                        </a>
                      </div>
                      <div className="package-content">
                        <div className="package-content-title-area">
                          <a
                            href="https://www.tripadvisor.com/"
                            className="rating-area"
                          >
                            <img
                              src="assets/img/innerpages/icon/tripadvisor-rating2.svg"
                              alt=""
                            />
                            <span>24 reviews</span>
                          </a>
                          <h5>
                            <a href="travel-package-details.html">
                              The French Alps Adventure
                            </a>
                          </h5>
                          <ul className="package-features">
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              No Booking Fee
                            </li>
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              Best Price Ever
                            </li>
                          </ul>
                        </div>
                        <div className="package-content-bottom-area">
                          <ul className="package-info-list">
                            <li>
                              <span>Duration:</span> 8 Days
                            </li>
                            <li>
                              <span>Operated:</span> English
                            </li>
                          </ul>
                          <div className="location-area">
                            <span>
                              Destinations:{" "}
                              <strong>Chamonix & Mont Blanc + Annecy.</strong>
                            </span>
                          </div>
                          <div className="btn-and-price-area">
                            <a
                              href="travel-package-details.html"
                              className="primary-btn1"
                            >
                              <span>
                                Book Now
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
                                Book Now
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                </svg>
                              </span>
                            </a>
                            <div className="price-area">
                              <h6>Per Person</h6>
                              <span>$349</span>
                            </div>
                          </div>
                          <svg
                            className="divider"
                            height="6"
                            viewBox="0 0 374 6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM369 3.5L374 5.88675V0.113249L369 2.5V3.5ZM4.5 3.5H369.5V2.5H4.5V3.5Z" />
                          </svg>
                          <div className="bottom-area">
                            <ul>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.2732 12.9807H6.7268C6.68429 12.9807 6.64298 12.9666 6.60935 12.9406C6.55906 12.9018 5.36398 11.9718 4.14989 10.4857C3.43499 9.61078 2.86499 8.72565 2.45543 7.8549C1.93974 6.75846 1.67834 5.68141 1.67834 4.65329C1.67834 3.50657 2.36043 2.33394 3.54995 1.43595C4.1378 0.992226 4.81163 0.641781 5.55321 0.394396C6.33797 0.132617 7.16112 0 8 0C8.83888 0 9.66203 0.132617 10.4466 0.394396C11.1882 0.641781 11.862 0.992035 12.4499 1.43595C13.6392 2.33394 14.3215 3.50676 14.3215 4.65329C14.3215 5.63247 14.0599 6.67939 13.544 7.7647C13.1348 8.62565 12.5652 9.51367 11.8511 10.4036C10.6383 11.9148 9.40697 12.9272 9.39468 12.9371C9.36046 12.9653 9.31752 12.9807 9.2732 12.9807ZM6.79378 12.5969H9.20334C9.4465 12.3905 10.5082 11.4651 11.5563 10.1576C12.6425 8.8026 13.9374 6.74772 13.9374 4.65329C13.9374 2.63794 11.3981 0.38384 7.99981 0.38384C4.60148 0.38384 2.06238 2.63794 2.06238 4.65329C2.06238 6.85769 3.3563 8.90624 4.44199 10.2364C5.49084 11.5215 6.55311 12.4032 6.79378 12.5969Z" />
                                  <path d="M7.51886 12.7888C7.51886 12.7888 5.68372 9.03538 5.68372 4.65327C5.68372 2.43045 6.72066 0.191895 8 0.191895C9.27934 0.191895 10.3163 2.43045 10.3163 4.65327C10.3163 8.82024 8.48114 12.7888 8.48114 12.7888" />
                                  <path d="M7.34653 12.873C7.32753 12.8343 6.87594 11.9042 6.41802 10.4209C5.9956 9.05229 5.492 6.94079 5.492 4.65329C5.492 3.53843 5.74668 2.39036 6.19079 1.50312C6.67577 0.533921 7.31832 0 8.00002 0C8.68172 0 9.32426 0.53373 9.80944 1.50312C10.2535 2.39036 10.5082 3.53843 10.5082 4.65329C10.5082 6.82928 10.0048 8.94655 9.5824 10.3393C9.12505 11.8478 8.67423 12.8283 8.65542 12.8692L8.30709 12.7082C8.31169 12.6984 8.7675 11.7058 9.21717 10.2213C9.63114 8.85481 10.1246 6.77977 10.1246 4.65329C10.1246 3.5962 9.88467 2.51051 9.46648 1.67489C9.05577 0.854428 8.52146 0.38384 8.00021 0.38384C7.47895 0.38384 6.94465 0.854428 6.53394 1.67489C6.11574 2.51051 5.87584 3.5962 5.87584 4.65329C5.87584 6.893 6.37023 8.96439 6.78497 10.3076C7.23406 11.7626 7.68699 12.6951 7.6916 12.7043L7.34653 12.873ZM8.77038 16H7.22965C6.84658 16 6.5349 15.6883 6.5349 15.3052V13.9892C6.5349 13.8833 6.62088 13.7973 6.72682 13.7973H9.27321C9.37915 13.7973 9.46513 13.8833 9.46513 13.9892V15.3052C9.46513 15.6883 9.15346 16 8.77038 16ZM6.91874 14.1812V15.3052C6.91874 15.4766 7.05826 15.6162 7.22965 15.6162H8.77038C8.94177 15.6162 9.08129 15.4766 9.08129 15.3052V14.1812H6.91874Z" />
                                  <path d="M8.90952 14.1812H7.0907C7.00606 14.1812 6.93159 14.126 6.90703 14.045L6.54334 12.8445C6.52568 12.7863 6.53662 12.7232 6.5729 12.6745C6.60917 12.6257 6.66636 12.5969 6.72701 12.5969H9.2734C9.33424 12.5969 9.39143 12.6257 9.42751 12.6745C9.4454 12.6985 9.45739 12.7264 9.46252 12.756C9.46765 12.7855 9.46579 12.8158 9.45707 12.8445L9.09338 14.045C9.06862 14.1258 8.99397 14.1812 8.90952 14.1812ZM7.23291 13.7974H8.76693L9.01431 12.9808H6.98552L7.23291 13.7974Z" />
                                </svg>
                                Experience
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    Including Activities{" "}
                                    <span>
                                      Scuba Diving, Zip-lining, Rafting & Rock
                                      Climbing
                                    </span>{" "}
                                    with this premium package.
                                  </div>
                                </div>
                              </li>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g>
                                    <path d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4108 16 8C16 3.58916 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.728 1.23934 8C1.23934 4.27203 4.27266 1.23934 8 1.23934C11.7273 1.23934 14.7607 4.27203 14.7607 8C14.7607 11.728 11.728 14.7607 8 14.7607Z" />
                                    <path d="M11.0984 7.32445H8.6197V4.84576C8.6197 4.5037 8.3427 4.22607 8.00001 4.22607C7.65733 4.22607 7.38033 4.5037 7.38033 4.84576V7.32445H4.90164C4.55895 7.32445 4.28195 7.60207 4.28195 7.94414C4.28195 8.2862 4.55895 8.56382 4.90164 8.56382H7.38033V11.0425C7.38033 11.3846 7.65733 11.6622 8.00001 11.6622C8.3427 11.6622 8.6197 11.3846 8.6197 11.0425V8.56382H11.0984C11.4411 8.56382 11.7181 8.2862 11.7181 7.94414C11.7181 7.60207 11.4411 7.32445 11.0984 7.32445Z" />
                                  </g>
                                </svg>
                                Inclusion
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    This package covers{" "}
                                    <span>
                                      Accommodation, Daily Meals, Entry Fees &
                                      Local Transfers
                                    </span>{" "}
                                    to ensure a worry-free trip.
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 item wow animate fadeInDown"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="package-card four">
                      <div className="package-img-wrap">
                        <div className="swiper package-card-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <a
                                href="travel-package-details.html"
                                className="package-img"
                              >
                                <img
                                  src="assets/img/innerpages/tour-package-img5.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                href="travel-package-details.html"
                                className="package-img"
                              >
                                <img
                                  src="assets/img/home1/tour-package-img15.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                href="travel-package-details.html"
                                className="package-img"
                              >
                                <img
                                  src="assets/img/home1/tour-package-img16.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="slider-btn-grp">
                          <div className="slider-btn package-img-slider-prev">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4.84554 6.00254L9.33471 1.51317C9.45832 1.38985 9.52632 1.22498 9.52632 1.04917C9.52632 0.873268 9.45832 0.708488 9.33471 0.584976L8.94135 0.191805C8.81793 0.0680975 8.65295 0 8.47715 0C8.30134 0 8.13656 0.0680975 8.01305 0.191805L2.66798 5.53678C2.54398 5.66068 2.47608 5.82624 2.47657 6.00224C2.47608 6.17902 2.54388 6.34439 2.66798 6.46839L8.00808 11.8082C8.13159 11.9319 8.29637 12 8.47227 12C8.64808 12 8.81286 11.9319 8.93647 11.8082L9.32973 11.415C9.58564 11.1591 9.58564 10.7425 9.32973 10.4867L4.84554 6.00254Z" />
                            </svg>
                          </div>
                          <div className="slider-btn package-img-slider-next">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.15446 6.00254L2.66529 1.51317C2.54168 1.38985 2.47368 1.22498 2.47368 1.04917C2.47368 0.873268 2.54168 0.708488 2.66529 0.584976L3.05865 0.191805C3.18207 0.0680975 3.34705 0 3.52285 0C3.69866 0 3.86344 0.0680975 3.98695 0.191805L9.33202 5.53678C9.45602 5.66068 9.52392 5.82624 9.52343 6.00224C9.52392 6.17902 9.45612 6.34439 9.33202 6.46839L3.99192 11.8082C3.86841 11.9319 3.70363 12 3.52773 12C3.35192 12 3.18714 11.9319 3.06353 11.8082L2.67027 11.415C2.41436 11.1591 2.41436 10.7425 2.67027 10.4867L7.15446 6.00254Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="batch">
                          <span>Hot Sale!</span>
                        </div>
                        <a
                          href="#"
                          className="map-view-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#mapViewModal"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M13.125 3.28125C13.125 3.75238 12.9846 4.21493 12.752 4.57227L10.8125 7.55273L8.87305 4.57227C8.64043 4.21494 8.5 3.75238 8.5 3.28125C8.50001 2.00412 9.53534 0.96875 10.8125 0.96875C12.0897 0.968755 13.125 2.00412 13.125 3.28125ZM14.125 3.28125C14.125 1.45184 12.6419 -0.0312455 10.8125 -0.03125C8.98305 -0.03125 7.50001 1.45184 7.5 3.28125C7.5 3.9403 7.69305 4.59297 8.03418 5.11719L10.8125 9.38574L13.5908 5.11719C13.9319 4.59298 14.125 3.94031 14.125 3.28125Z" />
                              <path d="M11.25 3.28125C11.25 3.54336 11.0322 3.75 10.8125 3.75C10.5928 3.75 10.375 3.54336 10.375 3.28125C10.375 3.04058 10.5718 2.84375 10.8125 2.84375C11.0532 2.84375 11.25 3.04058 11.25 3.28125ZM12.25 3.28125C12.25 2.4883 11.6055 1.84375 10.8125 1.84375C10.0195 1.84375 9.375 2.4883 9.375 3.28125C9.375 4.05277 9.99859 4.75 10.8125 4.75C11.6264 4.75 12.25 4.05276 12.25 3.28125Z" />
                              <path d="M5.19336 14.1855L10.6562 15.9756L10.8271 16.0312L15.7129 14.1221L16.0312 13.998V3.51465L12.6914 4.83496L13.0586 5.76465L15.0312 4.98535V13.3154L10.7979 14.9697L5.34277 13.1807L5.18066 13.1279L0.96875 14.6348V6.46484L5.20215 4.7832L8.70605 5.9502L9.02246 5.00098L5.17285 3.71777L0.28418 5.66016L-0.03125 5.78613V16.0537L5.19336 14.1855Z" />
                              <path d="M5.6875 13.6562V4.25H4.6875V13.6562H5.6875Z" />
                              <path d="M11.3125 15.5V8.46875H10.3125V15.5H11.3125Z" />
                            </g>
                          </svg>
                          View Map
                        </a>
                      </div>
                      <div className="package-content">
                        <div className="package-content-title-area">
                          <a
                            href="https://www.tripadvisor.com/"
                            className="rating-area"
                          >
                            <img
                              src="assets/img/innerpages/icon/tripadvisor-rating2.svg"
                              alt=""
                            />
                            <span>156 reviews</span>
                          </a>
                          <h5>
                            <a href="travel-package-details.html">
                              Cycling The Loire
                            </a>
                          </h5>
                          <ul className="package-features">
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              No Booking Fee
                            </li>
                            <li>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24607 8.16939 1.23456 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                              </svg>
                              Best Price Ever
                            </li>
                          </ul>
                        </div>
                        <div className="package-content-bottom-area">
                          <ul className="package-info-list">
                            <li>
                              <span>Duration:</span> 2 Days
                            </li>
                            <li>
                              <span>Operated:</span> English
                            </li>
                          </ul>
                          <div className="location-area">
                            <span>
                              Destinations:{" "}
                              <strong>
                                Gateway to the Loire + Villandry + Angers.
                              </strong>
                            </span>
                          </div>
                          <div className="btn-and-price-area">
                            <a
                              href="travel-package-details.html"
                              className="primary-btn1"
                            >
                              <span>
                                Book Now
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
                                Book Now
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                </svg>
                              </span>
                            </a>
                            <div className="price-area">
                              <h6>Per Person</h6>
                              <span>$699</span>
                            </div>
                          </div>
                          <svg
                            className="divider"
                            height="6"
                            viewBox="0 0 374 6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM369 3.5L374 5.88675V0.113249L369 2.5V3.5ZM4.5 3.5H369.5V2.5H4.5V3.5Z" />
                          </svg>
                          <div className="bottom-area">
                            <ul>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.2732 12.9807H6.7268C6.68429 12.9807 6.64298 12.9666 6.60935 12.9406C6.55906 12.9018 5.36398 11.9718 4.14989 10.4857C3.43499 9.61078 2.86499 8.72565 2.45543 7.8549C1.93974 6.75846 1.67834 5.68141 1.67834 4.65329C1.67834 3.50657 2.36043 2.33394 3.54995 1.43595C4.1378 0.992226 4.81163 0.641781 5.55321 0.394396C6.33797 0.132617 7.16112 0 8 0C8.83888 0 9.66203 0.132617 10.4466 0.394396C11.1882 0.641781 11.862 0.992035 12.4499 1.43595C13.6392 2.33394 14.3215 3.50676 14.3215 4.65329C14.3215 5.63247 14.0599 6.67939 13.544 7.7647C13.1348 8.62565 12.5652 9.51367 11.8511 10.4036C10.6383 11.9148 9.40697 12.9272 9.39468 12.9371C9.36046 12.9653 9.31752 12.9807 9.2732 12.9807ZM6.79378 12.5969H9.20334C9.4465 12.3905 10.5082 11.4651 11.5563 10.1576C12.6425 8.8026 13.9374 6.74772 13.9374 4.65329C13.9374 2.63794 11.3981 0.38384 7.99981 0.38384C4.60148 0.38384 2.06238 2.63794 2.06238 4.65329C2.06238 6.85769 3.3563 8.90624 4.44199 10.2364C5.49084 11.5215 6.55311 12.4032 6.79378 12.5969Z" />
                                  <path d="M7.51886 12.7888C7.51886 12.7888 5.68372 9.03538 5.68372 4.65327C5.68372 2.43045 6.72066 0.191895 8 0.191895C9.27934 0.191895 10.3163 2.43045 10.3163 4.65327C10.3163 8.82024 8.48114 12.7888 8.48114 12.7888" />
                                  <path d="M7.34653 12.873C7.32753 12.8343 6.87594 11.9042 6.41802 10.4209C5.9956 9.05229 5.492 6.94079 5.492 4.65329C5.492 3.53843 5.74668 2.39036 6.19079 1.50312C6.67577 0.533921 7.31832 0 8.00002 0C8.68172 0 9.32426 0.53373 9.80944 1.50312C10.2535 2.39036 10.5082 3.53843 10.5082 4.65329C10.5082 6.82928 10.0048 8.94655 9.5824 10.3393C9.12505 11.8478 8.67423 12.8283 8.65542 12.8692L8.30709 12.7082C8.31169 12.6984 8.7675 11.7058 9.21717 10.2213C9.63114 8.85481 10.1246 6.77977 10.1246 4.65329C10.1246 3.5962 9.88467 2.51051 9.46648 1.67489C9.05577 0.854428 8.52146 0.38384 8.00021 0.38384C7.47895 0.38384 6.94465 0.854428 6.53394 1.67489C6.11574 2.51051 5.87584 3.5962 5.87584 4.65329C5.87584 6.893 6.37023 8.96439 6.78497 10.3076C7.23406 11.7626 7.68699 12.6951 7.6916 12.7043L7.34653 12.873ZM8.77038 16H7.22965C6.84658 16 6.5349 15.6883 6.5349 15.3052V13.9892C6.5349 13.8833 6.62088 13.7973 6.72682 13.7973H9.27321C9.37915 13.7973 9.46513 13.8833 9.46513 13.9892V15.3052C9.46513 15.6883 9.15346 16 8.77038 16ZM6.91874 14.1812V15.3052C6.91874 15.4766 7.05826 15.6162 7.22965 15.6162H8.77038C8.94177 15.6162 9.08129 15.4766 9.08129 15.3052V14.1812H6.91874Z" />
                                  <path d="M8.90952 14.1812H7.0907C7.00606 14.1812 6.93159 14.126 6.90703 14.045L6.54334 12.8445C6.52568 12.7863 6.53662 12.7232 6.5729 12.6745C6.60917 12.6257 6.66636 12.5969 6.72701 12.5969H9.2734C9.33424 12.5969 9.39143 12.6257 9.42751 12.6745C9.4454 12.6985 9.45739 12.7264 9.46252 12.756C9.46765 12.7855 9.46579 12.8158 9.45707 12.8445L9.09338 14.045C9.06862 14.1258 8.99397 14.1812 8.90952 14.1812ZM7.23291 13.7974H8.76693L9.01431 12.9808H6.98552L7.23291 13.7974Z" />
                                </svg>
                                Experience
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    Including Activities{" "}
                                    <span>
                                      Scuba Diving, Zip-lining, Rafting & Rock
                                      Climbing
                                    </span>{" "}
                                    with this premium package.
                                  </div>
                                </div>
                              </li>
                              <li>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g>
                                    <path d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4108 16 8C16 3.58916 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.728 1.23934 8C1.23934 4.27203 4.27266 1.23934 8 1.23934C11.7273 1.23934 14.7607 4.27203 14.7607 8C14.7607 11.728 11.728 14.7607 8 14.7607Z" />
                                    <path d="M11.0984 7.32445H8.6197V4.84576C8.6197 4.5037 8.3427 4.22607 8.00001 4.22607C7.65733 4.22607 7.38033 4.5037 7.38033 4.84576V7.32445H4.90164C4.55895 7.32445 4.28195 7.60207 4.28195 7.94414C4.28195 8.2862 4.55895 8.56382 4.90164 8.56382H7.38033V11.0425C7.38033 11.3846 7.65733 11.6622 8.00001 11.6622C8.3427 11.6622 8.6197 11.3846 8.6197 11.0425V8.56382H11.0984C11.4411 8.56382 11.7181 8.2862 11.7181 7.94414C11.7181 7.60207 11.4411 7.32445 11.0984 7.32445Z" />
                                  </g>
                                </svg>
                                Inclusion
                                <div className="info">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                    </g>
                                  </svg>
                                  <div className="tooltip-text">
                                    This package covers{" "}
                                    <span>
                                      Accommodation, Daily Meals, Entry Fees &
                                      Local Transfers
                                    </span>{" "}
                                    to ensure a worry-free trip.
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="pagination-area mt-60 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="paginations-button">
                  <a href="#">
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
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item">
                    <a href="#">04</a>
                  </li>
                </ul>
                <div className="paginations-button">
                  <a href="#">
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
            </div>
          </div>
        </div>
      </div>

      {/* Package Grid Page End*/}
    </>
  );
};

export default ExploreTours;
