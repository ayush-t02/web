import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/authSlice";
import { alertSlice } from "./features/alertSlice";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    
  },
});