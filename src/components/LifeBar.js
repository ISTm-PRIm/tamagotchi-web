import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import RadialSeparators from "./RadialSeparators";
import "react-circular-progressbar/dist/styles.css";

const LifeBar = props => {
  return (
    <div style={{ width: 75, height: "auto" }}>
      <CircularProgressbarWithChildren
        value={props.value}
        text={`${props.value}%`}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "butt",
          pathColor: props.color,
          textColor: props.color
        })}
      >
        <RadialSeparators
          count={12}
          style={{
            background: "#fff",
            width: "2px",
            height: `${10}%`
          }}
        />
      </CircularProgressbarWithChildren>
      <p
        style={{
          textAlign: "center",
          fontFamily: "GraphikLCG-Medium",
          fontSize: 14,
          margin: 0,
          marginTop: 10
        }}
      >
        {props.nameValue}
      </p>
    </div>
  );
};

export default LifeBar;
