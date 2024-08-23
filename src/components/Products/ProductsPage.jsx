import React from 'react'
import ProductsSidebar from './ProductsSidebar'
import ProductsList from './ProductsList'

const ProductsPage = () => {
    return (
        <>
            <section className="products_page grid grid-cols-2fr p-5">
                <ProductsSidebar />

                <ProductsList />
            </section>
        </>
    )
}

export default ProductsPage
