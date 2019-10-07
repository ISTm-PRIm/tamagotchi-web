import React from "react";

export default function Modal(props) {
  return (
    <div
      style={{
        ...style.fonModal,
        display: props.isShowModal ? "flex" : "none"
      }}
    >
      <div style={style.locationWindow}>{props.children}</div>
    </div>
  );
}

const style = {
  fonModal: {
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    bottom: 0,
    zIndex: 1
  },

  locationWindow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1
  }
};
