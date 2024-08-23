import React from 'react';
import config from '../../config.json';
import LinkWithIcon from './../Navbar/LinkWithIcon';
import useData from '../../Hooks/useData';

const ProductsSidebar = () => {
    const { data: categories, error } = useData("/category")
    return (
        <aside className="py-2.5 px-5 rounded-md bg-white shadow-md">
            <h2 className="text-2xl mb-2.5 font-semibold">Category</h2>

            <div className="category_links">
                {error && <em className='form_error text-xs text-red-700'>{error}</em>}
                {categories && categories.map((category) => (
                    <LinkWithIcon
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        link={`/products?category=${category.name}`}
                        emoji={`${config.backendURL}/api/category/${category.image}`}
                        sidebar={true}
                />))}
            </div>

        </aside>
    );
};

export default ProductsSidebar;
