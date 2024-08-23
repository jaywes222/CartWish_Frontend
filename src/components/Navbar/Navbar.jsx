import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import star from '../../assets/glowing-star.png';
import idButton from '../../assets/id-button.png';
import lock from '../../assets/locked.png';
import memo from '../../assets/memo.png';
import order from '../../assets/package.png';
import rocket from '../../assets/rocket.png';
import CartContext from '../../contexts/cartContext';
import UserContext from '../../contexts/userContext';
import { getSuggestionsAPI } from '../../services/productServices';
import LinkWithIcon from './LinkWithIcon';

const Navbar = ({ cartCount }) => {
	const [search, setSearch] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [selectedItem, setSelectedItem] = useState(-1);
	const navigate = useNavigate();
	const user = useContext(UserContext);
	const { cart } = useContext(CartContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (search.trim() !== '') {
			navigate(`/products?search=${search.trim()}`);
		}
		setSuggestions([]);
	};

	const handleKeyDown = (e) => {
		if (selectedItem < suggestions.length) {
			if (e.key === 'ArrowDown') {
				setSelectedItem((current) =>
					current < suggestions.length - 1 ? current + 1 : current
				);
			} else if (e.key === 'ArrowUp') {
				setSelectedItem((current) =>
					current > 0 ? current - 1 : current
				);
			} else if (e.key === 'Enter' && selectedItem > -1) {
				const suggestion = suggestions[selectedItem];
				navigate(`/products?search=${suggestion.title}`);
				setSearch('');
				setSuggestions([]);
			}
		} else {
			setSelectedItem(-1);
		}
	};

	useEffect(() => {
		const delaySuggestions = setTimeout(() => {
			if (search.trim() !== '') {
				getSuggestionsAPI(search)
					.then((res) => setSuggestions(res.data))
					.catch((err) => {
						console.error(err);
					});
			} else {
				setSuggestions([]);
			}
		}, 300);

		return () => clearTimeout(delaySuggestions);
	}, [search]);

	useEffect(() => {
		const selectedElement = document.querySelector(
			'.search_result .selected'
		);
		if (selectedElement) {
			selectedElement.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
			});
		}
	}, [selectedItem]);

	return (
		<section className="navbar flex items-center justify-between py-4 px-10 w-full bg-gray-400 fixed top-0 left-0 z-50">
			<div className="flex items-center space-x-4">
				<h1 className="navbar_heading text-4xl font-montserrat">
					CartWish
				</h1>
				<form
					className="navbar_form relative flex items-center w-full h-10 border-2 border-solid border-gray-300 rounded-md p-1"
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						className="navbar_search font-montserrat flex-1 h-full py-0 px-2 text-lg font-medium border-none outline-none"
						placeholder="Search Products"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						onKeyDown={handleKeyDown}
					/>
					<button
						type="submit"
						className="search_btn font-montserrat py-0 px-2 text-xl font-medium rounded-md bg-majorelle-blue text-white cursor-pointer"
					>
						Search
					</button>

					{suggestions.length > 0 && (
						<ul className="search_result absolute top-full left-0 w-full mt-2.5 border border-platinum rounded-[5px] bg-white z-[9999]">
							{suggestions.map((suggestion, index) => (
								<li
									key={suggestion._id}
									className={`search_suggestion_link flex hover:bg-platinum ${
										selectedItem === index
											? 'selected bg-platinum'
											: ''
									}`}
								>
									<Link
										to={`/products?search=${suggestion.title}`}
										className="w-full py-2.5 px-5 text-lg cursor-pointer"
										onClick={() => {
											setSearch('');
											setSuggestions([]);
										}}
									>
										{suggestion.title}
									</Link>
								</li>
							))}
						</ul>
					)}
				</form>
			</div>

			<div className="navbar_links flex items-center space-x-4 text-lg">
				<LinkWithIcon title="Home" link="/" emoji={rocket} />
				<LinkWithIcon title="Products" link="/products" emoji={star} />
				{!user ? (
					<>
						<LinkWithIcon
							title="Login"
							link="/login"
							emoji={idButton}
						/>
						<LinkWithIcon
							title="SignUp"
							link="/signup"
							emoji={memo}
						/>
					</>
				) : (
					<>
						<LinkWithIcon
							title="My Orders"
							link="/myorders"
							emoji={order}
						/>
						<LinkWithIcon
							title="Log Out"
							link="/logout"
							emoji={lock}
						/>
						<NavLink to="/cart" className="flex items-center">
							Cart
							<p className="flex items-center justify-center w-5 h-5 rounded-full bg-majorelle-blue text-white text-sm ml-1 cart_counts">
								{cart.length}
							</p>
						</NavLink>
					</>
				)}
			</div>
		</section>
	);
};

export default Navbar;
