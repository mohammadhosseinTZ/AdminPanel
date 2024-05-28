import { createSlice } from "@reduxjs/toolkit";

export const usernameLoggedSlice = createSlice({
  name: "usernameLogged",
  initialState: {
    usernameValue :""
  },
  reducers: {
    usernameParam: (state, action) => {
      state.usernameValue = action.payload;
      console.log(action.payload);
    }
  },
});

export const {
    usernameParam
} = usernameLoggedSlice.actions;

export default usernameLoggedSlice.reducer;
