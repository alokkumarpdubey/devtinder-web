import axios from "axios";
import React, { useEffect } from "react";
import { API_URL, FEED_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeeds } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  useEffect(() => {
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    try {
      const response = await axios.get(API_URL + FEED_API + "?page=1&limit=3", {
        withCredentials: true,
      });
      dispatch(addFeeds(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  if (!feed) return null;
  if (feed.feeds.length === 0)
    return (
      <div className="flex flex-col justify-center items-center my-10">
        <div className="text-2xl font-bold">
          No feeds available to show at the moment!!
        </div>
        <button className="btn btn-accent mt-20" onClick={fetchFeeds}>Check for new feeds</button>
      </div>
    );

  return (
    <div className="flex justify-center items-center my-10">
      {feed.feeds.map((feed) => {
        return <UserCard key={feed._id} data={feed} />;
      })}
    </div>
  );
};

export default Feed;
