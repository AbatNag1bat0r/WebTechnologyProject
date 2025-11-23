import React from "react";
import "./ContactSection.css";

const ContactSection: React.FC = () => {
  return (
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
  );
};

export default ContactSection;
