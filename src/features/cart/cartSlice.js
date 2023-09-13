import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    increaseItem(state, action) {
      // payload = id of the product
      const selectedItem = state.cart.find(
        (item) => item.id === action.payload
      );

      selectedItem.quantity++;
      selectedItem.totalPrice = selectedItem.quantity * selectedItem.price;
    },
    decreaseItem(state, action) {
      //  payload = id of the product
      const selectedItem = state.cart.find(
        (item) => item.id === action.payload
      );

      selectedItem.quantity--;
      selectedItem.totalPrice = selectedItem.quantity * selectedItem.price;

      if (selectedItem.quantity === 0)
        state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;

export const { addItem, increaseItem, decreaseItem, clearCart } =
  cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getTotalSingleProductQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
