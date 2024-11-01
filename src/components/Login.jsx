import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { addUser } from "../utils/userSlice";
import { API_URL, LOGIN_API, SIGNUP_API } from "../utils/constants";

const Login = () => {
  const [showLoginCard, setShowLoginCard] = useState(true);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState("alok@gmail.com");
  const [password, setPassword] = useState("Password@1234");

  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        API_URL + LOGIN_API,
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

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        API_URL + SIGNUP_API,
        {
          firstName,
          lastName,
          email,
          password,
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        dispatch(addUser(response.data));
        navigate("/profile");
      }
    } catch (error) {
      console.log("SIGN UP ERROR: ", error);
      setError(error?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{showLoginCard ? "Login" : "Sign Up"}</h2>
          <div className="card-actions justify-end">
            {!showLoginCard && (
              <>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            )}
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
            <button
              className="btn btn-primary"
              onClick={showLoginCard ? handleLogin : handleSignUp}
            >
              {showLoginCard ? "Login" : "Sign Up"}
            </button>
            <p
              className="text-center mt-5"
              onClick={() => setShowLoginCard(!showLoginCard)}
            >
              {showLoginCard
                ? "Don't have an account? Click to Sign Up."
                : "Already have an acocunt? Click to Login."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
