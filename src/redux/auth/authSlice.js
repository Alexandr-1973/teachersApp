import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.user.name = action.payload.displayName;
      state.user.email = action.payload.email;
      state.token = action.payload.accessToken;
    
    state.isLoggedIn = true ;
  
      
    },

    setLogOut: (state, action) => {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setIsLogin, setLogOut } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
