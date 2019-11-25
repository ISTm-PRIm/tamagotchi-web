import React from "react";
import fon from "../content/images/sign_in_fone.jpg";
import bar from "../content/images/about/bar.png";
import eat from "../content/images/about/eat.png";
import hosp from "../content/images/about/hosp.png";
import bath from "../content/images/about/bath.png";
import sleep from "../content/images/about/sleep.png";
import home from "../content/images/about/home.png";
import play from "../content/images/about/play.png";
import music from "../content/images/about/music.png";
import logout from "../content/images/about/logout.png";
import { WHITE } from "../content/color";

export default class About extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          backgroundImage: `url(${fon})`,
          WebkitBackgroundSize: "100%",
          padding: 50
        }}
      >
        <div
          style={{
            border: "1px solid",
            borderColor: "rgba(0,0,0,0.25)",
            borderRadius: 5,
            padding: 10,
            backgroundColor: WHITE,
            boxShadow: "0 0 15px rgba(0,0,0,0.35)"
          }}
        >
          <div className={"header"} style={{ textAlign: "center" }}>
            <h1>Добро пожаловать в игру!</h1>
          </div>

          <div>
            <p>
              В этом сервисе вы можете вырастить себе питомца и нового друга.
            </p>
            <p>
              Следите за жизнью вашего друга: играйте, лечите, мойте, кормите,
              спите вместе с ним, и он будет счастлив!
            </p>
            <h3 style={{ textAlign: "center" }}>Как начать играть:</h3>
            <p>
              1. Вам нужно ухаживать за питомцем, для этого следите за четырьмя
              показателями счастья, и не дайте им снизиться до нуля.
            </p>
            <div className="about_img">
              <div />
              <div>
                <img src={bar} alt="" width={200} />
              </div>
              <div />
            </div>
            <p>
              2. Перейдите в соответствующую комнату, нажав на показатель и
              выполните доступные действия, чтобы улучшить состояние питомца:
              <ul>
                <li>
                  Нажав на питание вы переходите в комнату «Кухня» и нажмите
                  соответствующую кнопку «Кормить»
                  <div className="about_img">
                    <div />
                    <div>
                      <img src={eat} alt="" width={200} />
                    </div>
                    <div />
                  </div>
                </li>
                <li>
                  Нажав на здоровье вы переходите в комнату «Больница» и нажмите
                  соответствующую кнопку «Лечить»
                  <div className="about_img">
                    <div />
                    <div>
                      <img src={hosp} alt="" width={200} />
                    </div>
                    <div />
                  </div>
                </li>
                <li>
                  Нажав на гигиену вы переходите комнату «Ванная» и нажмите
                  соответствующую кнопку «Купать»
                  <div className="about_img">
                    <div />
                    <div>
                      <img src={bath} alt="" width={200} />
                    </div>
                    <div />
                  </div>
                </li>
                <li>
                  Нажав на сон вы переходите комнату «Спальня» и нажмите
                  соответствующую кнопку «Уложить спать»
                  <div className="about_img">
                    <div />
                    <div>
                      <img src={sleep} alt="" width={200} />
                    </div>
                    <div />
                  </div>
                </li>
              </ul>
            </p>
            <p>
              3. Вы всегда можете вернуться в гостиную комнату и поиграть с
              питомцем. Для этого нажмите на кнопку «Гостиная»{" "}
              <img src={home} alt="" width={35} /> на верхней панели и «Играть».
              <div className="about_img">
                <div />
                <div>
                  <img src={play} alt="" width={200} />
                </div>
                <div />
              </div>
            </p>
            <p>
              4. Чтобы включить или отключить музыку приложения нажмите
              соответствующую кнопку на верхней панели.
              <img src={music} alt="" width={75} />
            </p>
            <p>
              5. Для выхода из игры нажмите соответствующую кнопку «Выход» на
              верхней панели.
              <img src={logout} alt="" width={35} />
            </p>
            <h3 style={{ textAlign: "center" }}>Будьте внимательны!</h3>
            <p>
              Когда здоровье вашего питомца упадет до нуля он умрет. Чтобы этого
              не произошло следите за показателями.{" "}
            </p>
            <h5 style={{ textAlign: "center" }}>Питание.</h5>{" "}
            <p>
              Каждые 15 минут снимается единица. При достижении отметки в 20
              каждое снижение будет влиять на здоровье, снимая с него единицу.
              При полностью заполненной графе показателя возможность кормежки
              отсутствует.
            </p>
            <h5 style={{ textAlign: "center" }}>Гигиена.</h5>{" "}
            <p>
              Каждый час снимается единица гигиены. При достижении отметки в 20
              каждое снижение будет влиять на здоровье, снимая с него единицу.
              При полностью заполненной графе показателя возможность
              отсутствует.
            </p>{" "}
            <h5 style={{ textAlign: "center" }}>Сон.</h5>{" "}
            <p>
              Каждые 30 минут снимается единица сна. При достижении отметки в 20
              каждое снижение будет влиять на здоровье, снимая с него единицу.
              Если значение показателя больше 25% отправить питомца спать
              нельзя.
            </p>{" "}
            <h5 style={{ textAlign: "center" }}>Здоровье.</h5>
            <p>
              Полностью зависит от других показателей. Каждый день есть
              вероятность, что ваш питомец заболеет. При значении других
              показателей 20% возможность лечения отсутствует.
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}
