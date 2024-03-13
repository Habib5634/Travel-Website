import { createSlice } from "@reduxjs/toolkit";
import {  userLogin, userRegister } from "./authAction";
import jwtDecode from 'jwt-decode'; // Importing jwt-decode library

// Assuming 'token' contains your JWT
const token = localStorage.getItem('token');

let user = null;

if (token) {
  // Decode the token
  user = jwtDecode(token);

  // Access the user's information from the decoded token
  // Assuming user contains a 'name' field
  console.log(user); // This will log the user's name
}


const initialState = {
    loading: false,
    user,
    token,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        //login user
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token
        })
        builder.addCase(userLogin.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
        //Register user
        builder.addCase(userRegister.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        builder.addCase(userRegister.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;

        })
        builder.addCase(userRegister.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })

        
    }
});


export default authSlice;


//get current user
        // builder.addCase(getCurrentUser.pending, (state) => {
        //     state.loading = true;
        //     state.error = null
        // })
        // builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        //     state.loading = false;
        //     state.user = payload.user;

        // })
        // builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
        //     state.loading = false;
        //     state.error = payload
        // })