import React from "react";

import avatar from "../../Assets/Svg/PIC (5).svg";
import avatar1 from "../../Assets/Svg/Avatar.svg";
import avatar2 from "../../Assets/Svg/PIC (4).svg";

import "./autors.scss";
import { useNavigate } from "react-router-dom";

function Autors() {

  const navigate = useNavigate ();

  function goToPages (Link) {
    navigate (Link)
  }
  return (
    <div className="autors container">
      <div className="title">
        <h1>Лучшие авторы</h1>
      </div>
      <div className="autor-blogs">
        <section className="blog1" onClick={() => goToPages("/profile")}>
          <div className="user">
            <div>
              <img src={avatar} alt="" />
            </div>
            <h1>gingerbread</h1>
          </div>
          <div className="text">
            <div>
              <h2>65 тестов</h2>
            </div>
            <div>
              <h2>1 курс</h2>
            </div>
          </div>
        </section>
        <section className="blog1" onClick={() => goToPages("/profile")}>
          <div className="user">
            <div>
              <img src={avatar1} alt="" />
            </div>
            <h1>gingerbread</h1>
          </div>
          <div className="text">
            <div>
              <h2>61 тест</h2>
            </div>
            <div>
              <h2>2 курса</h2>
            </div>
          </div>
        </section>
        <section className="blog1" onClick={() => goToPages("/profile")}>
          <div className="user">
            <div>
              <img src={avatar2} alt="" />
            </div>
            <h1>gingerbread</h1>
          </div>
          <div className="text">
            <div>
              <h2>125 тестов</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Autors;
