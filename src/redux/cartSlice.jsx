import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload.id);
      if (!existingProduct) {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => state.filter((item) => item.id !== action.payload),
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
