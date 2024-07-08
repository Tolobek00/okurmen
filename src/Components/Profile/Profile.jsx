import React, { useState } from "react";

import avatar from "../../Assets/Svg/Polygon 14.svg";
import profile from "../../Assets/Svg/Profile.svg";
import vector from "../../Assets/Svg/Vector (1).svg";
import more from "../../Assets/Svg/More.svg";
import user from "../../Assets/Svg/Vector (2).svg";
import chat from "../../Assets/Svg/Chat.svg";
import group from "../../Assets/Svg/Group.svg";
import stack from "../../Assets/Svg/Stack.svg";
import icon1 from "../../Assets/Svg/icon1.svg";
import icon2 from "../../Assets/Svg/icon2.svg";
import icon3 from "../../Assets/Svg/icon3.svg";
import icon4 from "../../Assets/Svg/icon4.svg";
import courses_svg from "../../Assets/Svg/Button in courses.svg";
import courses from "../../Assets/Svg/Courses.svg";
import facebook from "../../Assets/Svg/facebook vector.svg";
import instagram from "../../Assets/Svg/instagram vector.svg";
import vkontakte from "../../Assets/Svg/vk vector.svg";

import "./profile.scss";
import Inform from "../Information/Inform";
import Photos from "../Photos/Photos";
import HexCourse from "../HexCourse/HexCourse";
import HexLang from "../HexLang/HexLang";

function Profile() {
  const [activeComponent, setActiveComponent] = useState("Inform");

  return (
    <div className="profile container">
      <div className="left_category">
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
      <div className="my_profile">
        <div className="top_blog">
          <div className="left">
            <section>
              <img src={avatar} alt="" />
            </section>
            <section>
              <h1>ALzeran</h1>
              <h2>Виктор</h2>
              <div>
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
              </div>
            </section>
          </div>
          <div className="right">
            <div className="right_top">
              <section className="chat">
                <img src={chat} alt="" />
                <h1>Написать</h1>
              </section>
              <section>
                <div>
                  <img src={stack} alt="" />
                  <h1>Моя визитка</h1>
                </div>
              </section>
            </div>
            <div className="apps_bottom">
              <section className="apps">
                <div>
                  <img src={instagram} alt="" />
                </div>
                <div>
                  <img src={vkontakte} alt="" />
                </div>
                <div>
                  <img src={facebook} alt="" />
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="categories_profile">
          <section className="category_section" onClick={() => setActiveComponent("Inform")}>
            <h1>Информация</h1>
          </section>
          <section className="category_section" onClick={() => setActiveComponent("Photos")}>
            <h1>Избранные курсы</h1>
          </section>
          <section className="category_section" onClick={() => setActiveComponent("Courses")}>
            <h1>Мои курсы</h1>
          </section>
        </div>
        {activeComponent === "Inform" && <Photos />}
        {activeComponent === "Inform" && <Inform />}
        {activeComponent === "Photos" && (
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
        )}
        {activeComponent === "HexCourse" && <HexCourse />}
        {activeComponent === "HexLang" && <HexLang />}
        {activeComponent === "Courses" && <div>Мои курсы компонент</div>}
      </div>
    </div>
  );
}

export default Profile;
