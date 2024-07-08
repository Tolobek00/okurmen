import React from "react";

import avatar1 from "../../Assets/Svg/AVATAR reviews.svg"
import avatar2 from "../../Assets/Svg/AVATAR reviews2.svg"
import avatar3 from "../../Assets/Svg/avatar reviews3.svg"

import "./reviews.scss";

function Reviews() {
  return (
    <div className="reviews">
      <div className="title">
        <h1>Отзывы учеников</h1>
      </div>
      <div className="review-blogs">
        <div className="blog">
          <img src={avatar1} alt="" />
          <p>
            Раньше я часто откладывал подготовку к тестам на потом, а иногда и
            совсем не готовился к ним. Но учеба с YaKimA мне не в тягость,
            потому что это очень эффективный способ подготовки к урокам и
            экзаменам!
          </p>
          <h3>Виктор</h3>
          <h5>22 года, IT специалист</h5>
        </div>
        <div className="blog">
          <img src={avatar2} alt="" />
          <p>
            Я ОБОЖАЮ YaKiMa! Я рекомендую его всем своим друзьям. Я использовала
            YaKiMa для подготовки к экзаменам, и он мне очень помог. Это был
            поистине интерактивный способ обучения, и мне было интересно изучать
            материал!
          </p>
          <h3>Екатерина</h3>
          <h5>18 лет, студент</h5>
        </div>
        <div className="blog">
          <img src={avatar3} alt="" />
          <p>
            Мне 53 года, и я решила пойти учиться в магистратуру. YaKiMa
            облегчает подготовку к урокам, делает ее более интересной, и
            помогает мне чувствовать себя уверенно. Я получаю высшие баллы по
            всем тестам! Спасибо, YaKiMa!
          </p>
          <h3>Наталья</h3>
          <h5>53 года, студент</h5>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
