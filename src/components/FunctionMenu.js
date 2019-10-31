import React from "react";
import { Link } from "react-router-dom";
import LifeBar from "./LifeBar";
import { Question, SignOut, Pause, Play, Home } from "../content/Icons";
import Modal from "./Modal";
import Help from "./Help";
import { BLUE, YELLOW, RED, GREEN, PURPLE, ORANGE } from "../content/color";

class FunctionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowHelp: false };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#ffffff"
        }}
      >
        <Modal isShowModal={this.state.isShowHelp}>
          <Help
            hideModal={() => {
              this.setState({ isShowHelp: false });
            }}
          />
        </Modal>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flex: 1,
            paddingLeft: 50,
            paddingRight: 50
          }}
        >
          {/* <div>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/home?room=livingroom`}
            >
              <LifeBar
                color={this.props.value.mood > 20 ? ORANGE : RED}
                value={this.props.value.mood}
                nameValue={"Настроение"}
              />
            </Link>
          </div> */}
          <div>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/home?room=hospital`}
            >
              <LifeBar
                color={this.props.value.health > 25 ? GREEN : RED}
                value={this.props.value.health}
                nameValue={"Здоровье"}
              />
            </Link>
          </div>
          <div>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/home?room=bath`}
            >
              <LifeBar
                color={this.props.value.hygiene > 20 ? BLUE : RED}
                value={this.props.value.hygiene}
                nameValue={"Гигиена"}
              />
            </Link>
          </div>
          <div style={{ justifyContent: "center" }}>
            <h3
              style={{
                fontFamily: "GraphikLCG-Semibold",
                textAlign: "center"
              }}
            >
              {"Тестовый питомец"}
              {/* {this.props.nameRoom} Coocie*/}
            </h3>

            <div
              style={style.button}
              onClick={() => {
                this.props.click(this.props.button.state);
              }}
            >
              {this.props.button.icon}
            </div>
          </div>
          <div>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/home?room=kitchen`}
            >
              <LifeBar
                color={this.props.value.food > 20 ? YELLOW : RED}
                value={this.props.value.food}
                nameValue={"Питание"}
              />
            </Link>
          </div>
          <div>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/home?room=bedroom`}
            >
              <LifeBar
                color={this.props.value.sleep > 20 ? PURPLE : RED}
                value={this.props.value.sleep}
                nameValue={"Сон"}
              />
            </Link>
          </div>
        </div>
        <div
          style={{
            border: "1px solid",
            padding: 5,
            margin: "0px 10px 0px 0px"
          }}
        >
          <div
            style={style.button}
            onClick={() => {
              this.props.music();
            }}
          >
            {this.props.play ? <Play /> : <Pause />}
          </div>
          <div
            style={style.button}
            onClick={() => {
              this.setState({ isShowHelp: true });
            }}
          >
            <Question />
          </div>
          <div
            style={style.button}
            onClick={() => {
              document.location.href = `/home?room=livingroom`;
            }}
          >
            <Home />
          </div>
          <div
            style={style.button}
            onClick={() => {
              document.location.href = `/sign_in`;
            }}
          >
            <SignOut />
          </div>
        </div>
      </div>
    );
  }
}

export default FunctionMenu;

const style = {
  button: {
    padding: 10,
    backgroundColor: "azure",
    borderRadius: 20,
    border: "1px solid"
  }
};
