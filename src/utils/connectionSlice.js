import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: "connections",
    initialState: {
        Connections: [],
    },
    reducers: {
        addConnections: (state, action) => {
            state.Connections = action.payload;
        },
        removeConnections: (state, action) => {
            state.Connections = [];
        }
    }
})

export const { addConnections, removeConnections } = connectionSlice.actions;
export default connectionSlice.reducer;