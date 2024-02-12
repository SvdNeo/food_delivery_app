import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

  const hotels = [
    {
      id: 1,
      name: "Lakshmi Idli Vada Centre",
      image: "/src/image_1.jpg"
    }
  ];

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Vocal for Local</h1>

      <div className="row">
        {hotels.map(hotel => (
          <div className="col-md-4 mb-4" key={hotel.id}>
            <Link to={`/hotel/${hotel.id}`} className="text-decoration-none text-dark">
              <div className="card">
                <img src={hotel.image} className="card-img-top" alt={hotel.name} />
                <div className="card-body">
                  <h5 className="card-title">{hotel.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
