import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "../styles/login.css";
const Signin = () => {
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginDetails = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (login.userName && login.password) {
      axios.post("http://localhost:6002/login", login).then(() => {
        navigate(`/userdetails/${login.userName}`);
      });
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <>
      <div className="loginDiv">
        <h1>Login from</h1>

        <form onSubmit={handleLoginSubmit}>
          <div className="userNameDiv">
            <input
              type="text"
              placeholder="Enter Username"
              name="userName"
              onChange={loginDetails}
            />
          </div>

          <div className="loginPassDiv">
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={loginDetails}
            />
          </div>

          <div className="loginButton">
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
