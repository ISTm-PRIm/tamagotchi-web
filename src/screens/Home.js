import React from "react";

import Pet from "../components/Pet";
import home from "../content/images/home.jpg";
import hello from "../content/pet/Hello.json";
import { Bath, Bed, Heartbeat, Utensils } from "../content/Icons";
import FunctionMenu from "../components/FunctionMenu";

const getParameterFromUrl = param => {
  let urlString = window.location.href;
  let url = new URL(urlString);
  let vars = url.searchParams.get(param);
  return vars;
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { petState: "HELLO" };
  }

  render() {
    let roomInfo = getRoomInfoByName();
    console.log("props", this.props);
    if (getParameterFromUrl("room")) {
      roomInfo = getRoomInfoByName(getParameterFromUrl("room").toString());
    }

    return (
      <div
        style={{
          position: "fixed",
          backgroundImage: `url(${roomInfo.img})`,
          WebkitBackgroundSize: "100%",
          width: "100%",
          height: "100%"
        }}
      >
        <FunctionMenu
          value={{ health: 100, hygiene: 60, food: 40, sleep: 20 }}
          nameRoom={roomInfo.name}
          button={roomInfo.button}
        />
        <Pet img={hello} />
      </div>
    );
  }
}

const getRoomInfoByName = (name = "bedroom") => {
  const rooms = {
    bedroom: {
      name: "Спальня",
      img: home,
      button: {
        icon: (
          <>
            <Bed /> | Уложить спать
          </>
        ),
        click: () => {}
      }
    },
    bath: {
      name: "Ванная",
      img: home,
      button: {
        icon: (
          <>
            <Bath /> | Купать
          </>
        ),
        click: () => {}
      }
    },
    kitchen: {
      name: "Кухня",
      img: home,
      button: {
        icon: (
          <>
            <Utensils /> | Кормить
          </>
        ),
        click: () => {}
      }
    },
    hospital: {
      name: "Больница",
      img: home,
      button: {
        icon: (
          <>
            <Heartbeat /> | Лечить
          </>
        ),
        click: () => {}
      }
    }
  };

  return rooms[name] || rooms.bedroom;
};
