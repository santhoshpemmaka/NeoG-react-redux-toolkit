import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./App.scss";
import {CartProducts, Header} from "./compoents";
import {totalCartAmount} from "./compoents/Featues/cart";
import {getCartItems} from "./compoents/Featues/cart";

const App = () => {
	const {cartProducts} = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCartItems());
	}, []);

	useEffect(() => {
		dispatch(totalCartAmount());
	}, [cartProducts]);
	return (
		<div className='App'>
			<Header />
			<CartProducts />
		</div>
	);
};

export default App;
