import { createSlice } from "@reduxjs/toolkit";
import { registerUser, logInUser, refreshUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    // isRefreshing: false,
  },
  reducers:
 {
  setIsLogin:(state, action) => {
    state.user.name = action.payload.displayName;
    state.user.email = action.payload.email;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
  },

  setLogOut:(state, action) =>{
    state.user.name = null;
    state.user.email = null;
      state.token = null;
    state.isLoggedIn = action.payload;
  }
}
  // extraReducers: (builder) => {
  //   builder;
    // .addCase(register.fulfilled, (state, action) => {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // })
    //   .addCase(logIn.fulfilled, (state, action) => {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isLoggedIn = true;
    //   })
    //   .addCase(logOut.fulfilled, (state) => {
    //     state.user = { name: null, email: null };
    //     state.token = null;
    //     state.isLoggedIn = false;
    //   })
    //   .addCase(refreshUser.pending, (state) => {
    //     state.isRefreshing = true;
    //   })
    //   .addCase(refreshUser.fulfilled, (state, action) => {
    //     state.user = action.payload;
    //     state.isLoggedIn = true;
    //     state.isRefreshing = false;
    //   })
    //   .addCase(refreshUser.rejected, (state) => {
    //     state.isRefreshing = false;
    //   });
  // },
});

export const authReducer = authSlice.reducer;
export const { setIsLogin, setLogOut } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
