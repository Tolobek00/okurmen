import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoLanguageOutline } from "react-icons/io5";

import menuBtn from "../../Assets/Svg/Menu button.svg";
import btnmenu from "../../Assets/Svg/Menu button (1).svg";
import search from "../../Assets/Svg/Search.svg";
// import logo from "../../Assets/Svg/logo-header.svg";
// import yarkima from "../../Assets/Svg/Yarkima.svg";
// import star from "../../Assets/Svg/star yellow.svg";
// import star2 from "../../Assets/Svg/Property 1=Variant3.svg";
import logo_okurmen from "../../Assets/image/okurmen_logo.jpg";
import down from "../../Assets/Svg/Down.svg";
import profile from "../../Assets/Svg/Profile.svg";
import vector from "../../Assets/Svg/Vector (1).svg";
import more from "../../Assets/Svg/More.svg";
import user from "../../Assets/Svg/Vector (2).svg";
import chat from "../../Assets/Svg/Chat.svg";
import group from "../../Assets/Svg/Group.svg";

import "./header.scss";
import i18n from "../../Locales/i18next";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18 } = useTranslation();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  
  const [popup, setPopup] = useState();
  const [popup1, setPopup1] = useState();
  const outRef = useRef(null);
  const aRef = useRef(null);

  function goToPages(Link) {
    navigate(Link);
  }

  function openMenu() {
    setActive(!active);
  }

  useEffect(() => {
    function clickHandler(event) {
      if (
        (outRef.current && !outRef.current.contains(event.target)) ||
        (aRef.current && aRef.current.contains(event.target))
      ) {
        setPopup(false);
        setPopup1(false);
        console.log("ok");
      }
    }
    document.addEventListener("mousedown", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [outRef, aRef]);

  const handleChangeLanguage = (event) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
    console.log(lng);
    // console.log(user);
  };

  return (
    <header>
      <div className="margin"></div>

      {popup && (
        <div ref={outRef} className="header-opened_menu Wrapper">
          <div className="logo">
            <section onClick={() => goToPages("/")}>
              <img src={logo_okurmen} alt="" />
              <h1>Okurmen</h1>
            </section>
            {/* <select
              onChange={handleChangeLanguage}
              defaultValue={i18n.language}
            >
              <img src={star} alt="" /><img src={star2} alt="" />
              <option value="en">ENG</option>
              <option value="ru">RUS</option>
              <option value="ky">KGZ</option>
            </select> */}
            <section>
              <img ref={aRef} src={btnmenu} alt="" />
            </section>
          </div>
          <div className="menu-header container">
            <ul>
              <section>
                <li onClick={() => goToPages("/")}>{t("home")}</li>
              </section>
              <section>
                <li onClick={() => goToPages("/catalog")}>{t("catalog")}</li>
              </section>
              <section>
                <li onClick={() => goToPages("/keys")}>{t("cases")}</li>
              </section>
              <section>
                <li onClick={() => goToPages("/fag")}>F.a.q</li>
              </section>
              <section>
                <li onClick={() => goToPages("/partners")}>{t("partner")}</li>
              </section>
            </ul>
          </div>
          <div className="left_categories">
            <div className="first_div">
              <section>
                <img src={profile} alt="" />
                <h1>Публичный профиль</h1>
              </section>
              <section>
                <img src={vector} alt="" />
                <h1>Кабинет партнера</h1>
              </section>
              <section className="more">
                <img src={more} alt="" />
                <h1>Еще</h1>
              </section>
              <div className="modal_user">
                <div>Настройка</div>
                <div>Поддержка</div>
                <div className="check-out">Выйти</div>
              </div>
            </div>
            <h1 className="message">Сообщество</h1>
            <div>
              <section>
                <img src={user} alt="" />
                <h1>Знакомства</h1>
              </section>
              <section>
                <img src={chat} alt="" />
                <h1>Чаты</h1>
              </section>
              <section>
                <img src={group} alt="" />
                <h1>Группы</h1>
              </section>
            </div>
          </div>
        </div>
      )}

      <div className="header">
        <div className="menuBtn">
          <img
            src={menuBtn}
            alt=""
            ref={aRef}
            onClick={() => setPopup(!popup)}
          />
        </div>
        <div className="logo-header">
          <section onClick={() => goToPages("/")} className="logo">
            <img src={logo_okurmen} alt="" />
            <h1>Okurmen</h1>
          </section>

          <section className="dropdown">
            <section
              className="popular"
              ref={aRef}
              onClick={() => setPopup1(!popup1)}
            >
              {t("learn")}
              <img src={down} alt="" />
            </section>
            {popup1 && (
              <div ref={outRef} className="dropdown1">
                <section onClick={() => goToPages("/languagePage")}>
                  <h1>{t("languages")}</h1>
                </section>
                <section onClick={() => goToPages("/category2")}>
                  <h1>{t("school")}</h1>
                </section>
                <section>
                  <h1>{t("university")}</h1>
                </section>
                <section>
                  <h1>Личностный рост</h1>
                </section>
                <section>
                  <h1>Духовный рост</h1>
                </section>
                <section>
                  <h1>Бизнес</h1>
                </section>
                <section>
                  <h1>Отношение</h1>
                </section>
                <section>
                  <h1>Здоровье</h1>
                </section>
                <section>
                  <h1>Спорт</h1>
                </section>
                <section>
                  <h1>Хобби, увлечение</h1>
                </section>
                <section>
                  <h1>Эзотерика</h1>
                </section>
                <section>
                  <h1>Кулинария</h1>
                </section>
                <section>
                  <h1>Техника, гаджеты</h1>
                </section>
                <section>
                  <h1>Финансы</h1>
                </section>
                <section>
                  <h1>Инвестиции</h1>
                </section>
                <section>
                  <h1>Профессии</h1>
                </section>
              </div>
            )}
          </section>
        </div>
        <div className="start_btn">
          <button className="register" onClick={() => goToPages("/register2")}>
            Начать
          </button>
        </div>
        <div className="search-input">
          <img src={search} alt="" />
          <input type="text" placeholder={t("search")} />
        </div>
        <select onChange={handleChangeLanguage} defaultValue={i18n.language}>
          <option value="en">ENG<IoLanguageOutline className="img"/></option>
          <option value="ru">RUS</option>
          <option value="ky">KGZ</option>
        </select>
        <div className="burger-menu">
          <button className="login" onClick={() => goToPages("/login")}>
            {t("login")}
          </button>
          <div className="container-register_btn">
            <button
              className="register"
              onClick={() => goToPages("/register2")}
            >
              {t("register")}
            </button>
          </div>
          <img
            src={menuBtn}
            alt=""
            ref={aRef}
            onClick={() => setPopup(!popup)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
