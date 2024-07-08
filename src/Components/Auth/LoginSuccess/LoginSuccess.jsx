import React, { useEffect, useState } from "react";

import logo from "../../../Assets/image/okurmen_logo.jpg";
import yarkima from "../../../Assets/Svg/Yarkima.svg";
import succesfly from "../../../Assets/Svg/Frame succesfly.svg";


import "./loginSuccess.scss";
import { useNavigate } from "react-router-dom";

function LoginSuccess() {
  const navigate = useNavigate();

  function goToPages(Link) {
    navigate(Link);
  }

  const [currentSquare, setCurrentSquare] = useState(2); 
  const colors = [" rgb(243, 109, 255)", "rgb(135, 69, 254)", "rgb(23, 186, 229)", "yellow"]; 

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
    <div className="success">
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
          </section>
          <section className="register-btn">
            <button onClick={() => goToPages("/register1")}>Регистрация</button>
          </section>
        </div>
        <div className="success-container">
          <div className="register-container">
            <div className="login-register">
              <img src={succesfly} alt="" />
              <h1 className="register-title">Поздравляем!</h1>
              <p>
                Регистрация успешно пройдена, приятного пребывания в Yarkima!.
              </p>
            </div>
            {/* <div className="section"> */}
            <div className="button-div">
              <button onClick={() => goToPages("/login")}>Продолжить</button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSuccess;
