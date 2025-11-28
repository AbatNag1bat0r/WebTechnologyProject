import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CarList from "./components/CarList/CarList";
import CarModal from "./components/CarModal/CarModal";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import type { Car } from "./components/CarCard/CarCard";

function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => { fetch("http://127.0.0.1:8000/api/cars/") .then(res => res.json()) .then(data => setCars(data));}, []);

  const openModal = (car: Car) => {
    setSelectedCar(car);
    setPhotoIndex(0);
  };

  const closeModal = () => setSelectedCar(null);

  const nextPhoto = () => {
    if (selectedCar) {
      setPhotoIndex((prev) => (prev + 1) % selectedCar.photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedCar) {
      setPhotoIndex((prev) => (prev - 1 + selectedCar.photos.length) % selectedCar.photos.length);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <CarList cars={cars} onCarClick={openModal} />
      {selectedCar && (
        <CarModal
          car={selectedCar}
          photoIndex={photoIndex}
          onClose={closeModal}
          onNext={nextPhoto}
          onPrev={prevPhoto}
        />
      )}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
