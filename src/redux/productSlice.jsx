import { createSlice } from "@reduxjs/toolkit";
import { products } from "../products";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: products,
    filteredProducts: products,
    categories: ["All"],
    selectedCategory: "All",
    searchText: "",
  },
  reducers: {
    setCategories: (state) => {
      state.categories = ["All", ...new Set(products.map((p) => p.category))];
    },
    filterProducts: (state, action) => {
      const { category, searchText } = action.payload;

      state.filteredProducts = state.allProducts.filter((product) => {
        const matchesCategory = category === "All" || product.category === category;
        const matchesSearch =
          product.name &&
          product.name.toLowerCase().includes(searchText.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      state.selectedCategory = category;
      state.searchText = searchText;
    },
  },
});

export const { setCategories, filterProducts } = productSlice.actions;
export default productSlice.reducer;
