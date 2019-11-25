import React from "react";
import { Link } from "react-router-dom";
import Pet from "../components/Pet";
import Spinner from "../components/Spinner";
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
import { getParameterFromUrl } from "../scripts/scripts";
import NavigationMap from "../components/NavigationMap";
import Modal from "../components/Modal";
import LifebarLeft from "../components/lifebar-left";
import LifebarRight from "../components/lifebar-right";
import { getPet, getCurrentUser, petAction } from "../scripts/api";
import { ACCESS_TOKEN } from "../scripts/constants";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      musicOn: false,
      petState: "HELLO",
      name: null,
      petValue: {
        health: null,
        hygiene: null,
        food: null,
        sleep: null
      }
    };

    try {
      this.audio = new Audio(music);
    } catch (error) {
      console.log("audio error -", error);
    }
  }

  async getData() {
    const user = await getCurrentUser();

    console.log("user", user);
    let data = await getPet({ petId: "" });
    if (data.error) {
      alert("Ошибка соединения. Попробуйте позже");
    } else {
      if (data.pet.isAlive) {
        this.setState(
          {
            name: data.pet.name,
            petValue: {
              health: data.pet.healthIndicator,
              hygiene: data.pet.cleanIndicator,
              food: data.pet.foolIndicator,
              sleep: data.pet.sleepIndicator
            }
          },
          this.isBad()
        );
      } else {
        this.setState({
          petState: "DEAD",
          petValue: {
            health: 0,
            hygiene: 0,
            food: 0,
            sleep: 0
          }
        });
      }
    }
  }

  isBad() {
    const { petValue } = this.state;
    if (
      petValue.health <= 25 ||
      petValue.hygiene <= 20 ||
      petValue.food <= 20 ||
      petValue.sleep <= 20
    ) {
      this.setState({ petState: "BAD" });
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

  setPetValue = ({ pet }) => {
    this.setState({
      name: pet.name,
      petValue: {
        health: pet.healthIndicator,
        hygiene: pet.cleanIndicator,
        food: pet.foolIndicator,
        sleep: pet.sleepIndicator
      }
    });
  };
  async componentDidMount() {
    this.setState({ musicOn: false });

    if (!localStorage.getItem(ACCESS_TOKEN)) {
      this.props.history.push("/sign_in");
      return;
    }

    const user = await getCurrentUser();

    if (!user.pet) {
      this.props.history.push("/create_pet");
      return;
    }

    const { pet } = user;

    this.setPetValue({ pet });
  }

  actionPet = async ({ roomInfo, state }) => {
    this.setState({ petState: state });
    const result = await petAction({ action: roomInfo.button.action });

    this.setPetValue({ pet: result.pet });
  };

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

    if (!this.state.petValue) {
      return <Spinner />;
    }

    return (
      <div
        className={"container"}
        style={{
          position: "fixed",
          backgroundImage: `url(${roomInfo.img})`,
          WebkitBackgroundSize: "100%",
          width: "100%",
          height: "100%"
        }}
      >
        <div className={"header"}>
          <FunctionMenu
            value={this.state.petValue}
            name={this.state.name}
            button={roomInfo.button}
            click={state => {
              this.actionPet({ roomInfo, state });
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

        <div className={"content"}>
          <div className={"lifebar-left"}>
            <LifebarLeft
              value={this.state.petValue}
              nameRoom={roomInfo.name}
              button={roomInfo.button}
              click={state => {
                this.setState({ petState: state });
              }}
            />
          </div>

          <div className={"pet-area"}>
            <Pet
              height={500}
              width={500}
              img={this.getPetImage(this.state.petState)}
            />
            {this.state.petValue.health === 0 ? (
              <Modal isShowModal={"true"}>
                <Link className="active_button" to={"/create_pet"}>
                  Создать нового питомца
                </Link>
              </Modal>
            ) : null}
          </div>

          <div className={"lifebar-right"}>
            <LifebarRight
              value={this.state.petValue}
              nameRoom={roomInfo.name}
              button={roomInfo.button}
              click={state => {
                this.setState({ petState: state });
              }}
            />
          </div>
        </div>

        <div className={"navbar"}>
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
        state: "PLAY",
        action: "PLAY"
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
        state: "SLEEP",
        action: "SLEEP"
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
        state: "BATH",
        action: "BATH"
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
        state: "EAT",
        action: "FEED"
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
        state: "HEARTBEAT",
        action: "TREAT"
      }
    }
  };

  return rooms[name] || rooms.bedroom;
};
// PLAY, FEED, BATH, SLEEP, TREAT
