import React from "react";
import paw from "../content/images/paw.svg";

const wrapper = {
    display: "flex",
    justifyContent: "center",
};

export default function Spinner() {
    return (
        <div style={wrapper} className={'wrapper'}>
            <img className={'paw'} alt="paw" src={paw}/>
        </div>
    );
}