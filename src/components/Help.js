import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import "../content/scss/modal.scss";

export default class Help extends React.Component {
  render() {
    return (
      <div className={"modal"}>
        <div className={"modal__header"}>
          <h1>Помощь</h1>
          <Spinner />
        </div>
        <div className={"modal__content"}>
          <p>Добро пожаловать в игру! </p>
          <p>
            {" "}
            В этом сервисе вы можете вырастить себе питомца. Перед Вами ваш
            новый друг такса - {this.props.name}.
          </p>
          <p>
            {" "}
            Следите за жизнью вашего друга: играйте, лечите, мойте, кормите,
            спите вместе с ним, и он будет счастлив!
            <p>Как начать играть:</p>
            <p>
              1. Вам нужно ухаживать за питомцем, для этого следите за четырьмя
              показателями счастья, и не дайте им снизиться до нуля.
            </p>
            <p>
              2. Перейдите в соответствующую комнату, нажав на показатель и
              выполните доступные действия, чтобы улучшить состояние питомца.
            </p>
            <p>
              3. Вы всегда можете вернуться в гостиную комнату и поиграть с
              питомцем. Для этого нажмите на кнопку «Гостиная» на верхней панели
              и «Играть».
            </p>
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="button_about">
              <Link to={"/about"} style={{ color: "#ffffff" }}>
                Подробнее
              </Link>
            </div>

            <div
              className="button-close"
              onClick={() => {
                this.setState({ exit: false });
                this.props.hideModal();
              }}
            >
              OK
            </div>
          </div>
        </div>
      </div>
    );
  }
}
