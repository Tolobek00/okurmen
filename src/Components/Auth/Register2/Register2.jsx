import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEye } from "react-icons/fa";


import logo from "../../../Assets/image/okurmen_logo.jpg";
import yarkima from "../../../Assets/Svg/Yarkima.svg";
import telegram from "../../../Assets/Svg/telegram-1 1.svg";

import "./register2.scss";
import { toast } from "react-toastify";

function Register2() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [currentSquare, setCurrentSquare] = useState(2);
  const colors = [
    "rgb(243, 109, 255)",
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Пароли не совпадают");
      toast.error("Пароли не совпадают!");
      return;
    }
    
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      setName("");
      setError("");
      setEmail("");
      setPassword("");
      setCopyPassword("");
      toast.success("create register successfully!");
      navigate("/autorization");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      toast.error("Ошибка регистрации");
    }
    
  };

  return (
    <div className="register2">
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
          <section onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" />
            <h1>Okurmen</h1>
          </section>
          <section className="register-btn">
            <button onClick={() => navigate("/login")}>Войти</button>
          </section>
        </div>

        <form className="register-container" onSubmit={handleRegister}>
          <div className="login-register">
            <h1 className="register-title">Регистрация</h1>
          </div>
          <div className="section">
            <div className="inputs">
              <input type="text" placeholder="Имя" />
              <input
                type="email"
                placeholder="Телефон или email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="show-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🔓" : "🔒"}
                </div>
              </div>
              <div className="password-container">
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Повторите пароль"
                  name="password2"
                  value={copyPassword}
                  onChange={(e) => setCopyPassword(e.target.value)}
                />
                <div
                  className="show-password-btn"
                  onClick={() => setShowPassword2(!showPassword2)}
                >
                  {showPassword2 ? "🔓" : "🔒"}
                </div>{" "}
              </div>
              {error && (
                <div className="error-message" style={{ color: "red" }}>
                  {error}
                </div>
              )}
              <div className="button-div">
                <button type="submit" className="btn">
                  Продолжить
                </button>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" name="" id="" />
                <span>
                  <h4>Продолжая вы автоматически соглашаетесь с</h4> Политикой
                  конфиденциальности и Условиями пользования
                </span>
              </div>
            </div>
            <section>
              <img src={telegram} alt="Telegram" />
              <h1>Войти через телеграм</h1>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register2;
