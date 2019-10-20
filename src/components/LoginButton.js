import React from "react";

export default function LoginButton(props) {
  return (
    <div
      style={{
        backgroundColor: `${props.color}`,
        display: "flex",
        padding: 10,
        borderRadius: 5,
        width: "100%",
        marginBottom: 5
      }}
    >
      <div>{props.icon}</div>
      <div
        style={{
          backgroundColor: "#ffffff",
          paddingLeft: 1,
          marginRight: 10,
          marginLeft: 10
        }}
      />
      <div
        style={{
          color: "#ffffff",
          fontFamily: "GraphikLCG-Medium",
          margin: "auto"
        }}
      >
        {props.name}
      </div>
    </div>
  );
}
