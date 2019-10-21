import React from "react";

export default function LoginButton(props) {
  return (
    <div
      className="login_button"
      style={{
        backgroundColor: `${props.color}`
      }}
      onClick={() => {
        props.onClick();
      }}
    >
      <div>{props.icon}</div>
      <div className="line" />
      <div className="margin_auto">{props.name}</div>
    </div>
  );
}
