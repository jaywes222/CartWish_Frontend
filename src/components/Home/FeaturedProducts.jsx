import React from 'react';
import ProductCard from '../Products/ProductCard';
import useData from './../../Hooks/useData';
import ProductCardSkeleton from '../Products/ProductCardSkeleton';

const FeaturedProducts = () => {
    const { data: featured, error, isLoading } = useData('/products/featured');
    const skeletons = [1,2,3]
	return (
		<>
			<section className="featured_products m-16">
				<h2 className="text-5xl text-center mb-16">
					Featured Products
				</h2>

				<div className="featured_products_list flex items_center justify-evenly mb-16">
					{error && (
						<em className="form_error text-xs text-red-700">
							{error}
						</em>
					)}
					{featured &&
						featured.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					{isLoading &&
						skeletons.map((n) => <ProductCardSkeleton key={n} />)}
				</div>
			</section>
		</>
	);
};

export default FeaturedProducts;
