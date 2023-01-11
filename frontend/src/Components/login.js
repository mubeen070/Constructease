import "../Style/login.css";
import React from "react";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode"
import { UserContext } from "../Components/userContext";

const CLIENT_ID = "1023609669270-pj8v0q07890tmuf412gjijllo1gfa9hl.apps.googleusercontent.com"
const Login = () => {

  const [user, setuser] = useState({
    email: "", password: ""
  });
  const { email, password } = user;

  function handlecallbackResponse(response) {
    console.log("encoded jwt id token " + response.credential);
    const userObj = jwt_decode(response.credential);
    setuser(userObj);

    document.getElementById("loginContainer").hidden = true;
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handlecallbackResponse,
    });
    {
      <UserContext value={user}></UserContext>
    }
    google.accounts.id.renderButton(
      document.getElementById("signIn"),
      { theme: "outline", size: "medium", borderRadius: "10px" }
    )
    google.accounts.id.prompt();
  }, []);

  function handleSignout(eve) {
    setuser({});
    document.getElementById("loginContainer").hidden = false;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted.");
  };

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: [e.target.value] })
    console.log(user)
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-5 col-md-6 col-sm-3">
          <form onSubmit={handleSubmit} id="loginContainer">
            <h1 style={{ color: "black" }}>Constructease</h1>
            <h4 style={{ color: "black" }}>Login</h4>
            <div className="form-floating mb-1">
              <input
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
                className="containers form-control"
                id="floatingPassword"
                placeholder="Email"
                required
              />
              <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                className="containers form-control"
                id="floatingPassword"
                placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
              <label for="floatingPassword">Password</label>
            </div>

            <p
              className="forgot-password text-center mt-2"
              style={{ color: "black" }}
            >
              Forgot <a href="/">password?</a>
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary btn-sm mx-2" type="submit" style={{ height: "33px" }}>
                Login
              </button>

              <div id="signIn" ></div>

            </div>
          </form>
          <div className="pt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            {
              user &&
              <div className="pt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={user.picture} alt="profile"></img>
                <h3>{user.email}</h3>
              </div>
            }
            {
              Object.keys(user).length !== 0 &&
              <button className="btn btn-info btn-sm" onClick={(e) => handleSignout(e)} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> Sign out</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
