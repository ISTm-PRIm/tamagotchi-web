import React from "react";
import { Link } from "react-router-dom";
import { Bath, Bed, Heartbeat, Utensils } from "../content/Icons";
export default function NavigationMap() {
  return (
    <div className={"navbar_content"}>
      <Link to={`/home?room=bath`}>
        <div className={"button"}>
          <Bath />
          <span className={"button_text"}>Ванная</span>
        </div>
      </Link>

      <Link to={`/home?room=kitchen`}>
        <div className={"button"}>
          <Utensils />
          <span className={"button_text"}>Кухня</span>
        </div>
      </Link>

      <Link to={`/home?room=bedroom`}>
        <div className={"button"}>
          <Bed />
          <span className={"button_text"}>Спальня</span>
        </div>
      </Link>

      <Link to={`/home?room=hospital`}>
        <div className={"button"}>
          <Heartbeat />
          <span className={"button_text"}>Больница</span>
        </div>
      </Link>
      {/* <Link to={`/home?room=hospital`}>
        <div className={"button"}>
          <Heartbeat />
          <span className={"button_text"}>Больница</span>
        </div>
      </Link> */}
    </div>
  );
}
