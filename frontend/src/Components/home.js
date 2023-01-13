import "../Style/home.css";
import React from "react";
import BackgroundSlider from "./bgSlider";
import { Link } from "react-router-dom";
import Footer from "./footer";
// import Footer from "./footer";

const Home = () => {
  return (
    <>
      <div className="container-fluid" style={{marginTop:"1rem"}}>
        <BackgroundSlider />
      </div>
      <Footer/>
    </>
  );
};
export default Home;
