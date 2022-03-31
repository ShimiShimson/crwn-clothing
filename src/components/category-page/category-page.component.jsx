import React, { Fragment } from 'react';

import ProductCard from 'components/product-card/product-card.component';

import './category-page.styles.scss';


const CategoryPage = (title, products) => {
    return (
        <Fragment key={title}>
            <h2>{title}</h2>
            <div className='products-container'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </Fragment>
    );
}


export default CategoryPage;