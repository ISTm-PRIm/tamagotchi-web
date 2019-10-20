import React from "react";
import '../content/css/life-circle.scss';

const LifeCircle = props => {
    let strokeDasharray = props.value + ", 100";
    console.log('in lifecircle' + JSON.stringify(props));
    return (
            <div className="single-chart">
                <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path className="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className="circle"
                          strokeDasharray={strokeDasharray}
                          stroke={props.color}
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="percentage">{props.value}%</text>
                </svg>
                <p>{props.nameValue}</p>
            </div>
    );
};

export default LifeCircle;