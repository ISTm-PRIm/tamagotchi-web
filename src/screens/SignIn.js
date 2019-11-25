import React from "react";
// import { Link } from "react-router-dom";

import { Input } from "../components/CustomInput";
import { Facebook } from "../content/Icons";
import fon from "../content/images/sign_in_fone.jpg";
import { FacebookColor, WHITE } from "../content/color";
import "../index.css";
import { login, getCurrentUser, signup } from "../scripts/api";
import {
  ACCESS_TOKEN,
  FACEBOOK_AUTH_URL,
  FACEBOOK_AUTH_URL_PROD
} from "../scripts/constants";

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
      const userData = await getCurrentUser();

      if (!userData.pet) {
        this.props.history.push("/create_pet");
        return;
      }

      this.props.history.push("/home?room=livingroom");
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
          <div className="form">
            <form
              onSubmit={this.handleSubmit}
              style={{
                ...style.display,
                background: WHITE,
                flexWrap: "wrap",
                borderRadius: 20,
                padding: "20px 20px 10px 20px",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(0,0,0,0.25)"
              }}
            >
              <div style={{ width: "100%" }}>
                <Input
                  maxLength={100}
                  minLength={5}
                  placeholder={"Email"}
                  state={this.state.email}
                  onChange={event => {
                    this.setState({ email: event.target.value });
                  }}
                />
                <Input
                  maxLength={20}
                  minLength={5}
                  type={"password"}
                  placeholder={"Пароль"}
                  state={this.state.password}
                  onChange={event => {
                    this.setState({ password: event.target.value });
                  }}
                />
                {this.state.isSignUp && (
                  <Input
                    maxLength={50}
                    minLength={5}
                    placeholder={"Name"}
                    state={this.state.name}
                    onChange={event => {
                      this.setState({ name: event.target.value });
                    }}
                  />
                )}

                {this.state.isSignUp ? (
                  <div
                    className="sign_in_up_button"
                    onClick={this.createNewUser}
                  >
                    Регистрация
                  </div>
                ) : (
                  <div className="sign_in_up_button" onClick={this.signIn}>
                    Авторизация
                  </div>
                )}

                {this.state.isSignUp ? (
                  <div
                    className="sign_in_up_button"
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
                    className="sign_in_up_button"
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div style={{ borderBottom: 1 }} />
                <p
                  style={{
                    fontFamily: "GraphikLCG-Semibold",
                    textAlign: "center"
                  }}
                >
                  Или войти через
                </p>
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

                <a
                  className="login_button"
                  href={
                    process.env.NODE_ENV === "production"
                      ? FACEBOOK_AUTH_URL_PROD
                      : FACEBOOK_AUTH_URL
                  }
                  style={{
                    backgroundColor: FacebookColor
                  }}
                >
                  <Facebook />
                  <div className="line" />
                  <div className="margin_auto">Facebook</div>
                </a>
              </div>
              {/* <div
                style={{
                  width: "100%",
                  ...style.display,
                  flexWrap: "wrap"
                }}
              >
                <Link
                  className="sign_in_up_button"
                  to={`/home?room=livingroom`}
                >
                  Тестовая комната
                </Link>
              </div> */}
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

  indent: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  display: {
    display: "flex"
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
