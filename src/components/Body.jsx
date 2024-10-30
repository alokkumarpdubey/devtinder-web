import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { API_URL, PROFILE_API } from "../utils/constants";
import { addUser } from "../utils/userSlice";

import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Body = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(API_URL + PROFILE_API, {
        withCredentials: true,
      });
      console.log(response);
      dispatch(addUser(response.data.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
