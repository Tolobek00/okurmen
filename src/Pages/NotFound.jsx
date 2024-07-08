import React, { useState } from "react";
import "./notFound.scss";
import { Link, useNavigate } from "react-router-dom";

import star from "../Assets/Svg/Property 1=Variant3.svg";
import star2 from "../Assets/Svg/star yellow.svg";
import vector from "../Assets/Svg/Vector (3).svg";
import vectors from "../Assets/Svg/Frame 6331.svg";

function NotFound() {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  function goToPages(Link) {
    navigate(Link);
  }

  // function openMenu() {
  //   setActive(!active);
  // }
  return (
    <div className="not-found">
      <h1>Not Found 404</h1>
      <p>
        Посещенная вами страница не найдена. Вы можете перейти на домашнюю
        страницу.
      </p>
      <section>
        <button onClick={() => goToPages("/")}>Вернуться на главную страницу</button>
      </section>
      <div>
        <img src={star2} alt="" />
        <img src={star2} alt="" />
        <img src={star} alt="" />
        <img src={star2} alt="" />
        <img src={star2} alt="" />
      </div>
    </div>
  );
}

export default NotFound;
