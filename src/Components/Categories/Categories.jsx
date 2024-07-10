import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import down from "../../Assets/Svg/Down.svg";
import couses_svg from "../../Assets/Svg/Button in courses.svg";
import courses from "../../Assets/Svg/Courses.svg";

import lang from "../../Assets/Svg/Language.svg";
import crown from "../../Assets/Svg/1Crown_shine.svg";
import game from "../../Assets/Svg/GAME PLAY.svg";
import provacation from "../../Assets/Svg/провокация.svg";
import voin from "../../Assets/Svg/воин.svg";

import "./categories.scss";
import { useNavigate } from "react-router-dom";

const API = "https://666d61817a3738f7cacc3bc6.mockapi.io/language_hext";

function Categories() {
  const [language, setCategory] = useState([]);
  const navigate = useNavigate();
  const [popup, setPopup] = useState();
  const [popup2, setPopup2] = useState();
  const outRef = useRef(null);
  const aRef = useRef(null);

  useEffect(() => {
    function clickHandler(event) {
      if (
        (outRef.current && !outRef.current.contains(event.target)) ||
        (aRef.current && aRef.current.contains(event.target))
      ) {
        setPopup(false);
        setPopup2(false);
        console.log("ok");
      }
    }
    document.addEventListener("mousedown", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [outRef, aRef]);

  function goToPages(Link) {
    navigate(Link);
  }

  async function getCategory() {
    try {
      const res = await axios.get(API);
      setCategory(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCategory();
  }, []);

  const getRows = (language, pattern) => {
    const rows = [];
    let index = 0;

    pattern.forEach((count) => {
      const rowItems = language.slice(index, index + count);
      rows.push(rowItems);
      index += count;
    });
    return rows;
  };

  const layoutPattern = [4, 3, 4, 3, 4];

  const rows = getRows(language, layoutPattern);

  return (
    <div className="categories_container">
      <div className="title_category">
        <h1>Категории</h1>
      </div>
      <div className="populary">
        <div className="text_category">
          <h1>Популярные Категории</h1>
        </div>
        <div className="popular">
          {language.slice(0, 4).map((lang) => (
            <div className="hext" onClick={() => goToPages("/languagePage")}>
              <section className="section_top">
                <img src={lang.image_logo} alt="" />
              </section>
              <h1 className="lang_title">{lang.title}</h1>
              <p>{lang.paragraf}</p>
              <section className="section-title">
                <img src={lang.course_img} alt="" />
                <h1>{lang.count_course}</h1>
              </section>
            </div>
          ))}
        </div>
      </div>
      <div className="category_page">
        <div className="div1">
          <section
            className="popular"
            ref={aRef}
            onClick={() => setPopup(!popup)}
          >
            Самые популярные
            <img src={down} alt="" />
          </section>
          {popup && (
            <div ref={outRef} className="dropdown1">
              <section>
                <h1>Рекомендуемое</h1>
              </section>
              <section>
                <h1>По рейтингу</h1>
              </section>
              <section>
                <h1>По алфавиту</h1>
              </section>
            </div>
          )}

          <section className="tip" ref={aRef} onClick={() => setPopup2(!popup2)}>
            Тип
            <img src={down} alt="" />
            {popup2 && (
              <div ref={outRef} className="dropdown2">
                <section>
                  <h1>Языки</h1>
                </section>
                <section>
                  <h1>Школа</h1>
                </section>
              </div>
            )}
          </section>
        </div>
        <div className="div2">
          <img src={couses_svg} alt="" onClick={() => goToPages("/category2")}/>
          <img src={courses} alt="" />
        </div>
      </div>
      <div className="popular_rows">
        {rows.map((language, rowIndex) => (
          <di v
            className="popularity"
            key={rowIndex}
            onClick={() => goToPages("/languagePage")}
          >
            {language.map((item) => (
              <div className="hexts">
                <section className="section_top">
                  <img src={item.image_logo} alt="" />
                </section>
                <h1 className="lang_title">{item.title}</h1>
                <p>{item.paragraf}</p>
                <section className="section-title">
                  <img src={item.course_img} alt="" />
                  <h1>{item.count_course}</h1>
                </section>
              </div>
            ))}
          </di>
        ))}
      </div>
    </div>
  );
}

export default Categories;
