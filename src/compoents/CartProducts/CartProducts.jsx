import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearAllproducts} from "../Featues/cart";
import CartProduct from "./CartProduct";
import Modal from "../Modal/Modal";
import {showModalOpen} from "../Featues/modal";

const CartProducts = () => {
	const {cartProducts, cartItemsAmount, isLoading} = useSelector(
		(store) => store.cart
	);
	const {ismodalOpen} = useSelector((store) => store.modal);
	const dispatch = useDispatch();

	return (
		<div className='cartproducts-container'>
			<h2 className='cartproduct-heading'>YOUR BAG</h2>
			{cartProducts.length > 0 ? (
				<>
					<div className='cartproduct'>
						{cartProducts.map((cartproduct) => (
							<CartProduct key={cartproduct.id} cartproduct={cartproduct} />
						))}
					</div>
					<div className='cart-displayamount'>
						<h2>Total Amount</h2>
						<h3>${cartItemsAmount.toFixed(2)}</h3>
					</div>
					<div className='cart-clearproducts'>
						<button
							onClick={() => {
								dispatch(showModalOpen());
							}}>
							Clear Products
						</button>
						{ismodalOpen && <Modal />}
					</div>
					<div className='space-3rem'></div>
				</>
			) : (
				<>
					{isLoading ? (
						<h4 className='cart-empty'>isLoading...</h4>
					) : (
						<h4 className='cart-empty'>Products is empty</h4>
					)}
				</>
			)}
		</div>
	);
};

export default CartProducts;
