import React from "react";
import { Link } from "react-router-dom";
import { GREEN, RED, BLUE } from "../content/color";
import LifeCircle from "./LifeCircle";

class LifebarLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"wrapper"}>
        <Link to={`/home?room=hospital`}>
          <LifeCircle
            value={this.props.value.health}
            nameValue={"Здоровье"}
            color={this.props.value.health > 25 ? GREEN : RED}
          />
        </Link>

        <Link to={`/home?room=bath`}>
          <LifeCircle
            value={this.props.value.hygiene}
            nameValue={"Гигиена"}
            color={this.props.value.hygiene > 20 ? BLUE : RED}
          />
        </Link>
      </div>
    );
  }
}

export default LifebarLeft;
