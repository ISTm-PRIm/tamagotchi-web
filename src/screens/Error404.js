import React from "react";
import Pet from "../components/Pet";
import fon from "../content/images/sign_in_fone.jpg";
import hello from "../content/pet/Search.json";

const Error404 = () => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundImage: `url(${fon})`,
        WebkitBackgroundSize: "100%",
        display: "block",
        width: "100%",
        height: "100%"
      }}
    >
      <div
        style={{
          margin: "auto",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <div style={{ backgroundColor: "#ffffff" }}>
          <h1 style={{ textAlign: "center", fontSize: 80 }}>404</h1>
          <p style={{ textAlign: "center", fontSize: 25 }}>
            Данного контента не существует
          </p>
        </div>
        <Pet img={hello} />
      </div>
    </div>
  );
};
export default Error404;
