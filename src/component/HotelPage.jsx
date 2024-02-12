import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HotelPage() {
  const [idliCount, setIdliCount] = useState(0);
  const [vadaCount, setVadaCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const dishes = [
    {
      name: 'Idli',
      image: 'idli.jpg',
      rating: 4.5,
      price: 15,
    },
    {
      name: 'Vada',
      image: 'vada.jpg',
      rating: 4.8,
      price: 25,
    },
  ];

  const incrementDish = (dishName, dishPrice) => {
    if (dishName === 'Idli') {
      setIdliCount((prevCount) => prevCount + 1);
    } else {
      setVadaCount((prevCount) => prevCount + 1);
    }
    setTotalPrice((prevTotal) => prevTotal + dishPrice);
  };

  const decrementDish = (dishName, dishPrice) => {
    if (dishName === 'Idli') {
      setIdliCount((prevCount) => prevCount - 1);
    } else {
      setVadaCount((prevCount) => prevCount - 1);
    }
    setTotalPrice((prevTotal) => prevTotal - dishPrice);
  };

  const handleProceed = () => {
    alert(`Total Price: ${totalPrice}`);
    alert(`Total Quantity: ${idliCount} Idli and ${vadaCount} Vada`);
    navigate('/cart', { state: { idliCount, vadaCount } });
  };

  return (
    <div className="container mt-5">
      <h1>Hotel Name: Lakshmi Idli Vada Center</h1>
      <p>Ratings: 4.7</p>

      <div className="row">
        {dishes.map((dish) => (
          <div className="col-md-6 mb-4" key={dish.name}>
            <div className="card">
              <img src={dish.image} className="card-img-top" alt={dish.name} />
              <div className="card-body">
                <h5 className="card-title">{dish.name}</h5>
                <div>Rating: {dish.rating}</div>
                <div>Price: ${dish.price}</div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-primary me-2" onClick={() => decrementDish(dish.name, dish.price)}>-</button>
                  <span>{dish.name === 'Idli' ? idliCount : vadaCount}</span>
                  <button className="btn btn-outline-primary ms-2" onClick={() => incrementDish(dish.name, dish.price)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">Total Price: ${totalPrice}</div>

      <button className="btn btn-primary mt-3" onClick={handleProceed}>Proceed to Cart</button>
    </div>
  );
}

export default HotelPage;
