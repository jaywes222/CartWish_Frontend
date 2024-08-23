import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, onClick, currentPage }) => {
	let pages = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i);
	}
	return (
		<>
			{pages.length > 1 && (
				<ul className="pagination list-none flex flex-wrap justify-center m-4">
					{pages.map((page) => (
						<li key={page}>
							<button
								className={
									parseInt(currentPage) === page
										? ' active: bg-black text-white w-10 h-10 my-0 mx-2.5 text-lg font-semibold border border-platinum rounded-md cursor-pointer transition-all duration-200 ease-in-out'
										: 'pagination_button w-10 h-10 my-0 mx-2.5 text-lg text-black font-semibold border border-platinum rounded-md bg-white cursor-pointer transition-all duration-200 ease-in-out'
								}
								onClick={() => onClick(page)}
							>
								{page}
							</button>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Pagination;
