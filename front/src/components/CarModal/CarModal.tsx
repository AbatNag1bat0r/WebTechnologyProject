import React from "react";
import type { Car } from "../CarCard/CarCard"
import "./CarModal.css";

interface Props {
  car: Car;
  photoIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const CarModal: React.FC<Props> = ({ car, photoIndex, onClose, onNext, onPrev }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <button className="nav-btn left" onClick={onPrev}>‹</button>
        <img src={car.photos[photoIndex]} alt={car.name} />
        <button className="nav-btn right" onClick={onNext}>›</button>
        <p className="photo-caption">{car.name}</p>
      </div>
    </div>
  );
};

export default CarModal;
