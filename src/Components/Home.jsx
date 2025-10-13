import React from "react";
import HomeBanner_section from "./HomeBanner_section";
import Home1destination_section from "./Home1destination_section";
import Home1travel_package from "./Home1travel_package";
import Home1OfferBanner_section from "./Home1OfferBanner_section";
import About from "./About";
import Counter_section from "./Counter_section";
import Tourguide_section from "../Tourguide_section";
import ActivityBanner_section from "./ActivityBanner_section";
import Faq_section from "./Faq_section";
import Blog_section from "./Blog_section";
import Newletter_section from "../Newletter_section";
import PartnerArea_section from "../PartnerArea_section";

const Home = () => {
  return (
    <>
      <HomeBanner_section />
      <Home1destination_section />
      <Home1OfferBanner_section />
      <Home1travel_package />
      <About />
      <Counter_section />
      <Tourguide_section />
      <ActivityBanner_section />
      <Faq_section />
      <Blog_section />
      <Newletter_section />
      <PartnerArea_section />
    </>
  );
};

export default Home;
