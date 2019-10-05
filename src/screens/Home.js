import React from "react";
import Pet from "../components/Pet";
import home from "../images/home.jpg";
import hello from "../content/pet/RIP.json";
import FunctionMenu from "../components/FunctionMenu";
import { AngleRight, AngleLeft } from "../content/Icons";

const Home = () => {
  return (
    <div>
      <FunctionMenu
        value={{ health: 100, hygiene: 60, food: 40, sleep: 20 }}
        nameRoom={"Тестовая комната"}
      />
      <div
        style={{
          position: "fixed",
          display: "flex",
          top: 120,
          left: 0,
          width: "100%",

          backgroundImage: `url(${home})`,
          webkitBackgroundSize: "100%",
          paddingTop: "15%",
          paddingBottom: "15%"
        }}
      >
        <div
          style={{
            paddingLeft: 20,
            paddingRight: 20
          }}
        >
          <div
            style={{
              padding: 15,
              paddingLeft: 25,
              paddingRight: 28,
              borderRadius: 40,
              backgroundColor: "#ffffff"
            }}
          >
            <AngleLeft />
          </div>
        </div>
        <Pet img={hello} />
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <div
            style={{
              padding: 15,
              paddingLeft: 28,
              paddingRight: 25,
              borderRadius: 40,
              backgroundColor: "#ffffff"
            }}
          >
            <AngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
