import React, { useContext } from 'react';
import config from "../../config.json"
import { NavLink } from 'react-router-dom';
import basket from '../../assets/basket.png';
import star from '../../assets/white-star.png';
import CartContext from './../../contexts/cartContext';

const ProductCard = ({ product }) => {
	const { addToCart } = useContext(CartContext);

	return (
		<article className="bg-white w-64 h-80 m-5 rounded-xl shadow-md shadow-black">
			<div className="h-1/2 text-center border-b border-platinum">
				<NavLink to={`/product/${product?._id}`}>
					<img
						src={`${config.backendURL}/api/products/${
							product?.images?.[0] || 'default-image.jpg'
						}`}
						alt={`${product?.title} image`}
						className="h-full object-cover"
					/>
				</NavLink>
			</div>

			<div className="py-2.5 px-5">
				<h3 className="text-xl font-bold">${product?.price}</h3>
				<p className="text-lg mt-1">{product?.title}</p>

				<footer className="flex justify-between items-center mt-2.5">
					<div className="flex items-center">
						<div className="flex items-center bg-web-orange text-white font-semibold rounded px-2 py-1">
							<img src={star} alt="star" className="w-5 mr-1" />
							{product?.reviews?.rate || 'N/A'}
						</div>
						<p className="text-gray-500 ml-2 pl-2 border-l-2 border-platinum">
							{product?.reviews?.counts || 0}
						</p>
					</div>

					{product?.stock > 0 && (
						<button
							className="w-10 h-10 bg-transparent cursor-pointer"
							onClick={() => addToCart(product, 1)}
						>
							<img
								src={basket}
								alt="basket button"
								className="w-full h-full"
							/>
						</button>
					)}
				</footer>
			</div>
		</article>
	);
};

export default ProductCard;
