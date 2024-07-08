import React from "react";

import fire from "../../Assets/Svg/fireframe.svg";
import frame from "../../Assets/Svg/Frame.svg";
import group1 from "../../Assets/Svg/Group 31.svg";
import group2 from "../../Assets/Svg/Group 31 (1).svg";
import group3 from "../../Assets/Svg/Group 31 (2).svg";
import group4 from "../../Assets/Svg/Group 31 (3).svg";
import group5 from "../../Assets/Svg/Group 31 (4).svg";

import "./inform.scss";
function Inform() {
  return (
    <div className="information">
      <div className="first_section">
        <div>
          <section>
            <img src={fire} alt="" />
          </section>
          <section>
            <h1>10 дней</h1>
            <h2>Победный режим</h2>
          </section>
        </div>
        <div>
          <section>
            <img src={frame} alt="" />
          </section>
          <section>
            <h1>234</h1>
            <h2>Пройдено тестов</h2>
          </section>
        </div>
      </div>
      <div className="second_section">
        <section>
          <h1>Основная информация</h1>
        </section>
        <section>
          <div>
            <p>Имя пользователя</p>
            <h1>mr_yarkima</h1>
          </div>
          <div>
            <p>Имя</p>
            <h1>Виктор</h1>
          </div>
        </section>
        <section>
          <div>
            <p>Email</p>
            <h1>mr_yarkima@gmail.com</h1>
          </div>
          <div>
            <p>Номер телефона</p>
            <h1>+7 900 780 10 32</h1>
          </div>
        </section>
      </div>
      <div className="third_section">
        <section>
          <h1>Дополнительная информация</h1>
        </section>
        <section>
          <div>
            <p>Семейное положение</p>
            <h1>Женат</h1>
          </div>
          <div>
            <p>Количество детей</p>
            <h1>2</h1>
          </div>
        </section>
      </div>
      <div className="fourth_section">
        <div>
          <h1>Достижения</h1>
          <h2>Все</h2>
        </div>
        <div>
          <section>
            <img src={group1} alt="" />
            <h1>Полиглот</h1>
          </section>
          <section>
            <img src={group2} alt="" />
            <h1>Мудрец</h1>
          </section>
          <section>
            <img src={group3} alt="" />
            <h1>Маг</h1>
          </section>
          <section>
            <img src={group4} alt="" />
            <h1>Энтузиаст</h1>
          </section>
          <section>
            <img src={group5} alt="" />
            <h1>Пророк</h1>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Inform;
