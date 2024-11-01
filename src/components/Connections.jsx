import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { API_URL, CONNECTIONS_API } from "../utils/constants";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.connections.Connections);

  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = async () => {
    try {
      const response = await axios.get(API_URL + CONNECTIONS_API, {
        withCredentials: true,
      });
      dispatch(addConnections(response.data.data));
    } catch (error) {
      console.log("CONNECTIONS ERROR: ", error);
    }
  };

  if (!data) return null;

  if (data.length === 0)
    return (
      <div className="flex justify-center items-center h-screen">
        No connections found
      </div>
    );

  return (
    <div className="flex flex-col items-center h-screen my-5">
      <h1 className="text-2xl font-bold">Connections</h1>

      {data.map((connection) => {
        return (
          <div
            className="flex items-center gap-5 bg-base-300 p-5 rounded-xl w-1/2 mt-8"
            key={connection._id}
          >
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src={connection.photo}
                alt=""
              />
            </div>
            <div className="w-1/4">
              <h2 className="text-xl font-bold">
                {connection.firstName} {connection.lastName}
              </h2>
              <p className="text-sm text-gray-500">{connection.age} year old, {connection.gender}</p>
              <p className="text-sm text-gray-500 mt-2">Software Engineer</p>
            </div>
            <div>
              <div className="w-1 h-10 bg-gray-500 rounded-md ml-10" />
            </div>
            <div className="w-1/2">
              <p className="text-base text-gray-500 ml-10">
                {connection.about}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
