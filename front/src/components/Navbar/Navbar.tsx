import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="logo">ADC<span>Rent</span></div>
      <nav>
        <a href="#home">Главная</a>
        <a href="#cars">Автопарк</a>
        <a href="#about">О нас</a>
        <a href="#contact">Контакты</a>
      </nav>
    </header>
  );
};

export default Navbar;
