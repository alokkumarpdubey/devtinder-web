import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name: "requests",
    initialState: {
        Requests: [],
    },
    reducers: {
        addRequests: (state, action) => {
            state.Requests = action.payload;
        },
        removeRequests: (state, action) => {
            state.Requests = [];
        }
    }   
})

export const { addRequests, removeRequests } = requestsSlice.actions;
export default requestsSlice.reducer;