import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart")) || [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = action.payload;
    },
    removeFromCart: (state, action) => {
      state.value = action.payload;
    },
    decrementCart: (state, action) => {
      state.value = action.payload;
    },
    incrementCart: (state, action) => {
      state.value = action.payload;
    },
    deleteAllCart: (state) => {
      state.value = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementCart,
  deleteAllCart,
  incrementCart,
} = cartSlice.actions;
export default cartSlice.reducer;
