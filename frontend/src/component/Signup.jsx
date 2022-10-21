import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormaData] = useState({
    name: "",
    phone: "",
    photovideo: "",
    password: "",
  });

  const passregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "password") {
      if (passregex.test(value)) {
        setFormaData({ ...formData, [name]: value });
      }
    }

    setFormaData({ ...formData, [name]: value });
  };

  const handleFormData = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={handleFormData}>
          <div className="nameDiv">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </div>

          <div className="mobileNumber">
            <input
              type="number"
              name="phone"
              placeholder="Enter Mobile Number"
              onChange={handleChange}
            />
          </div>

          <div className="photoVideo">
            <input type="file" name="photovideo" onChange={handleChange} />
          </div>

          <div className="passwordDiv">
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="signupButton">
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
