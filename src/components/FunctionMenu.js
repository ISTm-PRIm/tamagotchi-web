import React from "react";
import LifeBar from "./LifeBar";
import { Question } from "../content/Icons";
const FunctionMenu = props => {
  return (
    <div>
      <div
        style={
          {
            // paddingTop: 10,
            // paddingBottom: 10,
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "space-between",
            // backgroundColor: "#fbfbfb"
          }
        }
      >
        <div
          style={
            {
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "space-between",
              // flex: 1,
              // paddingLeft: 50,
              // paddingRight: 50
            }
          }
        >
          <div>
            <LifeBar
              color={props.value.health > 25 ? "#2dbd63" : "#e2503d"}
              value={props.value.health}
              nameValue={"Здоровье"}
            />
          </div>
          <div>
            <LifeBar
              color={props.value.hygiene > 20 ? "#007AFF" : "#e2503d"}
              value={props.value.hygiene}
              nameValue={"Гигиена"}
            />
          </div>
          <div style={{ justifyContent: "center" }}>
            <div>
              <h3
                style={{
                  fontFamily: "GraphikLCG-Semibold",
                  textAlign: "center"
                }}
              >
                {props.nameRoom}
              </h3>
            </div>

            <div>Функциональная кнопка</div>
          </div>
          <div>
            <LifeBar
              color={props.value.food > 20 ? "#ffb400" : "#e2503d"}
              value={props.value.food}
              nameValue={"Питание"}
            />
          </div>
          <div>
            <LifeBar
              color={props.value.sleep > 20 ? "#ce84e1" : "#e2503d"}
              value={props.value.sleep}
              nameValue={"Сон"}
            />
          </div>
        </div>
      </div>
      <div style={{ padding: 10 }}>
        <div
          style={{
            padding: 10,
            backgroundColor: "azure",
            borderRadius: 3,
            border: "1px solid"
          }}
        >
          <Question />
        </div>
        <div style={{}}>Выход из аккаунта</div>
      </div>
    </div>
  );
};

export default FunctionMenu;
