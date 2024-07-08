import React, { useEffect, useState } from "react";
import axios from "axios";
import link from "../../Assets/Svg/link.svg"
import galochka from "../../Assets/Svg/VectorGalochka.svg"

import "./Russian.scss";

const API = "https://6631e134c51e14d69562ac29.mockapi.io/language";

function RussianLang() {
  const [category, setCategory] = useState([]);

  async function getLanguage() {
    try {
      const res = await axios.get(API);
      setCategory(res.data);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <div className="russianLanguage container">
      <div className="title_text">
        <section>
          <h1>Категории /</h1>
          <h1>Языки</h1>
        </section>
      </div>
      <div className="lang_item">
        {category.slice(0, 1).map((item, itemIndex) => (
          <div key={itemIndex} className="map_item">
            <section className="img_flag">
              <img src={item.flags} alt="" />
            </section>
            <div className="lang">
              <section>
                <img src={item.avatar} alt="" />
                <h2>{item.name}</h2>
              </section>
              <section>
                {item.title}
                <img src={galochka} alt="" />
              </section>
              <section>
                <section>{item.grade}</section>
                <div>{item.kviz}</div>
                <div>{item.cart}</div>
                <div>{item.age}</div>
              </section>
            </div>
          </div>
        ))}

        <div className="item_right">
          <section className="button">
            <button>пройти курс</button>
          </section>
          <section className="link"><img src={link} alt="" /></section>
        </div>
      </div>
    </div>
  );
}

export default RussianLang;
