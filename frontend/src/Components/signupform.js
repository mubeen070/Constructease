import "../Style/signupform.css";
import React from "react";
import { useState } from "react";
import { signupData } from "../Service/api";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {

  const [userData, setuserData] = useState({
    uName: "", email: "", password: "", contactNo: "", dobirth: ""
  })

  const { uName, email, password, contactNo, dobirth } = userData;

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: [e.target.value] })
    console.log(userData)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signupData(userData)
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" >
        <h1 style={{ color: "black" }}>Constructease</h1>
        <h4 style={{ color: "black" }}>Create Account</h4>
        <div className="col-lg-5 col-md-6 col-sm-3">
          <form>
            <div className="form-floating mb-1">
              <input
                type="text"
                onChange={handleChange}
                value={uName}
                name="uName"
                class="containers form-control"
                id="floatingInput"
                placeholder="Name"
              />
              <label for="floatingInput">Name</label>
            </div>


            <div className="form-floating mb-1">
              <input
                type="email"
                onChange={handleChange}
                value={email}
                name="email"
                className="containers form-control"
                id="floatingInput"
                placeholder="Email"
                required
              />
              <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="password"
                onChange={handleChange}
                value={password}
                name="password"
                className="containers form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="tel"
                onChange={handleChange}
                value={contactNo}
                name="contactNo"
                className="containers form-control"
                id="floatingInput"
                placeholder="Contact Number"
                required
              />
              <label for="floatingInput">Contact Number</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="date"
                onChange={handleChange}
                value={dobirth}
                name="doBirth"
                className="containers form-control"
                id="floatingInput"
                placeholder="Date of birth"
                required
              />
              <label for="floatingInput">Date of Birth</label>
            </div>
            <div
              className="d5 d-flex justify-content-center pb-4"
              style={{ color: "black" }}
            >
            </div>
            <div className="d-flex justify-content-center pb-5">
              <button className="btn btn-primary ms-2" type="submit" onClick={(e) => handleSubmit(e)}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
