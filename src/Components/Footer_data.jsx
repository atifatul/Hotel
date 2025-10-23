import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Footer_data = () => {
  // 1. URL se 'name' parameter lein (jo aapka slug hai)
  const { name } = useParams(); 
  
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setPageData(null); 
      
      try {
        // 2. API ko call karein
        const response = await axios.post(
          'http://localhost/crm/API/cmspages.php', 
          {
            EndUserIp: '127.0.0.1',
            slug: name
          }
        );

        // 3. --- YEH HAI MAIN CHANGE ---
        // Ab humein JSON parse karne ki zaroorat nahi hai.
        // Hum 'response.data' (jo ab ek object hai) ko seedha check kar sakte hain.
        if (response.data && response.data.PackageDetails && response.data.PackageDetails.name) {
          // Data ko state mein set karein
          setPageData(response.data.PackageDetails);
        } else {
          setError('No data found for this page.');
        }

      } catch (err) {
        // Sirf network errors ko handle karein
        console.error("Fetch Error: ", err);
        setError(err.message || 'An error occurred while fetching data.');
      }
      setLoading(false);
    };

    fetchData();
  }, [name]); // Jab bhi URL ka 'name' badlega, yeh function firse chalega

  
  // 4. --- YEH FUNCTION ABHI BHI ZAROORI HAI ---
  // Description string (p...pp...p) ko saaf HTML mein badalne ke liye
  const getCleanedHtml = () => {
    if (!pageData || !pageData.description) return "";
    try {
      const cleanedHtml = pageData.description
        .replace(/&39s/g, "'")       // '&39s' ko ' (apostrophe) se badlein
        .replace(/^p/i, '')         // Shuru ka 'p' hatayein
        .replace(/p$/i, '')         // Aakhir ka 'p' hatayein
        .split('pp')                // 'pp' se paragraphs ko todein
        .map(para => `<p>${para.trim()}</p>`) // Har paragraph ko <p> tag mein daalein
        .join('');                  // Sabko wapas jodein
      return cleanedHtml;
    } catch (e) {
      // Agar kuch galat ho toh fallback
      return `<p>${pageData.description}</p>`;
    }
  };


  // 5. --- RENDER LOGIC (Loading / Error / Data) ---

  if (loading) {
    return (
      <div className="container" style={{ padding: '100px 0', minHeight: '50vh' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container" style={{ padding: '100px 0', minHeight: '50vh' }}>
        <h2>Error: {error}</h2>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="container" style={{ padding: '100px 0', minHeight: '50vh' }}>
        <h2>No data available.</h2>
      </div>
    );
  }

  // 6. --- FINAL OUTPUT ---
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
            <h1>{pageData.name}</h1>
          </div>
        </div>
      </div>
      {/* Breadcrumb end*/}
    <div className="container" style={{ padding: '100px 0' }}>

      
      {/* Yahan saaf kiya hua HTML render karein */}
      <div dangerouslySetInnerHTML={{ __html: getCleanedHtml() }} />
    </div>
    </>
  );
};

export default Footer_data;