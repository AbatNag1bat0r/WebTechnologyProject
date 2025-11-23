import React from "react";
import "./CarCard.css";

export interface Car {
  name: string;
  year: string;
  specs: string[];
  price: string;
  photos: string[];
}

interface Props {
  car: Car;
  onClick: (car: Car) => void;
}

const CarCard: React.FC<Props> = ({ car, onClick }) => {
  return (
    <div className="car-card">
      <div className="car-photo" onClick={() => onClick(car)}>
        <img
          src={car.photos[0]}
          alt={car.name}
          className="car-img"
          loading="lazy"
        />
      </div>
      <h3>{car.name}</h3>
      <p>{car.year}</p>
      <div className="car-info">
        {car.specs.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
      <button className="btn-book">Забронировать {car.price}</button>
    </div>
  );
};

export default CarCard;
