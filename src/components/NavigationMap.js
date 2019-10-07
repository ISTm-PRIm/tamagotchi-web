import React from "react";
import { Link } from "react-router-dom";
import { Bath, Bed, Heartbeat, Utensils } from "../content/Icons";
export default function NavigationMap() {
  return (
    <div
      style={{
        border: "1px solid",
        margin: "0px 10px 0px 0px",
        padding: 5
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/home?room=bath`}
        >
          <div style={style.button}>
            <Bath /> | Ванная
          </div>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/home?room=kitchen`}
        >
          <div style={style.button}>
            <Utensils /> | Кухня
          </div>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/home?room=bedroom`}
        >
          <div style={style.button}>
            <Bed /> | Спальня
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/home?room=hospital`}
        >
          <div style={style.button}>
            <Heartbeat /> | Больница
          </div>
        </Link>
      </div>
    </div>
  );
}

const style = {
  button: {
    textDecoration: "none",
    padding: 10,
    backgroundColor: "azure",
    borderRadius: 20,
    border: "1px solid"
  }
};
