import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../../Assets/Svg/logo-header.svg";
import yarkima from "../../../Assets/Svg/Yarkima.svg";
import telegram from "../../../Assets/Svg/telegram-1 1.svg";
import hexagonImage from "../../../Assets/Svg/hexagon.svg";
import { toast } from "react-toastify";

import "./register1.scss";

const API = "https://api.escuelajs.co/api/v1/users";

const Register1 = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    avatar: null,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setUser((prevUser) => ({ ...prevUser, avatar: file }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    checkRequired(["name", "email", "password", "password2"]);
    checkLength(user.name, 4, 15);
    checkLength(user.password, 6, 20);
    checkPasswordsMatch(user.password, user.password2);

    if (isValid()) {
      try {
        const formData = new FormData();
        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("password", user.password);
        formData.append("avatar", user.avatar);

        const res = await axios.post(API, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        toast.success("Регистрация прошла успешно!");
        console.log(res);
        navigate("/login");
      } catch (error) {
        console.error(error);
        toast.error("Ошибка регистрации");
      }
    } else {
      toast.error("Проверьте введенные данные");
    }
  };

  const checkRequired = (inputs) => {
    let newErrors = {};
    inputs.forEach((input) => {
      if (!user[input] || user[input].trim() === "") {
        newErrors[input] = `${getFieldName(input)} is required`;
      }
    });
    setErrors(newErrors);
  };

  const checkLength = (input, min, max) => {
    if (input.length < min) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [input]: `${getFieldName(input)} must be at least ${min} characters`,
      }));
    } else if (input.length > max) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [input]: `${getFieldName(input)} must be less than ${max} characters`,
      }));
    } else {
      setErrors((prevErrors) => {
        const { [input]: _, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const checkPasswordsMatch = (password, password2) => {
    if (password !== password2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password2: "Passwords do not match",
      }));
    } else {
      setErrors((prevErrors) => {
        const { password2, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const getFieldName = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };

  const isValid = () => {
    return Object.keys(errors).length === 0;
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
    <div className="register1">
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
            <img src={yarkima} alt="Yarkima" />
          </section>
          <section className="register-btn">
            <button onClick={() => navigate("/login")}>Войти</button>
          </section>
        </div>

        <div className="register-container">
          <div className="login-register">
            <h1 className="register-title">Регистрация</h1>
          </div>
          <div className="section">
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <input
                  type="text"
                  placeholder="Имя"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
                {errors.name && <small>{errors.name}</small>}
                <input
                  type="email"
                  placeholder="Телефон или email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                {errors.email && <small>{errors.email}</small>}
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Пароль"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <div
                    className="show-password-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🔓" : "🔒"}
                  </div>
                </div>
                {errors.password && <small>{errors.password}</small>}
                <div className="password-container">
                  <input
                    type={showPassword2 ? "text" : "password"}
                    placeholder="Повторите пароль"
                    name="password2"
                    value={user.password2}
                    onChange={handleChange}
                  />
                  <div
                    className="show-password-btn"
                    onClick={() => setShowPassword2(!showPassword2)}
                  >
                    {showPassword2 ? "🔓" : "🔒"}
                  </div>
                </div>
                {errors.password2 && <small>{errors.password2}</small>}
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
            </form>
            <section>
              <img src={telegram} alt="Telegram" />
              <h1>Войти через телеграм</h1>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register1;
