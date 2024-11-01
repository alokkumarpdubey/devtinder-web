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
            const filteredRequests = state.Requests.filter(request => request._id !== action.payload);
            state.Requests = filteredRequests;
        }
    }   
})

export const { addRequests, removeRequests } = requestsSlice.actions;
export default requestsSlice.reducer;