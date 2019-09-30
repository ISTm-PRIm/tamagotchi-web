import React from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import "../../index.css";

function Link(props) {
  return (
    <a href={props.link || "/"} style={style.link}>
      {props.text}
    </a>
  );
}

function BodyPage(props) {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "rgba(255,255,255,1)",
        width: "100%",
        height: "100%"
      }}
    >
      <div style={style.fon}>
        <p style={style.namePage}>Тамагочи "Ветерок"</p>
        <div style={{ ...style.display, ...style.indent }}>
          <div style={style.form}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export function SignInPage() {
  return (
    <BodyPage>
      <SignInForm />
    </BodyPage>
  );
}

export function SignUpPage() {
  return (
    <BodyPage>
      <SignUpForm />
    </BodyPage>
  );
}

const style = {
  fon: {
    paddingTop: 30
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
    // color: "rgba(255,255,255,1)",
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
