import React, { useEffect, useRef, useState } from "react";
import { IoLanguageSharp } from "react-icons/io5";
import { GiSchoolBag } from "react-icons/gi";

import courses_svg from "../../Assets/Svg/Button in courses.svg";
import courses from "../../Assets/Svg/Courses.svg";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import down from "../../Assets/Svg/Down.svg";
import { useNavigate } from "react-router-dom";

import "./course.scss";
import HexCourse from "../HexCourse/HexCourse";
import HexLang from "../HexLang/HexLang";

const API = "https://6631e134c51e14d69562ac29.mockapi.io/language";

function Course() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [popup2, setPopup2] = useState(false);
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

  const [activeComponent, setActiveComponent] = useState("HexLang");

  return (
    <div className="course_language">
      <div className="languages-title container">
        <section>
          <h4 onClick={() => goToPages("/categories")}>Категории /</h4>
          <h4> Языки </h4>
        </section>
        <section>
          <h1>Языки</h1>
        </section>
      </div>
      <div className="category-top container">
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

          <section
            className="tip"
            ref={aRef}
            onClick={() => setPopup2(!popup2)}
          >
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
        <section>
          <img
            src={courses_svg}
            alt=""
            onClick={() => setActiveComponent("HexLang")}
          />
          <img
            src={courses}
            alt=""
            onClick={() => setActiveComponent("HexCourse")}
          />
        </section>
      </div>
      <div className="main container">
        <div className="category-left">
          <Accordion
            defaultActiveKey={["0"]}
            alwaysOpen
            className="accordion_item"
          >
            <Accordion.Item eventKey="0" className="item-bakground">
              <Accordion.Header className="header-accordion">
                <IoLanguageSharp className="language-icon" />
                Языки
              </Accordion.Header>
              <Accordion.Body className="accordion">
                <ul>
                  <li>Русский</li>
                  <li>Английский</li>
                  <li>Немецкий</li>
                  <li>Французский</li>
                  <li>Китайский</li>
                  <li>Японский</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="item-bakground">
              <Accordion.Header className="header-accordion">
                <GiSchoolBag className="bag-icon" />
                Школа
              </Accordion.Header>
              <Accordion.Body className="accordion">
                <ul>
                  <li>Математика</li>
                  <li>Русский язык</li>
                  <li>Литература</li>
                  <li>История</li>
                  <li>Алгебра</li>
                  <li>Геометрия</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="components">
          {activeComponent === "HexCourse" && <HexCourse />}
          {activeComponent === "HexLang" && <HexLang />}
        </div>
      </div>
    </div>
  );
}

export default Course;
