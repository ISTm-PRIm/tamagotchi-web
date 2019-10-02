import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import RadialSeparators from "./RadialSeparators";
import "react-circular-progressbar/dist/styles.css";

const LifeBar = () => {
  return (
    <div style={{ width: 100, height: "auto" }}>
      <CircularProgressbarWithChildren
        value={80}
        text={`${80}%`}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "butt"
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
    </div>
  );
};

export default LifeBar;
