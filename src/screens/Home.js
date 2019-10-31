import React from "react";
import { Link } from "react-router-dom";
import Pet from "../components/Pet";

import home from "../content/images/home.jpg";
import bathroom from "../content/images/bathroom.jpg";
import bedroom from "../content/images/bedroom.jpg";
import hospital from "../content/images/hospital.jpg";
import kitchen from "../content/images/kitchen.jpg";

import hello from "../content/pet/Hello.json";
import sleep from "../content/pet/Sleep.json";
import dead from "../content/pet/RIP.json";
import eat from "../content/pet/Eat.json";
import bath from "../content/pet/Bathroom.json";
import bad from "../content/pet/Bad.json";
import goodBoy from "../content/pet/Create.json";
import r from "../content/pet/Anim.json";

import music from "../content/audio/music.mp3";
import { Bath, Bed, Heartbeat, Utensils } from "../content/Icons";
import FunctionMenu from "../components/FunctionMenu";
import { getParameterFromUrl, randomInteger } from "../scripts/scripts";
import NavigationMap from "../components/NavigationMap";
import Modal from "../components/Modal";
import LifebarLeft from "../components/lifebar-left";
import LifebarRight from "../components/lifebar-right";
import Spinner from "../components/Spinner";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      musicOn: false,
      petState: "HELLO",
      petValue: {
        health: 0,
        hygiene: randomInteger(0, 100),
        food: randomInteger(0, 100),
        sleep: randomInteger(0, 100)
      }
    };

    try {
      this.audio = new Audio(music);
    } catch (error) {
      console.log("audio error -", error);
    }
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
      this.setState({
        petState: "DEAD",
        petValue: {
          health: 0,
          hygiene: 0,
          food: 0,
          sleep: 0
        }
      });
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
    this.setState({ musicOn: true });
    this.audio.play();
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
      <div className={'container'}
        style={{
          position: "fixed",
          backgroundImage: `url(${roomInfo.img})`,
          WebkitBackgroundSize: "100%",
          width: "100%",
          height: "100%"
        }}
      >
        <div className={'header'}>
          <FunctionMenu
            value={this.state.petValue}
            nameRoom={roomInfo.name}
            button={roomInfo.button}
            click={state => {
              this.setState({ petState: state });
            }}
            music={() => {
              this.setState({ musicOn: !this.state.musicOn });
              if (this.state.musicOn) {
                this.audio.play();
              } else {
                this.audio.pause();
              }
            }}
            play={this.state.musicOn}
          />
        </div>

        <div className={'content'}>
          <div className={'lifebar-left'}>
            <LifebarLeft value={this.state.petValue}
                         nameRoom={roomInfo.name}
                         button={roomInfo.button}
                         click={state => {
                           this.setState({ petState: state });
                         }}/>
          </div>

          <div className={'pet-area'}>
            <Pet
              height={500}
              width={500}
              img={this.getPetImage(this.state.petState)}
            />
            {this.state.petValue.health === 0 ? (
              <Modal isShowModal={'true'}>
                <Link
                  className="active_button"
                  to={"/create_pet"}
                >
                  Создать нового питомца
                </Link>
              </Modal>
            ) : null}
          </div>

          <div className={'lifebar-right'}>
            <LifebarRight value={this.state.petValue}
                         nameRoom={roomInfo.name}
                         button={roomInfo.button}
                         click={state => {
                           this.setState({ petState: state });
                         }}/>
          </div>
        </div>

        <div className={'navbar'}>
          <NavigationMap />
        </div>

      </div>
    );
  }
}

const getRoomInfoByName = (name = "bedroom") => {
  const rooms = {
    livingroom: {
      name: "Гостинная",
      img: home,
      button: {
        icon: (
          <>
            <Bed /> | Играть
          </>
        ),
        state: "PLAY"
      }
    },
    bedroom: {
      name: "Спальня",
      img: bedroom,
      button: {
        icon: (
          <>
            <Bed /> Уложить спать
          </>
        ),
        state: "SLEEP"
      }
    },
    bath: {
      name: "Ванная",
      img: bathroom,
      button: {
        icon: (
          <>
            <Bath /> Купать
          </>
        ),
        state: "BATH"
      }
    },
    kitchen: {
      name: "Кухня",
      img: kitchen,
      button: {
        icon: (
          <>
            <Utensils /> Кормить
          </>
        ),
        state: "EAT"
      }
    },
    hospital: {
      name: "Больница",
      img: hospital,
      button: {
        icon: (
          <>
            <Heartbeat /> Лечить
          </>
        ),
        state: "HEARTBEAT"
      }
    }
  };

  return rooms[name] || rooms.bedroom;
};
