import React from 'react';

const QuantityInput = ({
	quantity,
	setQuantity,
	stock,
	cartPage,
	productId,
}) => {
	return (
		<div className="flex items-center">
			<button
				className="quantity_input_button w-9 h-9 text-2xl bg-crayola-orange text-white rounded-full cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
				disabled={quantity <= 1}
				onClick={() => {
					cartPage
						? setQuantity('decrease', productId)
						: setQuantity(quantity - 1);
				}}
			>
				{''}-{''}
			</button>

			<p className="quantity_input_count mx-4 text-lg text-center">
				{quantity}
			</p>

			<button
				className="quantity_input_button w-9 h-9 text-2xl bg-crayola-orange text-white rounded-full cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
				disabled={quantity >= stock}
				onClick={() => {
					cartPage
						? setQuantity('increase', productId)
						: setQuantity(quantity + 1);
				}}
			>
				{''} + {''}
			</button>
		</div>
	);
};

export default QuantityInput;
