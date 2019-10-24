import React from "react";
import { Link } from "react-router-dom";
import Pet from "../components/Pet";
import InputWithLength from "../components/CustomInput";
import goodBoy from "../content/pet/Create.json";
import fon from "../content/images/sign_in_fone.jpg";
import { createPet } from "../scripts/api";
import "../index.css";

export default class CreatePet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = async event => {
    event.preventDefault();

    if (this.state.name.length >= 3) {
      const data = await createPet({
        name: this.state.name,
        password: "cookie.idUser"
      });

      if (data.error) {
        alert(data.message);
      } else {
        document.location.href = "/home?room=livingroom";
      }
    } else {
      this.setState({
        email: this.state.email,
        password: this.state.password
      });
      alert("Вы ввели не корректные данные для создания питомца");
    }
  };

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          position: "absolute",
          backgroundImage: `url(${fon})`,
          WebkitBackgroundSize: "100%",
          width: "100%",
          height: "100%"
        }}
      >
        <div style={{ ...style.display, ...style.indent }}>
          <div style={style.form}>
            <form
              onSubmit={this.handleSubmit}
              style={{
                ...style.display,
                background: "rgba(255,255,255,1)",
                flexWrap: "wrap",
                borderRadius: 20,
                padding: "20px 20px 20px 20px",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(0,0,0,0.25)"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%"
                }}
              >
                <InputWithLength
                  styleDiv={{
                    paddingTop: 10,
                    paddingBottom: 5,
                    width: 420
                  }}
                  maxLength={10}
                  minLength={3}
                  placeholder={"Кличка питомца"}
                  state={this.state.name}
                  onChange={event => {
                    this.setState({ name: event.target.value });
                  }}
                />
                <Pet height={200} width={200} img={goodBoy} />
              </div>
              <div
                style={{
                  width: "100%",
                  ...style.display,
                  flexWrap: "wrap"
                }}
              >
                <Link
                  style={{
                    ...style.display,
                    ...style.button,
                    textDecoration: "none",
                    alignItems: "center",
                    backgroundColor: "#007AFF",
                    color: "rgba(255,255,255,1)"
                  }}
                  to={`/home?room=${"bedroom"}`}
                >
                  Создать
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  link: {
    display: "block",
    margin: 10,
    textAlign: "center"
  },
  namePage: {
    paddingTop: 30,
    textAlign: "center",
    fontSize: 27,
    fontFamily: "GraphikLCG-Semibold"
  },
  display: {
    display: "flex"
  },
  indent: {
    position: "absolute",
    width: "100%",
    height: "100%",
    // paddingTop: 145,
    // paddingBottom: 145,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    justifyContent: "center",
    width: "100%",
    height: 50,
    borderRadius: 3
  },
  form: {
    // width: 380,
    borderRadius: 3,
    padding: 30
  },
  linkPass: {
    color: "#007AFF",
    justifyContent: "center",
    width: "100%"
  },
  fon: {
    paddingTop: 60
  }
};
