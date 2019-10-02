import React from "react";
import Pet from "./components/Pet";
import home from "../images/home.jpeg";
import hello from "../images/Anim.tgs.json";
import LifeBar from "./components/LifeBar";
const Home = () => {
  return (
    <div
      style={{
        // width: "100%",
        height: "100%",
        backgroundImage: `url(${home})`,
        webkitBackgroundSize: "100%"
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat"
      }}
    >
      <Pet img={hello} />{" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white"
        }}
      >
        <div style={{ paddingLeft: 20 }}>
          <h3 style={{ fontFamily: "GraphikLCG-Semibold" }}>
            Наименование комнаты
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <LifeBar />
          <LifeBar />
          <LifeBar />
          <LifeBar />
        </div>

        <div style={{ paddingRight: 20 }}>Бар</div>
      </div>
    </div>
  );
};

export default Home;
