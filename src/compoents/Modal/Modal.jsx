import React from "react";
import {useDispatch} from "react-redux";
import {closeModalOpen} from "../Featues/modal";
import {clearAllproducts} from "../Featues/cart";
import "./Modal.scss";

const Modal = () => {
	const dispatch = useDispatch();
	return (
		<div className='modal-container'>
			<div className='modal-compoent'>
				<h2>Remove all products from your shopping Cart?</h2>
				<div className='modal-buttons'>
					<button
						onClick={() => {
							dispatch(closeModalOpen());
							dispatch(clearAllproducts());
						}}>
						Confrim
					</button>
					<button onClick={() => dispatch(closeModalOpen())}>Cancel</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
