import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import remove from '../../assets/remove.png';
import config from '../../config.json';
import CartContext from '../../contexts/cartContext';
import UserContext from '../../contexts/userContext';
import { checkoutAPI } from '../../services/orderServices';
import Table from '../Common/Table';
import QuantityInput from '../SingleProduct/QuantityInput';

const CartPage = () => {
	const [subTotal, setSubTotal] = useState(0);
	const user = useContext(UserContext);
	const { cart, removeFromCart, updateCart, setCart } =
		useContext(CartContext);

	useEffect(() => {
		let total = 0;
		cart.forEach((item) => {
			total += item.product.price * item.quantity;
		});
		setSubTotal(total);
	}, [cart]);

	const checkout = () => {
		const oldCart = [...cart];
		checkoutAPI()
			.then(() => {
				toast.success('Order Placed Successfully!');
				setCart([]);
			})
			.catch(() => {
				toast.error('Something went Wrong!');
				setCart(oldCart);
			});
	};

	return (
		<>
			<section className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto py-8 px-6">
				<div className="flex items-center gap-4 mb-8">
					<img
						src={`${config.backendURL}/api/profile/${user?.profilePic}`}
						alt="User profile"
						className="w-20 h-20 object-cover rounded-full"
					/>
					<div>
						<p className="text-2xl font-semibold">
							Name: {user?.name}{' '}
						</p>
						<p className="text-gray-600">Email: {user?.email}</p>
					</div>
				</div>

				<Table
					headings={['Item', 'Price', 'Quantity', 'Total', 'Remove']}
				>
					<tbody>
						{cart.map(({ product, quantity }) => (
							<tr
								className="h-[50px] text-center odd:bg-white even:bg-platinum"
								key={product._id}
							>
								<td>{product.title}</td>
								<td>${product.price}</td>
								<td className="flex items-center table_quantity_input h-[50px] justify-center">
									<QuantityInput
										quantity={quantity}
										stock={product.stock}
										setQuantity={updateCart}
										cartPage={true}
										productId={product._id}
									/>
								</td>
								<td>${quantity * product.price}</td>
								<td className="flex justify-center">
									<img
										src={remove}
										alt="remove icon"
										className="w-[35px] h-[35px] cursor-pointer"
										onClick={() =>
											removeFromCart(product._id)
										}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</Table>

				<div className="w-full flex justify-end mt-6">
					<table className="w-full max-w-md border-collapse text-lg bg-white">
						<tbody>
							<tr className="py-3 px-5 border-b border-gray-200">
								<td>Subtotal</td>
								<td>${subTotal}</td>
							</tr>
							<tr className="py-3 px-5 border-b border-gray-200">
								<td>Shipping Charge</td>
								<td>$250</td>
							</tr>
							<tr className="py-3 px-5 border-b border-gray-200 text-lg font-bold">
								<td>Final Total</td>
								<td>${subTotal + 250}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="w-full flex justify-end mt-6">
					<button
						className="bg-majorelle-blue text-white py-2 px-4 rounded hover:bg-dark-majorelle-blue 
                        focus:outline-none focus:ring-2 focus:ring-light-majorelle-blue"
						aria-label="Proceed to checkout"
						onClick={checkout}
					>
						Checkout
					</button>
				</div>
			</section>
		</>
	);
};

export default CartPage;
