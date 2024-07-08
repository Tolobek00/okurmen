import React from "react";

import Star from "../../Assets/Svg/Star";
import avatar1 from "../../Assets/Svg/PIC (6).svg";
import avatar2 from "../../Assets/Svg/AVATAR (1).svg";
import avatar3 from "../../Assets/Svg/AVATAR (2).svg";
import avatar4 from "../../Assets/Svg/PIC (7).svg";

import "./comments.scss"

function Comments() {
  return (
    <div className="comments container">
      <h1 className="reviews_h1">Отзывы</h1>
      <div className="comments_blog">
        <div className="section_comment">
          <div>
            <section>
              <img src={avatar1} alt="" />
            </section>
            <section>
              <h1>Jules</h1>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Star key={index} fill={star <= 5 ? "#FFAD33" : "gray"} />
                ))}
              </div>
            </section>
          </div>
          <div>
            <p>
              Отличный курс, приехала учиться в Москву из Аргентины, решила
              попробовать Yarkima, спасибо автору курса и площадке за такой
              способ обучения!
            </p>
          </div>
        </div>
        <div className="section_comment">
          <div>
            <section>
              <img src={avatar2} alt="" />
            </section>
            <section>
              <h1>Виктор</h1>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Star key={index} fill={star <= 3 ? "#FFAD33" : "gray"} />
                ))}
              </div>
            </section>
          </div>
          <div>
            <p>
              Раньше я часто откладывал подготовку к тестам на потом, а иногда и
              совсем не готовился к ним. Но учеба с YaKimA мне не в тягость,
              потому что это очень эффективный способ подготовки к урокам и
              экзаменам!
            </p>
          </div>
        </div>
        <div className="section_comment">
          <div>
            <section>
              <img src={avatar3} alt="" />
            </section>
            <section>
              <h1>Екатерина</h1>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Star key={index} fill={star <= 4 ? "#FFAD33" : "gray"} />
                ))}
              </div>
            </section>
          </div>
          <div>
            <p>
              Мне 53 года, и я решила пойти учиться в магистратуру. YaKiMa
              облегчает подготовку к урокам, делает ее более интересной, и
              помогает мне чувствовать себя уверенно. Я получаю высшие баллы по
              всем тестам! Спасибо, YaKiMa!
            </p>
          </div>
        </div>
        <div className="section_comment">
          <div>
            <section>
              <img src={avatar4} alt="" />
            </section>
            <section>
              <h1>July</h1>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Star key={index} fill={star <= 4 ? "#FFAD33" : "gray"} />
                ))}
              </div>
            </section>
          </div>
          <div>
            <p>
              Отличный курс, приехала учиться в Москву из Аргентины, решила
              попробовать Yarkima, спасибо автору курса и площадке за такой
              способ обучения!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
