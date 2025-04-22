import React from 'react';

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Items: {cart.length}</p>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
