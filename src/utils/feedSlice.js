import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feeds: [],
  },
  reducers: {
    addFeeds: (state, action) => {
      state.feeds = action.payload;
    },
    removeFeeds: (state, action) => {
      const filteredFeeds = state.feeds.filter((feed) => feed._id !== action.payload);
      state.feeds = filteredFeeds;
    },
  },
});

export const { addFeeds, removeFeeds } = feedSlice.actions;
export default feedSlice.reducer;
