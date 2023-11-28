import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./LoginFormStyles.css";
import { Link } from "react-router-dom";

const LoginForm = ({ props }) => {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const [addclass, setaddclass] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSuccessfulLogin = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(localStorage);
    navigate("/home");
    props.onLogin();
  };

  const register = (e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword } = user;

    if (name && email && password && password === confirmpassword) {
      axios
        .post("http://localhost:8080/register", user)
        .then((res) => {
          const userData = res.data.user;
          handleSuccessfulLogin(userData);

          // Clear input fields after successful registration
          setUser((prevUser) => ({
            ...prevUser,
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          }));
        })
        .catch((error) => {
          alert("Registration Successful.");
        });
    } else {
      alert("Invalid registration data.");
    }
  };

  const login = (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (email && password) {
      axios
        .post("http://localhost:8080/login", user)
        .then((res) => {
          const userData = res.data.user;
          handleSuccessfulLogin(userData);
          alert("Login successful!");
        })
        .catch((error) => {
         

          // Clear password field after failed login attempt
          setUser((prevUser) => ({
            ...prevUser,
            password: "",
          }));
        });
    } else {
      alert("Invalid login data.");
    }
  };

  return (
    <div>
      <>
        <div className="fig">
          <div className={`container1 ${addclass}`} id="container1">
            <div className="form-containerl  sign-up-container">
              <form className="forml">
                <h1>Create Account</h1>

                <input
                  type="text"
                  name="name"
                  value={user.name}
                  placeholder="NAME"
                  className="input"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="EMAIL"
                  className="input"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  placeholder="PASSWORD"
                  className="input"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="confirmpassword"
                  value={user.confirmpassword}
                  placeholder="CONFIRM PASSWORD"
                  className="input"
                  onChange={handleChange}
                />
                <button type="submit" onClick={register}>
                  REGISTER
                </button>
              </form>
            </div>
            <div className="form-containerl sign-in-container">
              <form className="forml">
                <h1>Login</h1>

                <input
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="EMAIL"
                  className="input"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  placeholder="PASSWORD"
                  className="input"
                  onChange={handleChange}
                />
                 <Link to="/home"><button type="submit" onClick={login}>
                 LOGIN
                </button></Link>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <button
                    className="ghost"
                    id="signIn"
                    onClick={() => setaddclass("")}
                  >
                    GO TO LOGIN
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <button
                    className="ghost"
                    id="signUp"
                    onClick={() => setaddclass("right-panel-active")}
                  >
                    GO TO REGISTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {alertMessage && <div className="alert">{alertMessage}</div>}
      </>
    </div>
  );
};

export default LoginForm;
