import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { API_URL, REQUESTS_API } from "../utils/constants";
import { addRequests } from "../utils/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.requests.Requests);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get(API_URL + REQUESTS_API, {
        withCredentials: true,
      });
      dispatch(addRequests(response.data.data));
    } catch (error) {
      console.log("REQUESTS ERROR: ", error);
    }
  };

  if (!data) return null;
  if (data.length === 0)
    return (
      <div className="flex justify-center items-center h-screen">
        No requests found
      </div>
    );

  return (
    <div className="flex flex-col items-center h-screen my-5">
      <h1 className="text-2xl font-bold">Connections Requests</h1>

      {data.map((request) => {
        return (
          <div
            className="flex items-center gap-5 bg-base-300 p-5 rounded-xl w-1/2 mt-8"
            key={request?.fromUserId?._id}
          >
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src={request?.fromUserId?.photo}
                alt=""
              />
            </div>
            <div className="w-1/3">
              <h2 className="text-xl font-bold">
                {request?.fromUserId?.firstName} {request?.fromUserId?.lastName}
              </h2>
              <p className="text-sm text-gray-500">
                {request?.fromUserId?.age} year old,{" "}
                {request?.fromUserId?.gender}
              </p>
              <p className="text-sm text-gray-500 mt-2">Software Engineer</p>
            </div>
            <div>
              <div className="w-1 h-10 bg-gray-500 rounded-md ml-10" />
            </div>

            <div className="w-1/3 card-actions justify-center">
              <button className="btn btn-primary">Reject</button>
              <button className="btn btn-secondary">Accept</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
