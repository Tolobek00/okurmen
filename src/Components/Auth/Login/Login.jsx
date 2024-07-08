import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// import logo from "../../../Assets/Svg/logo-header.svg";
import logo from "../../../Assets/image/okurmen_logo.jpg"
import yarkima from "../../../Assets/Svg/Yarkima.svg";
import telegram from "../../../Assets/Svg/telegram-1 1.svg";

import "./login.scss";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      setError("");
      setEmail("");
      setPassword("");
      toast.success("Successfully logged in!");
      navigate("/"); 
    } catch (error) {
      console.log(error.message);
      setError("Извините, мы не нашли ваш аккаунт.");
      toast.error("Login failed. Please check your credentials.");
    }
  };

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

  return (
    <div className="login">
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
            <img src={logo} alt="Логотип" />
            <h1>Okurmen</h1>
            {/* <img src={yarkima} alt="Yarkima" /> */}
          </section>
          <section className="register-btn">
            <button onClick={() => navigate("/register2")}>Регистрация</button>
          </section>
        </div>

        <div className="register-container">
          <div className="login-register">
            <h1 className="register-title">Вход</h1>
          </div>
          <form className="section" onSubmit={handleRegister}>
            <div className="inputs">
              <input
                type="email"
                name="email"
                placeholder="Телефон или email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="input_password">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="show-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🔓" : "🔒"}
                </div>
                {error && (
                  <div className="error-message" style={{ color: "red" }}>
                    {error}
                  </div>
                )}
              </div>
              <div className="button-div">
                <button type="submit">Войти</button>
              </div>
            </div>
            <section>
              <img src={telegram} alt="Telegram" />
              <h1>Войти через телеграм</h1>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
