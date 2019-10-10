import React from "react";
import { Link } from "react-router-dom";
import LifeBar from "./LifeBar";
import { Question, SignOut } from "../content/Icons";
import Modal from "./Modal";
import Help from "./Help";
import { BLUE, YELLOW, RED, GREEN, PURPLE } from "../content/color";
import NavigationMap from "./NavigationMap";

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
              {this.props.nameRoom}
            </h3>

            <div
              style={style.button}
              onClick={() => {
                this.props.button.click();
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
        <NavigationMap />
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
              this.setState({ isShowHelp: true });
            }}
          >
            <Question />
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
    // margin: 10,
    padding: 10,
    backgroundColor: "azure",
    borderRadius: 20,
    border: "1px solid"
  }
};
