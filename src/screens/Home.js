import React from "react";

import Pet from "../components/Pet";
import home from "../content/images/home.jpg";
import hello from "../content/pet/Hello.json";
import sleep from "../content/pet/Sleep.json";
import dead from "../content/pet/RIP.json";
import eat from "../content/pet/Eat.json";
import bath from "../content/pet/Bathroom.json";
import bad from "../content/pet/Bad.json";
import goodBoy from "../content/pet/Create.json";
import r from "../content/pet/Anim.json";
import test from "../content/audio/test.mp3";
import { Bath, Bed, Heartbeat, Utensils } from "../content/Icons";
import FunctionMenu from "../components/FunctionMenu";
import { getParameterFromUrl, randomInteger } from "../scripts/scripts";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petState: "HELLO",
      petValue: {
        health: randomInteger(0, 100),
        hygiene: randomInteger(0, 100),
        food: randomInteger(0, 100),
        sleep: randomInteger(0, 100)
      }
    };
    // this.audio = new Audio(test);
  }

  getPetImage(state) {
    switch (state) {
      case "HELLO":
        return goodBoy;
      case "SLEEP":
        return sleep;
      case "DEAD":
        return dead;
      case "EAT":
        return eat;
      case "BATH":
        return bath;
      case "BAD":
        return bad;
      case "HEARTBEAT":
        return r;
      case "CREATE":
        return hello;
      default:
        return hello;
    }
  }

  componentDidMount() {
    if (this.state.petValue.health === 0) {
      this.setState({ petState: "DEAD" });
    } else {
      if (
        this.state.petValue.health <= 25 ||
        this.state.petValue.hygiene <= 20 ||
        this.state.petValue.food <= 20 ||
        this.state.petValue.sleep <= 20
      ) {
        this.setState({ petState: "BAD" });
      }
    }
    //getData()
    // this.audio.play();
  }

  componentDidUpdate() {
    if (this.state.petValue.health === 0 && this.state.petState !== "DEAD") {
      this.setState({ petState: "DEAD" });
    }
  }

  render() {
    let roomInfo = getRoomInfoByName();
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
          value={this.state.petValue}
          nameRoom={roomInfo.name}
          button={roomInfo.button}
          click={state => {
            this.setState({ petState: state });
          }}
        />
        <Pet img={this.getPetImage(this.state.petState)} />
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
        state: "SLEEP"
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
        state: "BATH"
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
        state: "EAT"
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
        state: "HEARTBEAT"
      }
    }
  };

  return rooms[name] || rooms.bedroom;
};

//Уложить спать
// Кормить
//  Купать
