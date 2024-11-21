// src/Pages/HorizontalScroll.js
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

// Импортируем все страницы
import Aircraft from "../Aircraft/Aircraft";
import Chart from "../Chart/Chart";
import Concierge from "../Concierge/Concierge";
import Footer from "..//Footer/Footer";
import Navbar from "..//Navbar/Navbar";
import Section1 from "../Section1/Section1";
import RequestForm from "..//RequestForm/RequestForm";
import We from "../We/We";
import Just from "../Just/Just";
import The from "../The/The";
import About from "../About/About";
import Contact from "../Сontact/Contact";

const HorizontalScroll = () => {
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (e) => {
    e.preventDefault();
    const deltaY = e.deltaY * 5; // Плавный скролл
    setScrollX((prevScrollX) => Math.max(0, prevScrollX + deltaY));
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const props = useSpring({
    transform: `translateX(-${scrollX}px)`,
    config: { tension: 120, friction: 30 },
  });

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
      <animated.div
        style={{
          ...props,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
        }}
      >
        {/* Оборачиваем каждый компонент страницы в отдельный div */}
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <Navbar />
        </div>
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <Section1 />
        </div>
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <Aircraft />
        </div>
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <Chart />
        </div>
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <Concierge />
        </div>
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <RequestForm />
        </div>
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <We />
        </div>
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <Just />
        </div>
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <The />
        </div>
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <About />
        </div>
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <Contact />
        </div>
        <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}>
          <Footer />
        </div>
      </animated.div>
    </div>
  );
};

export default HorizontalScroll;
