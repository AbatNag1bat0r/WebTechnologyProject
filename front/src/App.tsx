import React, { useState } from "react";
import "./App.css";

interface Car {
  name: string;
  year: string;
  specs: string[];
  price: string;
  photos: string[];
}

function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

 const cars: Car[] = [
    {
      name: "Hyundai Sonata",
      year: "2023",
      specs: ["2.5л", "5 мест", "передний привод"],
      price: "от 35.000 ₸/день",
      photos: ["/cars/Hyundai Sonata/sonata_1.png", "/cars/Hyundai Sonata/sonata_2.png", "/cars/Hyundai Sonata/sonata_3.png", "/cars/Hyundai Sonata/sonata_4.png","/cars/Hyundai Sonata/sonata_5.png", "/cars/Hyundai Sonata/sonata_6.png", "/cars/Hyundai Sonata/sonata_7.png", "/cars/Hyundai Sonata/sonata_8.png"],
    },
    {
      name: "Toyota Rav 4",
      year: "2024",
      specs: ["2.5л", "5 мест", "передний привод"],
      price: "от 40.000 ₸/день",
      photos: ["/cars/Toyota RAV4/RAV4_1.png", "/cars/Toyota RAV4/RAV4_2.png", "/cars/Toyota RAV4/RAV4_3.png", "/cars/Toyota RAV4/RAV4_4.png", "/cars/Toyota RAV4/RAV4_5.png", "/cars/Toyota RAV4/RAV4_6.png", "/cars/Toyota RAV4/RAV4_7.png", "/cars/Toyota RAV4/RAV4_8.png", "/cars/Toyota RAV4/RAV4_9.png", "/cars/Toyota RAV4/RAV4_10.png"],
    },
    {
      name: "Hyundai Elantra",
      year: "2025",
      specs: ["1.6л", "5 мест", "передний привод"],
      price: "от 25.000 ₸/день",
      photos: ["/cars/Hyundai Elantra/elantra_1.png", "/cars/Hyundai Elantra/elantra_2.png", "/cars/Hyundai Elantra/elantra_3.png", "/cars/Hyundai Elantra/elantra_4.png", "/cars/Hyundai Elantra/elantra_5.png", "/cars/Hyundai Elantra/elantra_6.png", "/cars/Hyundai Elantra/elantra_7.png"],
    },
    {
      name: "TLC 200",
      year: "2014",
      specs: ["4.6л", "7 мест", "полный привод"],
      price: "от 65.000 ₸/день",
      photos: ["/cars/Toyota Land Cruiser/Land Cruiser_1.png", "/cars/Toyota Land Cruiser/Land Cruiser_2.png", "/cars/Toyota Land Cruiser/Land Cruiser_3.png", "/cars/Toyota Land Cruiser/Land Cruiser_4.png", "/cars/Toyota Land Cruiser/Land Cruiser_5.png", "/cars/Toyota Land Cruiser/Land Cruiser_6.png", "/cars/Toyota Land Cruiser/Land Cruiser_7.png", "/cars/Toyota Land Cruiser/Land Cruiser_8.png", "/cars/Toyota Land Cruiser/Land Cruiser_9.png"],
    },
    {
      name: "Li L6",
      year: "2024",
      specs: ["гибрид", "7 мест", "полный привод"],
      price: "от 75.000 ₸/день",
      photos: ["/cars/Li L6/L6_1.png", "/cars/Li L6/L6_2.png", "/cars/Li L6/L6_3.png", "/cars/Li L6/L6_4.png", "/cars/Li L6/L6_5.png", "/cars/Li L6/L6_6.png"],
    },
    {
      name: "Toyota Alphard",
      year: "2020",
      specs: ["3.5л", "6 мест", "передний привод"],
      price: "от 60.000 ₸/день",
      photos: ["/cars/Toyota Alphard/alphard_1.png", "/cars/Toyota Alphard/alphard_2.png", "/cars/Toyota Alphard/alphard_3.png", "/cars/Toyota Alphard/alphard_4.png", "/cars/Toyota Alphard/alphard_5.png", "/cars/Toyota Alphard/alphard_6.png","/cars/Toyota Alphard/alphard_7.png"],
    },
    {
      name: "BMW 530i",
      year: "2021",
      specs: ["2.0л", "5 мест", "задний привод"],
      price: "от 120.000 ₸/день",
      photos: ["/cars/BMW 530/bmw_1.png", "/cars/BMW 530/bmw_2.png", "/cars/BMW 530/bmw_3.png", "/cars/BMW 530/bmw_4.png", "/cars/BMW 530/bmw_5.png", "/cars/BMW 530/bmw_6.png", "/cars/BMW 530/bmw_7.png", "/cars/BMW 530/bmw_8.png", "/cars/BMW 530/bmw_9.png","/cars/BMW 530/bmw_10.png"],
    },
    {
      name: "Kia Seltos",
      year: "2025",
      specs: ["1.6л", "5 мест", "передний привод"],
      price: "от 30.000 ₸/день",
      photos: ["/cars/Kia Seltos/seltos_1.png", "/cars/Kia Seltos/seltos_2.png", "/cars/Kia Seltos/seltos_3.png", "/cars/Kia Seltos/seltos_4.png", "/cars/Kia Seltos/seltos_5.png"],
    },
    {
      name: "Lexus 570",
      year: "2016",
      specs: ["5.7л", "7 мест", "полный привод"],
      price: "от 150.000 ₸/день",
      photos: ["/cars/Lexus 570 2016/Lx570_1.png", "/cars/Lexus 570 2016/Lx570_2.png", "/cars/Lexus 570 2016/Lx570_3.png", "/cars/Lexus 570 2016/Lx570_4.png", "/cars/Lexus 570 2016/Lx570_5.png", "/cars/Lexus 570 2016/Lx570_6.png", "/cars/Lexus 570 2016/Lx570_7.png", "/cars/Lexus 570 2016/Lx570_8.png"],
    }, 
    {
      name: "Mercedes W222" ,
      year: "2018",
      specs: ["4,0л", "5 мест", "полный привод"],
      price: "от 120.000 ₸/день",
      photos: ["/cars/Mercedes W222/w222_1.png", "/cars/Mercedes W222/w222_2.png", "/cars/Mercedes W222/w222_3.png", "/cars/Mercedes W222/w222_4.png", "/cars/Mercedes W222/w222_5.png", "/cars/Mercedes W222/w222_6.png","/cars/Mercedes W222/w222_7.png"],
    },
    {
      name: "Toyota Prado 150",
      year: "2023",
      specs: ["2,7л","7 мест","полный привод"],
      price: "от 70.000 ₸/день",
      photos: ["/cars/Toyota Land Cruiser Prado/prado_1.jpg", "/cars/Toyota Land Cruiser Prado/prado_2.jpg", "/cars/Toyota Land Cruiser Prado/prado_3.jpg", "/cars/Toyota Land Cruiser Prado/prado_4.jpg", "/cars/Toyota Land Cruiser Prado/prado_5.jpg", "/cars/Toyota Land Cruiser Prado/prado_6.jpg", "/cars/Toyota Land Cruiser Prado/prado_7.jpg"],
    },
    {
      name: "Toyota Camry 75",
      year: "2022",
      specs: ["2,5л","5 мест","передний привод"],
      price: "от 45.000 ₸/день",
      photos: ["/cars/Toyota Camry 75/camry_1.png", "/cars/Toyota Camry 75/camry_2.png", "/cars/Toyota Camry 75/camry_3.png", "/cars/Toyota Camry 75/camry_4.png", "/cars/Toyota Camry 75/camry_5.png", "/cars/Toyota Camry 75/camry_6.png", "/cars/Toyota Camry 75/camry_7.png"],
    },
  ];

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
      setPhotoIndex(
        (prev) =>
          (prev - 1 + selectedCar.photos.length) % selectedCar.photos.length
      );
    }
  };

  return (
    <div>
      <div className="app">
      <header className="navbar">
        <div className="logo">ADC<span>Rent</span></div>
        <nav>
          <a href="#home">Главная</a>
          <a href="#cars">Автопарк</a>
          <a href="#about">О нас</a>
          <a href="#contact">Контакты</a>
        </nav>
      </header>

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

      <section id="cars" className="cars">
        <h2>Наши <span>Автомобили</span></h2>
        <div className="car-list">
          {cars.map((car) => (
            <div className="car-card" key={car.name}>
              <div className="car-photo" onClick={() => openModal(car)}>
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
          ))}
        </div>
      </section>

      {selectedCar && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <button className="nav-btn left" onClick={prevPhoto}>‹</button>
            <img src={selectedCar.photos[photoIndex]} alt={selectedCar.name} />
            <button className="nav-btn right" onClick={nextPhoto}>›</button>
            <p className="photo-caption">{selectedCar.name}</p>
          </div>
        </div>
      )}

      <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2><span style={{ color: "#999" }}>ADC</span>RENT — аренда автомобилей в Алматы</h2>
          <p>ул. Гагарина, 111Б/1, 1 этаж</p>
          <div className="discount">
            🎉 Скидка 10% — при аренде авто на срок более 7 дней!
          </div>
        </div>

        <div className="contact-right">
          <h2>Связаться с нами</h2>
          <h3>Телефон: <a href="tel:+77716843677">+7 771 684 3677</a></h3>
          <h3>Email: <a href="mailto:adcrent@gmail.com">adcrent@gmail.com</a></h3>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 ADC Rent. Все права защищены.</p>
      </footer>
    </div>

    </div>
  
  );
}

export default App;

