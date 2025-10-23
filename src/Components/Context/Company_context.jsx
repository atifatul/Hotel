import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
const companytext = createContext();

export const Company_context = ({ children }) => {
  const [companydata, setcompanydata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/crm/API/websiteinfo.php"
        );
        setcompanydata(response.data.websiteinfo);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchCompanyData();
  }, []);
  const value = { companydata, loading };
  return (
    <div>
      <companytext.Provider value={value}>
        {!loading && children}
      </companytext.Provider>
    </div>
  );
};

export const useCompany = () => {
  return useContext(companytext);
};
