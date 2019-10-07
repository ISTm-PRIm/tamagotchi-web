import React from "react";

export default class Help extends React.Component {
  render() {
    return (
      <div style={style.window}>
        <h1>Помощь</h1>
        <div style={{ paddingTop: 20, paddingBottom: 20 }}>ТЕКСТ СПРАВКИ</div>

        <div style={{ justifyContent: "flex-end", display: "flex" }}>
          <div>
            <p
              style={{
                ...style.display,
                ...style.button,
                backgroundColor: "#007AFF",
                color: "white"
              }}
              onClick={() => {
                this.setState({ exit: false });
                this.props.hideModal();
              }}
            >
              OK
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  fon: {
    paddingTop: 60
  },
  link: {
    display: "block",
    margin: 10,
    textAlign: "center"
  },
  namePage: {
    textAlign: "center",
    fontSize: 27,
    fontFamily: "GraphikLCG-Semibold",
    color: "rgba(255,255,255,1)",
    display: "block"
  },
  display: {
    display: "flex"
  },
  indent: {
    width: "100%",
    height: "100%",
    paddingTop: 145,
    paddingBottom: 145,
    justifyContent: "center"
  },
  button: {
    padding: "10px 20px 10px 20px",
    borderRadius: 5
  },
  form: {
    width: 380,
    background: "rgba(255,255,255,1)",
    borderRadius: 3,
    padding: 30
  },
  linkPass: {
    color: "#007AFF",
    justifyContent: "center",
    width: "100%"
  },
  window: {
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 5,
    width: 480
  }
};
