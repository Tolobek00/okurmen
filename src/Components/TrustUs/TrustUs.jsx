import React from "react";

import vk from "../../Assets/Svg/vk icon.svg";
import sberbank from "../../Assets/Svg/sberbank icon.svg";
import yandex from "../../Assets/Svg/yandex icon.svg";
import skilbox from "../../Assets/Svg/skilbox icon.svg";

import "./trustUs.scss";
import { Link } from "react-router-dom";

function TrustUs() {
  return (
    <div className="trustUs container">
      <div className="title">
        <h1>Нам доверяют</h1>
      </div>
      <div className="apps">
        <div className="blogs vk">
          <section>
            <Link to={"https://vk.com/"}>
              <img src={vk} alt="" />
            </Link>
          </section>
        </div>
        <div className="blogs sberbank">
          <section>
            <Link to={"https://online.sberbank.ru/CSAFront/index.do"}>
              <img src={sberbank} alt="" />
            </Link>
          </section>
        </div>
        <div className="blogs yandex">
          <section>
            <Link to={"https://yandex.ru/search?lr=10309"}>
              <img src={yandex} alt="" />
            </Link>
          </section>
        </div>
        <div className="blogs skilbox">
          <section>
            <Link to={"https://skillbox.ru/"}>
              <img src={skilbox} alt="" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TrustUs;
