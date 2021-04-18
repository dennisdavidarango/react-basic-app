import React from 'react';

import './product-table.style.css';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';

const ProductTable = ()=>{
    return (
        <div className="product-table-container">
            <div className="product-table-title">
                <h3>
                    Name
                </h3>
                <h3>
                    Price
                </h3>
            </div>
            <ProductCategoryRow/>
            <ProductRow/>
            <ProductCategoryRow/>
            <ProductRow/>
            <ProductCategoryRow/>
            <ProductRow/>
            
        </div>
       

    
    );
}
export default ProductTable;

