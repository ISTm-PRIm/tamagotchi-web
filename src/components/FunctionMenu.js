import React from "react";
import { Question, SignOut } from "../content/Icons";
import Modal from "./Modal";
import Help from "./Help";
import '../content/css/header.scss';

class FunctionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowHelp: false };
  }
  render() {
    return (
      <div className={'wrapper'}>
        <Modal isShowModal={this.state.isShowHelp}>
          <Help
            hideModal={() => {
              this.setState({ isShowHelp: false });
            }}
          />
        </Modal>

        <div className={'menu-room'}>
            <h3>{this.props.nameRoom}</h3>
            <div className={'btn-action button pulse'}
              onClick={() => {
                this.props.click(this.props.button.state);
              }}
            >
              {this.props.button.icon}
            </div>
        </div>

        <div className={'menu-right'}>
          <div className={'help-btn'}
            onClick={() => {
              this.setState({ isShowHelp: true });
            }}
          >
            <Question />
          </div>
          <div className={'sign-out'}
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