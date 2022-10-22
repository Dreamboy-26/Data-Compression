import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";
import axios from "axios";
import Compressor from "compressorjs";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    photoVideo: "",
    password: "",
  });
  const [url, setUrl] = useState("");
  const [compressedFile, setCompressedFile] = useState(null);

  const passregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.8,
      success: (compressedResult) => {
        setCompressedFile(compressedResult);
      },
    });
  };

  const handleFormData = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", compressedFile);
    data.append("upload_preset", "social-clone");
    data.append("cloud_name", "socialimageuploader");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/socialimageuploader/image/upload",
        data
      )
      .then((res) => {
        console.log(res.data.url);
        setUrl(res.data.url);
        setFormData({ ...formData, photoVideo: res.data.url });
      })
      .catch((err) => console.log(err));

    if (!formData.name || !formData.phone || !formData.photoVideo) {
      console.log("all fields are required");

      return;
    }

    if (passregex.test(formData.password)) {
      console.log("success");

      axios.post("http://localhost:5000/signup", formData);

      navigate("/login");
    } else {
      console.log("invalid");
    }
  };

  const loadFile = (event) => {
    handleCompressedUpload(event);
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };
  };

  return (
    <>
      <div className="mainDiv">
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
            <input
              type="file"
              onChange={(event) => {
                loadFile(event);
              }}
              accept="image/*"
            />
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
      <img
          src="https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-2/512/image-256.png"
          id="output"
          alt=""

          width="200px"
          height="200px"
        />
    </>
  );
};

export default Signup;
