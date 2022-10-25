import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {token : ""},
    reducers: {
        setToken: (state,payload) => {
            state.token += payload.payload
            console.log(payload)
        }
    }
})


export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer;