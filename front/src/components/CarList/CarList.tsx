import React from "react";

import type { Car } from "../CarCard/CarCard";
import CarCard from "../CarCard/CarCard";


import "./CarList.css";

interface Props {
  cars: Car[];
  onCarClick: (car: Car) => void;
}

const CarList: React.FC<Props> = ({ cars, onCarClick }) => {
  return (
    <section id="cars" className="cars">
      <h2>Наши <span>Автомобили</span></h2>
      <div className="car-list">
        {cars.map((car) => (
          <CarCard key={car.name} car={car} onClick={onCarClick} />
        ))}
      </div>
    </section>
  );
};

export default CarList;
