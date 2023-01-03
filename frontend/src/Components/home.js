import "../Style/home.css";
import React from "react";
import BackgroundSlider from "./bgSlider";
import { Link } from "react-router-dom";
// import Footer from "./footer";

const Home = () => {
  return (
    <>
      <div className="main">
      <BackgroundSlider />
      <div className="container3">
        <div className="card text-center bg-dark">
          <div className="card-header text-light">Featured</div>
          <div className="card-body">
            <h5 className="card-title text-light fs-2">Material</h5>
            <img class="img" src="/matIcon.png" alt="Card cap" />
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <button className="btn btn-dark">

<Link to="/material" style={{textDecoration:"none"}}>
  Check
</Link>
</button>

          </div>
        </div>
          <div className="card text-center bg-dark ms-4">
            <div className="card-header text-light">Featured</div>
            <div className="card-body">
              <h5 className="card-title text-light fs-2">Equipment</h5>
              <img className="img" src="/equip.png" alt="Card cap" />
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button className="btn btn-dark">

              <Link to="/equipment" style={{textDecoration:"none"}}>
                Check
              </Link>
              </button>
            </div>
          </div>
      </div>
      </div>
      
    </>
  );
};
export default Home;
