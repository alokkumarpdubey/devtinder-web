import axios from "axios";
import React, { useEffect } from "react";
import { API_URL, FEED_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeeds } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log("User feeds => ", feed.feeds);
  useEffect(() => {
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    try {
      const response = await axios.get(API_URL + FEED_API+'?page=1&limit=1', {
        withCredentials: true,
      });
      dispatch(addFeeds(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center my-10">
      {feed.feeds.map((feed) => {
        return <UserCard key={feed._id} data={feed} />;
      })}
    </div>
  );
};

export default Feed;
