import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
      wishlist: wishlistSlice,
    },
  });
};
