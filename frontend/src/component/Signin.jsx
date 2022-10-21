import React from "react";
import { useState } from "react";

const Signin = () => {
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });

  const loginDetails = (e) => {
    const { name, value } = e.target;

    setLogin({ ...login, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
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
