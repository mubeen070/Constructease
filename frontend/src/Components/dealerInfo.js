import "../Style/dealer.css";
import React from "react";
import Footer from "./footer";

const DealerInfo = () => {
  const title = {
    fontSize: '30px',
    color: "red"
  }
  return (
    <>
    <div className="main pt-4">
      <div className="about-section" >
        <h1 className="text-align-center" style={{color:'black'}}>About Us</h1>
        <p style={{color:'black'}}>Constructease, As we create ease for construction!</p>
        <p style={{color:'black'}}>
        410 Terry Ave N, Seattle 98109, WA. Get directions to Constructease Headquarters from Bing: 410 Terry Ave N, Seattle, WA.
        </p>
      </div>

      <h2 style={{color:'black'}}>Our Team</h2>
      <div className="container2 ms-2">
        <div className="card text-center bg-dark">
          <div className="card-header text-light">#1</div>
          <div className="card-body">
            <h5 className="card-title text-light fs-2" style={title}>Phil</h5>
            <img class="img" src="/pass1.png" alt="Card   cap" />
            <p className="card-text">Head Analyst</p>
            <p className="card-text">jack@noreply.com</p>
          </div>
        </div>

        <div className="card text-center bg-dark">
          <div className="card-header text-light">#2</div>
          <div className="card-body">
            <h5 className="card-title text-light fs-2" style={title}>Phill Paul</h5>
            <img class="img" src="/pass2.png" alt="Card   cap" />
            <p className="card-text">Head Admin</p>
            <p className="card-text">phillk@noreply.com</p>
          </div>
        </div>

        <div className="card text-center bg-dark">
          <div className="card-header text-light"  >#3</div>
          <div className="card-body">
            <h5 className="card-title text-light fs-2" style={title}>Jack</h5>
            <img class="img" src="/pass3.png" alt="Card   cap" />
            <p className="card-text">Senior Helper</p>
            <p className="card-text">Annie@noreply.com</p>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default DealerInfo;
