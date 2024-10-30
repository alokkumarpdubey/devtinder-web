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
    removeFeeds: (state) => {
      state.feeds = [];
    },
  },
});

export const { addFeeds, removeFeeds } = feedSlice.actions;
export default feedSlice.reducer;
