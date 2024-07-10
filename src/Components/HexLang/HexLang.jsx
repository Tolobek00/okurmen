import React, { useEffect, useState } from "react";
import axios from "axios";
import "./hexLang.scss";

const API = "https://6631e134c51e14d69562ac29.mockapi.io/language";

function HexLang({ selectedTitle }) {
  const [category, setCategory] = useState([]);

  async function getLanguage() {
    try {
      const res = await axios.get(API);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLanguage();
  }, []);
  const filteredCategory = selectedTitle ? category.filter((item) => item.title === selectedTitle) : category;

  return (
    <div>
      <div className="language">
        {filteredCategory.map((item) => (
          <div className="language-course" key={item.id}>
            <div className="kviz">
              <div className="kviz">
                <img src={item.flags} alt="" className="flag-img" />
                <section className="grade">
                  <img src={item.starYellow} alt="" />
                  <h1>{item.grade}</h1>
                </section>
                <section>
                  <h1>{item.kviz}</h1>
                </section>
                <section>
                  <h1>{item.cart}</h1>
                </section>
                <section>
                  <h1>{item.age}</h1>
                </section>
              </div>
              <div className="name_avatar">
                <img src={item.avatar} alt="" />
                <h1>{item.name}</h1>
              </div>
            </div>

            <div className="star">
              <h1>{item.title}</h1>
              <img src={item.star} alt="" />
            </div>

            <div className="paragraf">
              <p>
                Язык восточнославянской группы славянской ветви индоевропейской
                языковой семьи, национальный язык <br />
                 русского народа.
              </p>
            </div>
            <div className="categories_metal">
              <div className="categories">
                <section>{item.category}</section>
                <section>{item.category2}</section>
                <section>{item.category3}</section>
              </div>
              <div className="metal">
                <h1>Достижения:</h1>
                <img src={item.categoryImg} alt="" />
                <img src={item.categoryImg1} alt="" />
                <img src={item.categoryImg2} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HexLang;
