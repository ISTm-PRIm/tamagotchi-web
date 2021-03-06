import React from "react";
import { Link } from "react-router-dom";
import { Question, SignOut, Pause, Play, Home } from "../content/Icons";
import Modal from "./Modal";
import Help from "./Help";
import "../content/scss/header.scss";
import { ACCESS_TOKEN } from "../scripts/constants";

class FunctionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowHelp: false };
  }
  render() {
    return (
      <div className={"wrapper"}>
        <Modal isShowModal={this.state.isShowHelp}>
          <Help
            name={this.props.name}
            hideModal={() => {
              this.setState({ isShowHelp: false });
            }}
          />
        </Modal>

        <div className={"menu-room"}>
          {console.log("value", this.props)}
          <h3>{this.props.name}</h3>
          <div
            className={"btn-action button pulse"}
            onClick={() => {
              this.props.click(this.props.button.state);
            }}
          >
            {this.props.button.icon}
          </div>
        </div>

        <div className={"menu-left"}>
          <div
            className={"music-btn"}
            onClick={() => {
              this.props.music();
            }}
          >
            {this.props.play ? <Play /> : <Pause />}
          </div>
          <Link className={"music-btn"} to={`/home?room=livingroom`}>
            <Home />
          </Link>
        </div>

        <div className={"menu-right"}>
          <div
            className={"help-btn"}
            onClick={() => {
              this.setState({ isShowHelp: true });
            }}
          >
            <Question />
          </div>
          <div
            className={"help-btn"}
            onClick={() => {
              localStorage.removeItem(ACCESS_TOKEN);
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
