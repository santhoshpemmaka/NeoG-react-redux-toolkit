import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {demoData} from "./demoData";
const initialState = {
	cartProducts: [],
	cartItems: 0,
	cartItemsAmount: 0,
	isLoading: false,
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
	"cart/getCartItems",
	async (thunkAPI) => {
		try {
			//console.log(thunkAPI)
			//console.log(thunkAPI,getState());
			//thunkAPI.dispatch(function)
			const response = await axios.get(url);
			console.log(response);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue("Something went wrong");
		}
	}
);

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		incrementQuantity: (state, action) => {
			const id = action.payload.id;
			const cartProduct = state.cartProducts.find((cart) => cart.id === id);
			cartProduct.amount = cartProduct.amount + 1;
		},
		decreaseQuantity: (state, action) => {
			const cartProduct = state.cartProducts.find(
				(cart) => cart.id === action.payload.id
			);
			cartProduct.amount = cartProduct.amount - 1;
		},
		removeProduct: (state, action) => {
			const cartProduct = state.cartProducts.filter(
				(cart) => cart.id !== action.payload.id
			);
			state.cartProducts = cartProduct;
		},
		totalCartAmount: (state, action) => {
			let amount = 0;
			let total = 0;
			state.cartProducts.forEach((item) => {
				amount += item.amount;
				total += item.amount * item.price;
			});
			state.cartItems = amount;
			state.cartItemsAmount = total;
		},
		clearAllproducts: (state) => {
			state.cartProducts = [];
		},
	},
	extraReducers: {
		[getCartItems.pending]: (state) => {
			state.isLoading = true;
		},
		[getCartItems.fulfilled]: (state, action) => {
			console.log(action);
			state.isLoading = false;
			state.cartProducts = action.payload;
		},
		[getCartItems.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export const {
	incrementQuantity,
	decreaseQuantity,
	removeProduct,
	totalCartAmount,
	clearAllproducts,
} = cartSlice.actions;

export default cartSlice.reducer;
