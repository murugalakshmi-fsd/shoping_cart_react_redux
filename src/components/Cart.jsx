import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemToCart, updateQuantityToCart } from '../slices/cartslice';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const total = cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    const handleRemoveFromCart = (id) => {
        dispatch(removeItemToCart(id));
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantityToCart({ id, quantity }));
    };

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <ul className="list-group">
                {cartItems.map(item => (
                    <li key={item.id} className="list-group-item">
                        <div>{item.title}</div>
                        <div>Price: ${item.price}</div>
                        <div className="quantity">
                            Quantity:
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            />
                        </div>
                        <div>
                            Total: ${item.price * item.quantity}
                        </div>
                        <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div className="total-price">Total Price: ${total}</div>
        </div>
    );
};

export default Cart;
