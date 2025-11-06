import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = ({ showbanner = true, pagination = true, viewpart = false }) => {
  const [blogdetails, setBlogdetails] = useState([]);
  useEffect(() => {
    const url = "http://localhost/crm/API/blogpageapi.php";
    const requestBody = {
      EndUserIp: "192.168.1.33",
      TokenId: "123",
      slug: "",
    };
    axios
      .post(url, requestBody)
      .then((response) => {
        const blogdetails = response.data.Blogdetails;
        setBlogdetails(blogdetails);
        // console.log(blogdetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* Breadcrumb start */}
      {showbanner && (
        <div
          className="breadcrumb-section"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/img/innerpages/breadcrumb-bg1.jpg')",
          }}
        >
          <div className="container">
            <div className="banner-content">
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      )}
      {/* Breadcrumb end*/}

      <div className="travel-inspiration-page pt-100 mb-100">
        <div className="container">
          <div className="row gy-md-5 gy-4 mb-60">
            {blogdetails.map((blog, index) => (
              <div
                className="col-lg-4 col-md-6 wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                key={index}
              >
                <div className="blog-card2 two">
                  <div className="blog-img-wrap">
                    <a
                      href="travel-inspiration-details.html"
                      className="blog-img"
                    >
                      <img src={blog.photo} alt="Oops" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <h4>
                      <Link
                        to={`/blog/${index}`}
                        state={{
                          image: blog.photo,
                          metaTitle: blog.metaTitle,
                          description: blog.description,
                        }}
                      >
                        {blog.name}
                      </Link>
                    </h4>
                    {/* <p>
                    Nature, Culture & Thrill: Travel Stories Inspire is a
                    collection of experiences from explorers.
                  </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {viewpart && (
            <div
              className="row wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="col-lg-12 d-flex justify-content-center">
                <Link to="/blog" className="primary-btn1 two three transparent">
                  <span>
                    View All Inspiration
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
                    View All Inspiration
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
              </div>
            </div>
          )}

          {pagination && (
            <div
              className="pagination-area wow animate fadeInUp"
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
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
