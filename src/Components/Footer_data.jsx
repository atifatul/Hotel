import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const Footer_data = () => {
  const { name } = useParams();
  //   console.log(name);
  const [footerdata, setfooterdata] = useState({});
  useEffect(() => {
    const url = "http://localhost/crm/API/cmspages.php";
    const requestBody = {
      EndUserIp: "192.168.1.33",
      slug: name,
    };
    axios
      .post(url, requestBody)
      .then((response) => {
        const footdata = response.data.PackageDetails;
        console.log(footdata);
        setfooterdata(footdata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);
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
            <h1>{name}</h1>
          </div>
        </div>
      </div>
      {/* Breadcrumb end*/}

      <div className="container" style={{ padding: "40px 0" }}>
        {/* Yahaan hum check kar rahe hain:
          1. Kya 'footerdata' truthy hai (yaani null ya undefined nahi hai)?
          2. Agar hai, tabhi 'footerdata.description' ko access karo.
          
          'footerdata && footerdata.description' ka matlab hai "agar footerdata hai, 
          aur uske andar description hai, tabhi render karo"
        */}
        {footerdata && footerdata.description ? (
          <div
            dangerouslySetInnerHTML={{ __html: footerdata.description }}
          />
        ) : (
          // Agar data nahi hai (ya load ho raha hai), toh yeh dikhao
          <p>Loading content...</p>
        )}
      </div>
    </>
  );
};

export default Footer_data;
