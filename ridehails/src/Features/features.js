import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: 'Users',
  },
  reducers: {
    Login: (state, action) => {
      state.user = action.payload;
    },
    Logout: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { Login, Logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;