import React from "react";
import SignInForm from "./SignInForm";
import fon from "../../content/images/sign_in_fone.jpg";
import "../../index.css";

export default function SignInPage() {
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
      <p style={style.namePage}>Тамагочи "Ветерок"</p>
      <div style={{ ...style.display, ...style.indent }}>
        <div style={style.form}>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

const style = {
  link: {
    display: "block",
    margin: 10,
    textAlign: "center"
  },
  namePage: {
    padding: 30,

    textAlign: "center",
    fontSize: 27,
    fontFamily: "GraphikLCG-Semibold"
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
    width: 380
  },
  linkPass: {
    color: "#007AFF",
    justifyContent: "center",
    width: "100%"
  }
};
