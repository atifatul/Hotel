import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
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
        </div>
      </div>
    </>
  );
};

export default Blog;
