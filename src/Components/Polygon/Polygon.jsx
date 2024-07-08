import React from "react";

import polygon from "../../Assets/Svg/Polygon_svgfor.svg";
import avatar from "../../Assets/Svg/AVATAR reviews.svg";
import remove from "../../Assets/Svg/Remove.svg";

import { useNavigate, Link } from "react-router-dom";
import "./polygon.scss";
import star from "../../Assets/Svg/star yellow.svg"

function Polygon() {

  const navigate = useNavigate() 

  function goToPages (Link) {
    navigate (Link)
  }


  return (
    <div className="polygon-container">
      <div className="polygon">
        <img src={polygon} alt="" />
        <section className="avatar-name">
          <img src={avatar} alt="" />
          <h1>gingerbread</h1>
        </section>
        <section className="title-polygon">
          <h1>Саморазвитие и самопознание</h1>
        </section>
        <div>
          <section>
            <h1>32 карточки</h1>
          </section>
          <section>
            <img src={star} alt="" />
            <h1>4.9 (24)</h1>
          </section>
        </div>
        <section className="button">
          <button onClick={() => goToPages("editLanguage")}>Перейти к курсу</button>
        </section>
        <section className="remove">
          <img src={remove} alt="" />
        </section>
      </div>
    </div>
  );
}

export default Polygon;
