import React from "react";
import { Link } from "react-router-dom";

import InputWithLength from "../components/CustomInput";
import { Facebook } from "../content/Icons";
import LoginButton from "../components/LoginButton";
import fon from "../content/images/sign_in_fone.jpg";
import { FacebookColor } from "../content/color";
import "../index.css";
import { login, getCurrentUser, signup } from "../scripts/api";
import { ACCESS_TOKEN } from "../scripts/constants";

export default class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", name: "", isSignUp: false };
  }

  signIn = async () => {
    const { email, password } = this.state;
    if (email.length === 0 || password.length === 0) {
      alert("Вы не ввели данные для авторизации в системе.");
      return;
    }

    try {
      const response = await login({ email, password });
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      alert("You're successfully logged in!");
      const userData = await getCurrentUser();

      if (!userData.pet) {
        this.props.history.push("/create_pet");
        return;
      }

      this.props.history.push("/");
    } catch (error) {
      alert(
        (error && error.message) ||
          "Oops! Something went wrong. Please try again!"
      );
    }
  };

  createNewUser = async event => {
    event.preventDefault();
    const { email, password, name } = this.state;
    if (email.length === 0 || password.length === 0 || name.length === 0) {
      alert("Вы не ввели данные для авторизации в системе.");
      return;
    }

    try {
      const response = await signup({ email, password, name });
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      console.log("response", response);
      await this.signIn();
    } catch (error) {
      alert(
        (error && error.message) ||
          "Oops! Something went wrong. Please try again!"
      );
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
              <div>
                <InputWithLength
                  styleDiv={{
                    paddingTop: 10,
                    paddingBottom: 5,
                    width: 420
                  }}
                  maxLength={100}
                  minLength={5}
                  placeholder={"Email"}
                  state={this.state.email}
                  onChange={event => {
                    this.setState({ email: event.target.value });
                  }}
                />
                <InputWithLength
                  styleDiv={{
                    paddingTop: 10,
                    paddingBottom: 5,
                    width: 420
                  }}
                  maxLength={100}
                  minLength={5}
                  placeholder={"password"}
                  state={this.state.password}
                  onChange={event => {
                    this.setState({ password: event.target.value });
                  }}
                />
                {this.state.isSignUp && (
                  <InputWithLength
                    styleDiv={{
                      paddingTop: 10,
                      paddingBottom: 5,
                      width: 420
                    }}
                    maxLength={100}
                    minLength={5}
                    placeholder={"Name"}
                    state={this.state.name}
                    onChange={event => {
                      this.setState({ name: event.target.value });
                    }}
                  />
                )}

                {this.state.isSignUp ? (
                  <div onClick={this.createNewUser}>Регистрация</div>
                ) : (
                  <div onClick={this.signIn}>Авторизация</div>
                )}

                {this.state.isSignUp ? (
                  <div
                    onClick={() => {
                      this.setState({
                        isSignUp: false
                      });
                    }}
                  >
                    Авторизация
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      this.setState({
                        isSignUp: true
                      });
                    }}
                  >
                    Создать новый аккаунт
                  </div>
                )}
              </div>
              <div
                style={{
                  width: "100%",
                  ...style.display,
                  flexWrap: "wrap",
                  paddingBottom: 10
                }}
              >
                {/* <LoginButton
                  icon={<Google />}
                  name={"Google"}
                  color={GoogleColor}
                /> */}
                {/* <LoginButton icon={<VK />} name={"Вконтакте"} color={VKColor} /> */}
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
