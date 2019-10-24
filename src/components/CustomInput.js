import React from "react";

export default function InputWithLength(props) {
  return (
    <div className="inputWrapper">
      <input
        maxLength={props.maxLength}
        type={"text"}
        placeholder={props.placeholder}
        className="input"
        value={props.state}
        onChange={props.onChange}
      />
      <div className="inputCounter input">
        <p>{props.maxLength - props.state.length}</p>
      </div>
    </div>
  );
}
