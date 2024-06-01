import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("wishlist")) || [],
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  toggleLike,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
