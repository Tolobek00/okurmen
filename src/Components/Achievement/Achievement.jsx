import React from "react";

import achi1 from "../../Assets/Svg/achi1.svg";
import achi2 from "../../Assets/Svg/achi2.svg";
import achi3 from "../../Assets/Svg/achi3.svg";

import rec6 from "../../Assets/Svg/Rectangle 6.svg";
import rec7 from "../../Assets/Svg/Rectangle 7.svg";
import rec8 from "../../Assets/Svg/Rectangle 8.svg";
import rec9 from "../../Assets/Svg/Rectangle 9.svg";

import "./achievement.scss";

function Achievement() {
  return (
    <div className="achievement container">
      <div className="blog_section">
        <div className="first_blog">
          <section className="first_section">
            <h1>Достижения в этом курсе</h1>
            <h2>Все</h2>
          </section>
          <section className="icons">
            <div className="icon">
              <img src={achi1} alt="" />
              <h1>Полиглот</h1>
            </div>
            <div className="icon">
              <img src={achi2} alt="" />
              <h1>Мудрец</h1>
            </div>
            <div className="icon">
              <img src={achi3} alt="" />
              <h1>Энтузиаст</h1>
            </div>
          </section>
        </div>
        <div className="second_blog">
          <section>
            <h1>Описание</h1>
            <h2>Развернуть</h2>
          </section>
          <section>
            <p>
              Язык восточнославянской группы славянской ветви индоевропейской
              языковой семьи, национальный язык русского народа. Является одним
              из наиболее распространённых языков мира — восьмым среди всех
              языков мира по общей численности говорящих и седьмым по
              численности владеющих им как родным. Русский является также самым
              распространённым славянским я...
            </p>
          </section>
        </div>
      </div>
      <div className="tall_section">
        <div className="about_course">
          <h1>О курсе</h1>
        </div>
        <div className="bottom_section">
          <section>
            <p>Тип курса</p>
            <h1>Квиз</h1>
          </section>
          <section>
            <div>
              <p>Время на прохождение</p>
              <h1>≈ 30 мин.</h1>
            </div>
            <div>
              <p>Возрастной ценз</p>
              <h1>12+</h1>
            </div>
          </section>
          <section>
            <div>
              <p>Теги</p>
            </div>
            <div>
              <section>Общение</section>
              <section>Языки</section>
              <section>Развитие</section>
            </div>
          </section>
          <section>
            <img src={rec6} alt="" />
            <img src={rec7} alt="" />
            <img src={rec8} alt="" />
            <img src={rec9} alt="" />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
