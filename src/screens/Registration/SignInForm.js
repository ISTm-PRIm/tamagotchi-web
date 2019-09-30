import React from "react";
import { Link } from "react-router-dom";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isActive() {
    return this.state.email.length !== 0 && this.state.password.length !== 0
      ? true
      : false;
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
      password: this.state.password
    });
  }

  handleChangePassword(event) {
    this.setState({
      email: this.state.email,
      password: event.target.value
    });
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
          flexWrap: "wrap",
          borderRadius: 20,
          padding: 20,
          boxShadow: "0 0 15px rgba(0,0,0,0.25)"
        }}
      >
        <div
          data-validate="Username is required"
          style={{
            width: "100%",
            marginBottom: 10
          }}
        >
          <input
            id="email"
            type="text"
            placeholder="E-mail"
            className="input"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </div>
        <div
          data-validate="Password is required"
          style={{
            width: "100%",
            marginBottom: 14
          }}
        >
          <input
            id="pass"
            className="input"
            type="password"
            placeholder="Пароль"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </div>

        <div
          style={{
            width: "100%",
            ...style.display,
            flexWrap: "wrap"
          }}
        >
          <input
            className="login"
            style={{
              ...style.display,
              ...style.button,
              backgroundColor: "#007AFF",
              color: "rgba(255,255,255,1)"
            }}
            type="submit"
            value="Войти"
          />
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
