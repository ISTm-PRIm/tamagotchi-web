import React from "react";
import { Link } from "react-router-dom";
import { Google, Facebook, VK } from "../content/Icons";
import LoginButton from "../components/LoginButton";
import fon from "../content/images/sign_in_fone.jpg";
import { VKColor, FacebookColor, GoogleColor } from "../content/color";
import "../index.css";

export default class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = async event => {
    event.preventDefault();

    // if (this.state.email.length !== 0 && this.state.password.length !== 0) {
    //   const data = await login({
    //     email: this.state.email,
    //     password: this.state.password
    //   });

    //   if (data.error) {
    //     alert(data.message);
    //   } else {
    //     cookie.load("token").profile.role === "ADMIN"
    //       ? (document.location.href = "/feed/social_network?page=1")
    //       : (document.location.href = "/shop");
    //   }
    // } else {
    //   this.setState({
    //     email: this.state.email,
    //     password: this.state.password
    //   });
    //   alert("Вы не ввели данные для авторизации в системе.");
    // }
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
        {/* <p style={style.namePage}>Тамагочи "Ветерок"</p> */}
        <div style={{ ...style.display, ...style.indent }}>
          <div className="form">
            <form
              onSubmit={this.handleSubmit}
              style={{
                ...style.display,
                background: "rgba(255,255,255,1)",
                flexWrap: "wrap",
                borderRadius: 20,
                padding: "0px 20px 20px 20px",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(0,0,0,0.25)"
              }}
            >
              <p
                style={{
                  fontFamily: "GraphikLCG-Semibold",
                  textAlign: "center"
                }}
              >
                Войти через ...
              </p>
              <div
                style={{
                  width: "100%",
                  ...style.display,
                  flexWrap: "wrap",
                  paddingBottom: 10
                }}
              >
                <LoginButton
                  icon={<Google />}
                  name={"Google"}
                  color={GoogleColor}
                />
                <LoginButton icon={<VK />} name={"Вконтакте"} color={VKColor} />
                <LoginButton
                  icon={<Facebook />}
                  name={"Facebook"}
                  color={FacebookColor}
                />
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
                  to={`/home?room=livingroom`}
                >
                  Тестовая комната
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
    width: 380,
    borderRadius: 3,
    padding: 20
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
