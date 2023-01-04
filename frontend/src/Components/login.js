import "../Style/login.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import jwt_decode from "jwt-decode"
// import { useNavigate } from "react-router-dom";
const Login = () => {
  // const navigate = useNavigate();
  const [user, setuser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlecallbackResponse(Response) {
    console.log("encoded jwt id token " + Response.credential)
    const userData = jwt_decode(Response.credential)
    console.log(userData)
    document.getElementById("loginContainer").hidden = true;
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "1023609669270-pj8v0q07890tmuf412gjijllo1gfa9hl.apps.googleusercontent.com",
      callback: handlecallbackResponse,
    })
    google.accounts.id.renderButton(
      document.getElementById("signIn"),
      { theme: "outline", size: "medium", borderRadius: "10px" }
    )
    console.log("render count")
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
    if (e.currentTarget.name === "Email") {
      const newEmail = e.currentTarget.value;
      setEmail(newEmail);
      console.log(e.currentTarget.value);
    } else if (e.currentTarget.name === "Password") {
      const newPassword = e.currentTarget.value;
      setPassword(newPassword);
      console.log(e.currentTarget.value);
    }
  };

  return (
    <div className="container" style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-5 col-md-6 col-sm-3">
          <form onSubmit={handleSubmit} id="loginContainer">
            <h1 style={{ color: "black" }}>Constructease</h1>
            <h4 style={{ color: "black" }}>Login</h4>
            <div className="form-floating mb-1">
              <input
                type="email"
                value={email}
                name="Email"
                onChange={handleChange}
                className="containers form-control"
                id="floatingPassword"
                placeholder="Email"
              // ref={goRed}
              />
              <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="password"
                value={password}
                name="Password"
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
              <button className="btn btn-primary btn-sm mx-4" type="submit" style={{ height: "33px" }}>
                Login
              </button>

              {/* <button className="btn btn-danger ms-2" onClick={red}>
              Go Red
            </button> */}

              <div id="signIn" ></div>

            </div>
          </form>

          {
            user &&
            <div>
              <img src={user.picture}></img>
              <h3>{user.name}</h3>
            </div>
          }
          {
            Object.keys(user).length != 0 &&
            <button className="btn btn-info btn-sm" onClick={(e) => handleSignout(e)}> Sign out</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
