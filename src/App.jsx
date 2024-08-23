import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Routing from './components/Routing/Routing';
import CartContext from './contexts/cartContext';
import UserContext from './contexts/userContext';
import {
	addToCartAPI,
	decreaseProductAPI,
	getCartAPI,
	increaseProductAPI,
	removeFromCartAPI,
} from './services/cartServices';
import { getJwt, getUser } from './services/userServices';
import setAuthToken from './utils/setAuthToken';

setAuthToken(getJwt());

const App = () => {
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		try {
			const jwtUser = getUser();
			if (Date.now() >= jwtUser.exp * 1000) {
				localStorage.removeItem('token');
				location.reload();
			} else {
				setUser(jwtUser);
			}
		} catch (error) {}
	}, []);

	const addToCart = (product, quantity) => {
		const updatedCart = [...cart];
		const productIndex = updatedCart.findIndex(
			(item) => item.product._id === product._id
		);

		if (productIndex === -1) {
			updatedCart.push({ product, quantity });
		} else {
			updatedCart[productIndex].quantity += quantity;
		}
		setCart(updatedCart);

		addToCartAPI(product._id, quantity)
			.then((res) => {
				toast.success('Product Added Successfully!');
			})
			.catch((err) => {
				if (err.response && err.response.status === 401) {
					toast.error('You are not authorized. Please Login.');
					setTimeout(() => {
						window.location.href = '/login';
					}, 2000);
				} else {
					toast.error('Failed to Add Product!');
				}
				setCart(cart);
			});
	};

	const removeFromCart = (id) => {
		const oldCart = [...cart];
		const newCart = oldCart.filter((item) => item.product._id !== id);
		setCart(newCart);
		removeFromCartAPI(id).catch((err) => {
			toast.error('Something went Wrong!');
			setCart(oldCart);
		});
	};

	const updateCart = (type, id) => {
		const oldCart = [...cart];
		const updatedCart = [...cart];
		const productIndex = updatedCart.findIndex(
			(item) => item.product._id === id
		);

		if (productIndex !== -1) {
			if (type === 'increase') {
				updatedCart[productIndex].quantity += 1;
				increaseProductAPI(id).catch((err) => {
					toast.error('Something Went Wrong!');
					setCart(oldCart);
				});
			} else if (
				type === 'decrease' &&
				updatedCart[productIndex].quantity > 1
			) {
				updatedCart[productIndex].quantity -= 1;
				decreaseProductAPI(id).catch((err) => {
					toast.error('Something Went Wrong!');
					setCart(oldCart);
				});
			}
			setCart(updatedCart);
		}
	};

	const getCart = () => {
		getCartAPI()
			.then((res) => {
				setCart(res.data);
			})
			.catch((err) => {
				toast.error('Something went Wrong!');
			});
	};

	useEffect(() => {
		if (user) {
			getCart();
		}
	}, [user]);

	return (
		<UserContext.Provider value={user}>
			<CartContext.Provider
				value={{ cart, addToCart, removeFromCart, updateCart, setCart }}
			>
				<div className="app grid grid-cols-1 mt-20">
					<Navbar />
					<main>
						<Routing />
						<ToastContainer position="bottom-right" />
					</main>
				</div>
			</CartContext.Provider>
		</UserContext.Provider>
	);
};

export default App;
