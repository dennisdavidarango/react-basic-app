import React from 'react';

import './product-row.style.css';

const ProductRow = ()=>{
    return (
        <div>
            <div className="product-row-container">
                <div className="product-title-container">
                    <p className="title">
                        Football
                    </p>
                    <p className="title">
                        $49.900
                    </p>
                </div>
            </div>
            <div className="product-row-container">
                <div className="product-title-container">
                    <p className="title">
                        Baseball
                    </p>
                    <p className="title">
                        $39.000
                    </p>
                </div>
            </div>
            <div className="product-row-container">
                <div className="product-title-container">
                    <p className="title">
                        Basketball
                    </p>
                    <p className="title">
                        $59.900
                    </p>
                </div>
            </div>
           

        </div>
        
       

    
    );
}
export default ProductRow;

