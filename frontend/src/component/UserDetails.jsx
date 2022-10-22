import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/user.css"
const UserDetails = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const getUser = async () => {
    await axios.get(`http://localhost:5000/user/${id}`).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div>
        <h1>User Details</h1>
        <div className="infoDiv">
          <img src={user.photoVideo} alt=""  className="image" />
          <h2>{user.name}</h2>
          <h3>{user.userName}</h3>
          <h4>{user.phone}</h4>
          <h5>{user.password}</h5>

        </div>
      </div>
    </>
  );
};

export default UserDetails;
