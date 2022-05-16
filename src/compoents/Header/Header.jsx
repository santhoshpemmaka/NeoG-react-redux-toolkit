import React from "react";
import {useSelector} from "react-redux";
import "./Header.scss";

const Header = () => {
	const {cartItems} = useSelector((store) => store.cart);

	return (
		<div className='header'>
			<h2>Redux ToolKit</h2>
			<div className='header-icon'>
				<i className='fas fa-shopping-cart'></i>
				<span>{cartItems}</span>
			</div>
		</div>
	);
};

export default Header;
