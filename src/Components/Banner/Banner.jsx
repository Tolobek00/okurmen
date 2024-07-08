import React from "react";
import card from "../../Assets/image/CardHexagon.png"

import "./banner.scss";
import { useNavigate } from "react-router-dom";

function Banner() {

  const navigate = useNavigate()

  function goToPages(Link) {
    navigate (Link)
  }
  return (
    <div className="banner">
      <img className="animation" src={card} alt="" />
      <img className="animation" src={card} alt="" />
      <img className="animation" src={card} alt="" />
      <div className="back-font">
        <div className="texts">
          <h1>Легко осваивайте сложные предметы с помощью карточек и тестов</h1>
          <p>
            Присоединяйтесь к ученикам по всему миру, которые используют
            карточки, основанные на научных принципах, чтобы достигать своих
            целей в школе, университете и за их пределами.
          </p>
          <div className="container-btn">
            <button onClick={() => goToPages("/login")}>Начать бесплатно</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
