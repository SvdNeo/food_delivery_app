import React from 'react';
import { useLocation } from 'react-router-dom';

function CartPage() {
  const location = useLocation();
  const { state } = location;

  const idliCount = state?.idliCount || 0;
  const vadaCount = state?.vadaCount || 0;

  return (
    <div className="container mt-5">
      <h1>Cart</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <div>Idli</div>
          <div>Quantity: {idliCount}</div>
          <div>Price: ${idliCount * 15}</div>
        </li>
        <li className="list-group-item">
          <div>Vada</div>
          <div>Quantity: {vadaCount}</div>
          <div>Price: ${vadaCount * 25}</div>
        </li>
        {/* Other items */}
      </ul>
      <div className="mt-3">Total Items: {idliCount + vadaCount}</div>
      <div>Total Amount: ${idliCount * 15 + vadaCount * 25}</div>
      <button className="btn btn-primary mt-3">Place Order</button>
    </div>
  );
}

export default CartPage;
