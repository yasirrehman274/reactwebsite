import React from "react";
import Common from "./Common";
import web from "../src/Images/HomeImg.png";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/services"
        btnname="Get Started"
      />
    </>
  );
};
export default Home;
