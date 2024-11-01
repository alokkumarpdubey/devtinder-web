import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { addUser } from "../utils/userSlice";
import { API_URL, LOGIN_API } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("alok@gmail.com");
  const [password, setPassword] = useState("Password@1234");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        API_URL+LOGIN_API,
        {
          email,
          password,
        },
        { withCredentials: true }
      );      
      dispatch(addUser(response.data));
      navigate("/feed");
    } catch (error) {
      console.log("LOGIN ERROR: ", error);
      setError(error?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div className="card-actions justify-end">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email Address</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <p className="text-error">{error}</p>
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
