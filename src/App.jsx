import { BrowserRouter as Router, } from "react-router-dom";
import Aircraft from "./Component/Aircraft/Aircraft";
import Chart from "./Component/Chart/Chart";
import Concierge from "./Component/Concierge/Concierge";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import RequestForm from "./Component/RequestForm/RequestForm";
import We from "./Component/We/We";
import Just from "./Component/Just/Just";
import The from "./Component/The/The";
import About from "./Component/About/About";
import Contact from "./Component/Сontact/Contact";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function App() {

  useEffect(() => {
    const timeLine = gsap.timeline();

    timeLine
      // box_animated harakati
      .to(".box_animated", {
        bottom: "100%",
        duration: 0.7,
        ease: "power2.out",
      })
      .to(".box_animated", {
        y: -70,
        duration: 0.7,
        delay: 1,
        ease: "power2.out",
      })
      // box_animated1 harakati
      .to(
        ".box_animated1",
        {
          bottom: "100%",
          duration: 0.7,
          ease: "power2.out",
        },
        "<"
      )
      .to(".box_animated1", {
        y: -80,
        duration: 0.7,
        delay: 1,
        ease: "power2.out",
      })
      // box_animated1 tugagandan so'ng TheBox harakati boshlanadi
      .to(
        ".TheBox",
        {
          bottom: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
        },
        "+=0.5" // box_animated1 tugaganidan keyin
      )
      // TheBox left: -100% ga o'tadi
      .to(".TheBox", {
        left: "-100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".app",
          start: "1% top",
          end: "12% top+=60%",
          scrub: 2,
        },
      })
      .fromTo(".footer_animation", {
        opacity: 0,
      },{
        opacity: 1,
        duration: 0.5,
      }, "+=0.5")
      .fromTo(
        ".big-animation_container",
        { xPercent: 100 }, // boshlang'ich xolati
        {
          xPercent: -80, // oxirgi xolati
          scrollTrigger: {
            trigger: ".app",
            start: "top 280%",
            end: "bottom bottom",
            scrub: 2,
            markers: true
          },
        }, "<")
  }, []);
  return (
    <Router>
      <div className="app">
        <div className="content">
          <div className="header">
            <Navbar />
          </div>
          <div className="textBox">
            <div className="animate_start">
              <div className="box_animated">
                <We />
              </div>
              <div className="box_animated1">
                <Just />
              </div>
            </div>
          </div>
            <div className="box_animated2">
              <div className="TheBox">
                <The />
              </div>
            </div>
          <div className="big-animation_container">
            <div className="box_animated3" id="about">
              <About />
            </div>
            <div className="box_animated4">
              <Chart />
            </div>
            <div className="box_animated5">
              <Aircraft />
            </div>
            <div className="box_animated6">
              <Concierge />
            </div>
            <div className="box_animated7">
              <RequestForm />
            </div>
            <div className="box_animated8">
              <Contact />
            </div>
          </div>
        </div>
        <div className="footer_animation">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
