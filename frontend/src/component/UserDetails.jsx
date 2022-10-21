import React, { useEffect } from "react";
import axios from "axios";
const UserDetails = () => {
  const getUser = async () => {
    await axios.get("http://localhost:5000/user").then((res) => {
      console.log("res");
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  return <div>UserDetails</div>;
};

export default UserDetails;
