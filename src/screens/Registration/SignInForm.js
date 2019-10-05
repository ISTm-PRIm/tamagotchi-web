import React from "react";
import { Link } from "react-router-dom";
import { Google } from "../../content/Icons";

class SignInForm extends React.Component {
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
        <p style={{ fontFamily: "GraphikLCG-Semibold", textAlign: "center" }}>
          {window.location.href.indexOf("sign_in") !== -1
            ? "Авторизация"
            : "Регистрация"}
        </p>
        <div
          style={{
            width: "100%",
            ...style.display,
            flexWrap: "wrap",
            paddingBottom: 10
          }}
        >
          <div
            style={{
              backgroundColor: "red",
              display: "flex",
              padding: 10,
              borderRadius: 5,
              width: "100%"
            }}
          >
            <div>
              <Google />
            </div>
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
              Google
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            ...style.display,
            flexWrap: "wrap"
          }}
        >
          {window.location.href.indexOf("sign_in") !== -1 ? (
            <div
              style={{
                ...style.display,
                ...style.button,
                textDecoration: "none",
                alignItems: "center",
                backgroundColor: "#007AFF",
                marginBottom: 10
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgba(255,255,255,1)"
                }}
                to={"/sign_up"}
              >
                Регистрация
              </Link>
            </div>
          ) : null}

          <Link
            style={{
              ...style.display,
              ...style.button,
              textDecoration: "none",
              alignItems: "center",
              backgroundColor: "#007AFF",
              color: "rgba(255,255,255,1)"
            }}
            to={"/tamagotchiHome"}
          >
            Тестовая комната
          </Link>
        </div>
      </form>
    );
  }
}

export default SignInForm;

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
    justifyContent: "center",
    width: "100%",
    height: 50,
    borderRadius: 3
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
  }
};
