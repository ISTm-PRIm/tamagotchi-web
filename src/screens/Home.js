import React from "react";
import Pet from "../components/Pet";
import home from "../content/images/home.jpg";
import hello from "../content/pet/Hello.json";
import { Bath, Bed, Heartbeat, Utensils } from "../content/Icons";
import FunctionMenu from "../components/FunctionMenu";

const getParameterFromUrl = param => {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var vars = url.searchParams.get(param);
  return vars;
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { petState: "HELLO" };
  }
  render() {
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
          button={rooms[`${getParameterFromUrl("room").toString()}`].button}
        />
        <Pet img={hello} />
      </div>
    );
  }
}

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
