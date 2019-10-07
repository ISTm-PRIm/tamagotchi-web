import React from "react";
import Pet from "../components/Pet";
import home from "../content/images/home.jpg";
import hello from "../content/pet/Hello.json";
import { Bed } from "../content/Icons";
import FunctionMenu from "../components/FunctionMenu";

const getParameterFromUrl = param => {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var vars = url.searchParams.get(param);
  return vars;
};

const Home = () => {
  console.log("id", getParameterFromUrl("room"));
  return (
    <div
      style={{
        position: "fixed",
        backgroundImage: `url(${rooms[`${getParameterFromUrl("room").toString()}`].img})`,
        webkitBackgroundSize: "100%",
        width: "100%",
        height: "100%"
      }}
    >
      <FunctionMenu
        value={{ health: 100, hygiene: 60, food: 40, sleep: 20 }}
        nameRoom={rooms[`${getParameterFromUrl("room").toString()}`].name}
      />
      <Pet img={hello} />
    </div>
  );
};

export default Home;

const rooms = {
  bedroom: { name: "Спальня", img: home, icon: <Bed />, click: () => {} },
  bath: { name: "Ванная", img: home, icon: <Bed />, click: () => {} },
  kitchen: { name: "Кухня", img: home, icon: <Bed />, click: () => {} },
  hospital: { name: "Больница", img: home, icon: <Bed />, click: () => {} }
};

{
  /* <div style={{ paddingLeft: 20, paddingRight: 20 }}>
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
        </div> */
}
{
  /* <div
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
        </div> */
}
