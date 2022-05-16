import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../compoents/Featues/cart";
import modalReducer from "../compoents/Featues/modal";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		modal: modalReducer,
	},
});
