import React from "react";

import user1 from "../../Assets/Svg/PIC.svg";
import user2 from "../../Assets/Svg/PIC (1).svg";
import user3 from "../../Assets/Svg/PIC (2).svg";
import star from "../../Assets/Svg/star.svg";

import "./recommend.scss";
function Recommend() {
  return (
    <div className="recommend container">
      <div className="title">
        <h1>Рекомендуем</h1>
      </div>
      <div className="blogs">
        <section>
          <div className="nameUser">
            <img src={user1} alt="" />
            <h1>gingerbread</h1>
          </div>

          <div className="star">
            <div>
              <h4>32 карточки</h4>
            </div>
            <img src={star} alt="" />
            <h2>4.9</h2>
            <h3>(24)</h3>
          </div>
          <h1 className="userName">Личностный рост</h1>
        </section>
        <section>
          <div className="nameUser">
            <img src={user2} alt={star} />
            <h1>mercoly12</h1>
          </div>

          <div className="star">
            <div>
              <h4>32 карточки</h4>
            </div>
            <img src={star} alt="" />
            <h2>4.9</h2>
            <h3>(24)</h3>
          </div>
          <h1 className="userName">Русский язык</h1>
        </section>
        <section>
          <div className="nameUser">
            <img src={user3} alt="" />
            <h1>friedgie</h1>
          </div>

          <div className="star">
            <div>
              <h4>32 карточки</h4>
            </div>
            <img src={star} alt="" />
            <h2>4.9</h2>
            <h3>(24)</h3>
          </div>
          <h1 className="userName">Информатика</h1>
        </section>
      </div>
    </div>
  );
}

export default Recommend;
