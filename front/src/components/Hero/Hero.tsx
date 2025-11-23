import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: "url('/cars/car_photo_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <h1>Прокат автомобилей в Алматы</h1>
        <h2>Быстро, удобно и выгодно</h2>
        <p className="hero-desc">
          Компания <b>ADC Rent</b> предлагает широкий выбор современных автомобилей без водителя.  
          Аренда на день, неделю или месяц — по лучшим условиям.
        </p>
        <button
          className="btn-main"
          onClick={() => (window.location.href = '#contact')}
        >
          Связаться →
        </button>
      </div>
    </section>
  );
};

export default Hero;
