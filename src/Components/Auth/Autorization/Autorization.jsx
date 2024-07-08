import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../Assets/image/okurmen_logo.jpg";
import yarkima from "../../../Assets/Svg/Yarkima.svg";
import telegram from "../../../Assets/Svg/telegram-1 1.svg";
import axios from "axios";

import "./autorization.scss";

const API = "https://api.escuelajs.co/api/v1/users";

function Autorization() {
  const navigate = useNavigate();

  function goToPages(Link) {
    navigate(Link);
  }

  useEffect(() => {
    const inputs = document.querySelectorAll(".code-inputs input");

    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value.length === 0 && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });
  }, []);

  const [currentSquare, setCurrentSquare] = useState(2);
  const colors = [
    " rgb(243, 109, 255)",
    "rgb(135, 69, 254)",
    "rgb(23, 186, 229)",
    "yellow",
  ];

  useEffect(() => {
    const squares = document.querySelectorAll(".square");
    const hexagon = document.getElementById("hexagon");

    const moveHexagon = () => {
      const square = squares[currentSquare];
      square.style.opacity = 0;

      const containerRect = document
        .querySelector(".container")
        .getBoundingClientRect();
      const { top, left } = square.getBoundingClientRect();

      hexagon.style.top = `${top - containerRect.top}px`;
      hexagon.style.left = `${left - containerRect.left}px`;
      hexagon.style.transform = `rotate(${currentSquare * 120}deg)`;
      hexagon.style.backgroundColor = colors[currentSquare];

      setTimeout(() => {
        square.style.opacity = 1;
        setCurrentSquare((currentSquare + 1) % squares.length);
      }, 1500);
    };

    moveHexagon();

    const interval = setInterval(moveHexagon, 2000);

    return () => clearInterval(interval);
  }, [currentSquare]);

  return (
    <div className="autorization">
      <div className="animation">
        <div className="container">
          <div className="square" id="square1"></div>
          <div className="square" id="square2"></div>
          <div className="square" id="square3"></div>
          <div className="square" id="square4"></div>
          <div className="hexagon" id="hexagon"></div>
        </div>
      </div>
      <div className="register">
        <div className="title">
          <section onClick={() => goToPages("/")}>
            <img src={logo} alt="Logo" />
            <h1>Okurmen</h1>
            {/* <img src={yarkima} alt="Yarkima" /> */}
          </section>
          <section className="register-btn">
            <button onClick={() => goToPages("/register1")}>Регистрация</button>
          </section>
        </div>

        <div className="register-container">
          <div className="login-register">
            <h1 className="register-title">Регистрация</h1>
            <p>Мы отправили письмо с 6-ти значным кодом на вашу почту.</p>
          </div>
          <div className="section">
            <div className="code-inputs">
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
            </div>
            <div className="button-div">
              <button onClick={() => goToPages("/loginSuccess")}>
                ПОДТВЕРДИТЬ
              </button>
            </div>
            <section>
              <img src={telegram} alt="Telegram" />
              <h1>Войти через телеграм</h1>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Autorization;
