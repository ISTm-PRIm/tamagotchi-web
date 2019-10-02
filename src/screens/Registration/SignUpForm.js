import React from "react";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", fio: "", password: "", secondPassword: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async event => {
    event.preventDefault();
    // if (
    //   this.state.fio.length !== 0 &&
    //   this.state.password.length >= 12 &&
    //   this.state.password === this.state.secondPassword
    // ) {
    //   const data = await createUser(this.getToken(), {
    //     avatarUrl: "",
    //     fullName: this.state.fio,
    //     password: this.state.password
    //   });
    //   if (data.error) {
    //     alert(data.message);
    //   } else {
    //     const signIn = await login({
    //       email: this.state.email,
    //       password: this.state.password
    //     });
    //     if (signIn.error) {
    //       alert(signIn.message);
    //     } else {
    //       cookie.load("token").profile.role === "ADMIN"
    //         ? (document.location.href = "/feed/social_network?page=1")
    //         : (document.location.href = "/shop");
    //     }
    //   }
    // } else {
    //   alert("Не корректные для регистрации в системе.");
    // }
  };

  getToken = () => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var vars = url.searchParams.get("token");
    return vars;
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    // const data = await getInvite(this.getToken());
    // if (data.error) {
    //   alert("Вам не отправлялось письмо с данными для регистрации");
    // } else {
    //   this.setState({
    //     email: data.email
    //   });
    // }
  };
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
          style={{
            width: "100%",
            marginBottom: 10
          }}
        ></div>
        <div
          style={{
            width: "100%",
            marginBottom: 10
          }}
        >
          <input
            type="text"
            placeholder="e-mail"
            className="input"
            value={this.state.fio}
            onChange={event => {
              this.setState({
                fio: event.target.value
              });
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            marginBottom: 10
          }}
        >
          <input
            type="password"
            placeholder="Пароль"
            className="input"
            value={this.state.password}
            onChange={event => {
              this.setState({
                password: event.target.value
              });
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            marginBottom: 14
          }}
        >
          <input
            className="input"
            type="password"
            placeholder="Повторите пароль"
            value={this.state.secondPassword}
            onChange={event => {
              this.setState({
                secondPassword: event.target.value
              });
            }}
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
            className="input"
            style={{
              ...style.display,
              ...style.button,
              backgroundColor: "#007AFF",
              color: "rgba(255,255,255,1)"
            }}
            type="submit"
            value="Зарегистрироваться"
          />
        </div>
      </form>
    );
  }
}

export default SignUpForm;

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
