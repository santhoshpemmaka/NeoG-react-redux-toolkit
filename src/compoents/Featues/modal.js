import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	ismodalOpen: false,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		showModalOpen: (state) => {
			state.ismodalOpen = true;
		},
		closeModalOpen: (state) => {
			state.ismodalOpen = false;
		},
	},
});

export const {showModalOpen, closeModalOpen} = modalSlice.actions;

export default modalSlice.reducer;
