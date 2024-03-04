import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../slices/cartslice';

const ProductList = () => {
    const products = useSelector(state=>state.product.products);
    if (!products) {
        return <div>Loading...</div>;
      }
    
    const dispatch = useDispatch();
    
    const handleAddToCart = (product) => {
        dispatch(addItemToCart({...product,quantity:1}));
        const totalPrice = product.price * 1;  
    };
    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">Price: ${product.price}</p>
                                <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList