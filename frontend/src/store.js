import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlices";
import cartSlicesReducer from "./slices/cartSlices";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSlicesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat
              (apiSlice.middleware),
  devTools: true,
});

export default store;