import React from "react";
import {useDispatch} from "react-redux";
import {
	decreaseQuantity,
	incrementQuantity,
	removeProduct,
} from "../Featues/cart";
import "./CartProducts.scss";
const CartProduct = ({cartproduct}) => {
	const dispatch = useDispatch();
	return (
		<div className='cartproduct-container'>
			<div className='cart-image-response'>
				<img src={cartproduct.img} alt={cartproduct.title} />
			</div>
			<div className='cart-description'>
				<h3 className='cart-title'>{cartproduct.title}</h3>
				<h3 className='cart-amount'>${cartproduct.price}</h3>
				<button
					className='cart-remove-button'
					onClick={() => dispatch(removeProduct({id: cartproduct.id}))}>
					remove
				</button>
			</div>
			<div className='cart-icons'>
				<i
					className='fas fa-arrow-up'
					onClick={() => dispatch(incrementQuantity({id: cartproduct.id}))}></i>
				<label>{cartproduct.amount}</label>
				<i
					className='fas fa-arrow-down'
					onClick={() =>
						cartproduct.amount === 1
							? dispatch(removeProduct({id: cartproduct.id}))
							: dispatch(decreaseQuantity({id: cartproduct.id}))
					}></i>
			</div>
		</div>
	);
};

export default CartProduct;
