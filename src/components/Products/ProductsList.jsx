import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useData from '../../Hooks/useData';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

const ProductsList = () => {
	const [page, setPage] = useState(1);
	const [sortBy, setSortBy] = useState('');
	const [sortedProducts, setSortedProducts] = useState([]);

	const [search, setSearch] = useSearchParams();
	const category = search.get('category');
	const searchQuery = search.get('search');

	const { data, error, isLoading } = useData(
		'/products',
		{
			params: {
				search: searchQuery,
				category,
				perPage: 10,
				page,
			},
		},
		[searchQuery, category, page]
	);

	useEffect(() => {
		setPage(1);
	}, [searchQuery, category]);

	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

	// const handlePageChange = (page) => {
	// 	const currentParams = Object.fromEntries([...search]);
	// 	setSearch({ ...currentParams, page: parseInt(currentParams.page) + 1 });
	// };

	useEffect(() => {
		const handleScroll = () => {
			const { scrollTop, clientHeight, scrollHeight } =
				document.documentElement;
			if (
				scrollTop + clientHeight >= scrollHeight - 1 &&
				!isLoading &&
				data &&
				page < data.totalPages
			) {
				setPage((prev) => prev + 1);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [data, isLoading]);

	useEffect(() => {
		if (data && data.products) {
			const products = [...data.products];

			if (sortBy === 'price desc') {
				setSortedProducts(products.sort((a, b) => b.price - a.price));
			} else if (sortBy === 'price asc') {
				setSortedProducts(products.sort((a, b) => a.price - b.price));
			} else if (sortBy === 'rate desc') {
				setSortedProducts(products.sort((a, b) => b.reviews.rate - a.reviews.rate));
			} else if (sortBy === 'rate asc') {
				setSortedProducts(products.sort((a, b) => a.reviews.rate - b.reviews.rate));
			} else {
				setSortedProducts(products)
			}
		}
	}, [sortBy, data]);

	return (
		<section className="p-2.5 pl-[30px]">
			<header className="flex items-center justify-between mb-4">
				<h2 className="text-[26px] font-semibold">Products</h2>
				<select
					name="sort"
					id="sort"
					className="text-lg font-bold h-[35px] py-0 px-[5px] border border-gray-300 outline-none rounded-[5px]"
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="">Relevance</option>
					<option value="price desc">Price HIGH to LOW</option>
					<option value="price asc">Price LOW to HIGH</option>
					<option value="rate desc">Rate HIGH to LOW</option>
					<option value="rate asc">Rate LOW to HIGH</option>
				</select>
			</header>

			<div className="flex flex-wrap justify-evenly">
				{error && (
					<em className="form_error text-xs text-red-700">{error}</em>
				)}
				{data?.products &&
					sortedProducts.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				{isLoading &&
					skeletons.map((n) => <ProductCardSkeleton key={n} />)}
			</div>
			{/* {data && (
				<Pagination
					totalPosts={data.totalProducts}
					postsPerPage={8}
					onClick={handlePageChange}
					currentPage={page}
				/>
			)} */}
		</section>
	);
};

export default ProductsList;
