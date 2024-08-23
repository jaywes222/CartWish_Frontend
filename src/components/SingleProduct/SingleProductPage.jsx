import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../Hooks/useData';
import Loader from './../Common/Loader';
import QuantityInput from './QuantityInput';
import CartContext from '../../contexts/cartContext';

const SingleProductPage = () => {
	const [selectedImage, setSelectedImage] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const { addToCart } = useContext(CartContext)
	const { id } = useParams();

	const { data: product, error, isLoading } = useData(`/products/${id}`);

	return (
		<section className="flex items-center py-8 px-12">
			{error && <em className="form_error">{error}</em>}
			{isLoading && <Loader />}
			{product && (
				<>
					<div className="single_product flex items-center justify-center">
						<div className="single_product_thumbnail flex flex-col flex-wrap gap-[14px] m-4">
							{product.images.map((image, index) => (
								<img
									key={index}
									src={`http://localhost:5000/api/products/${image}`}
									alt={product.title}
									onClick={() => setSelectedImage(index)}
									className={`w-20 h-20 object-cover rounded-[5px] cursor-pointer transition-all ease-in-out 
                            duration-200 ${
								selectedImage === index
									? 'transform scale-110'
									: ''
							}`}
								/>
							))}
						</div>

						<img
							src={`http://localhost:5000/api/products/${product.images[selectedImage]}`}
							alt={product.title}
							className="single_product_display w-[600px] h-[600px] object-cover rounded-[10px]"
						/>
					</div>

					<div className="single_product_details w-[35%] py-4 px-6">
						<h1 className="single_product_title mb-4 text-[32px]">
							{product.title}
						</h1>
						<p className="single_product_desc mb-4 text-lg">
							{product.description}
						</p>
						<p className="single_product_price mb-4 text-[24px] font-semibold">
							${product.price.toFixed(2)}
						</p>

						<h2 className="quantity_title text-[20px] font-bold mb-[3px]">
							Quantity:
						</h2>
						<div className="quantity_input flex items_center text-[20px] font-bold mt-[5px] mx-0 mb-4">
							<QuantityInput
								quantity={quantity}
								setQuantity={setQuantity}
								stock={product.stock}
							/>
						</div>

						<button
							className="search_button add_cart w-fit py-2 px-[18px] bg-majorelle-blue rounded-2xl"
							onClick={() => addToCart(product, quantity)}
						>
							Add to Cart
						</button>
					</div>
				</>
			)}
		</section>
	);
};

export default SingleProductPage;
