import { configureStore } from "@reduxjs/toolkit";
import productsSliceReducer from "./slices/productsSlice";
import usernameLoggedReducer from "./slices/usernameLogged"
export default configureStore({
  reducer: {
    products: productsSliceReducer,
    usernameLogged: usernameLoggedReducer,
  },
});
