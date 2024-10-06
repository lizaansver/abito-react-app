// ОЧЕНЬ ВАЖНО!!
// Если ваша кнопка регистрации находится в компоненте Header, вам нужно убедиться,
// что этот компонент имеет доступ к хранилищу Redux.
// Это означает, что компонент Header должен быть обернут в Provider из react-redux,
// чтобы он мог использовать состояние и действия Redux.

import React, { useState, useEffect, useSyncExternalStore } from "react";
import "./Header.css";
import { useDispatch } from "react-redux"; // Импортирует хук useDispatch из react-redux для отправки действий.
import { registerUser } from "../../actions"; //Импортирует действие registerUser из файла actions.js.
import showPasswordIcon from "../../closed_eye.png";
import closePasswordIcon from "../../opened_eye.png";

export const Header = () => {
  const [modal, setModal] = useState(true);
  const [registrmodal, setRegistrmodal] = useState(true);
  const [username, setUsername] = useState(""); //Состояние для хранения имени пользователя.
  const [password, setPassword] = useState(""); //Состояние для хранения пароля пользователя.
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch(); // функциya dispatch из Redux.

  const changeModal = () => {
    setModal(!modal);
  };

  const changeRegistrmodal = () => {
    // console.log("changeRegistrmodal called");
    setRegistrmodal(!registrmodal);
    if (!registrmodal) {
      // console.log('ghbdtn')
      setMessage("");
      setPassword("");
      setUsername("");
      ////Чтобы обновить плашку с регистрацией после закрытия плашки с сообщением о регистрации,
      //вы можете добавить логику для сброса значений полей ввода и
      //сообщения при открытии плашки с регистрацией.
    }
    setModal(true);
    //Чтобы сделать так, чтобы В ТЕЛЕФОННОЙ ВЕРСИИ при клике на крестик модалки с сообщением
    //о регистрации пропадала и модалка с кнопками "Вход и регистрация" и "Подать объявление",
    //вы можете изменить функцию changeRegistrmodal, чтобы она также сбрасывала значение modal в true
  };

  const registration = () => {
    const userData = { username, password };

    const necessaryPassword = /^(?=.*\d)[a-zA-Z\d]{8}/
    if (!password.match(necessaryPassword)){
      setMessage("Ошибка регистрации! Пароль должен содержать минимум 8 символов латиницы и минимум 1 цифру.")
      return;//В данном случае, return используется для прекращения выполнения функции registration, если пароль не соответствует формату.
    }

    dispatch(registerUser(userData))
      .then(() => {
        setMessage("Вы успешно зарегистрировались!");
        setRegistrmodal(false);
      })
      .catch(() => {
        setMessage("Ошибка регистрации! Попробуйте еще раз");
      });
  };
  //Функция, которая создает объект userData с данными пользователя

  const changePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <header className="header">
      <div className="header-box">
        <a href="/abito-react-app" className="header-logo">
          <img src="/abito-react-app/images/box.svg" alt="" />
          <span>Abito</span>
        </a>
        <div className="header-buttons">
          <button className="btn btn-transparent" onClick={changeRegistrmodal}>
            Вход и регистрация
          </button>
          <button className="btn btn-primary">Подать объявление</button>
        </div>
        {registrmodal ? null : (
          <div className={`registr-modal active`}>
            <div className="registr-modal__content">
              <h3>Регистрация</h3>
              {/* <h6>Mинимум 8 символов латиницы и минимум 1 цифрa</h6> */}
              <div className="registr-modal-buttons">
                <label>
                  Логин:
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
                <label>
                  Пароль:
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    defaultValue=""
                  />
                  <img
                    className="eye"
                    src={showPassword ? showPasswordIcon : closePasswordIcon}
                    alt={showPassword ? "Показать пароль" : "Скрыть пароль"}
                    onClick={changePassword}
                  />
                </label>

                <button
                  className="btn btn-primary registr__btn"
                  onClick={registration}
                >
                  Отправить
                </button>
              </div>
              {message ? (
                <div className={`registr-message active`}>
                  <div className="registr-message__content">
                    <p>{message}</p>
                    <button
                      className="modal__close"
                      onClick={changeRegistrmodal}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ) : null}
              <button className="modal__close" onClick={changeRegistrmodal}>
                &times;
              </button>
            </div>
          </div>
        )}
        <div className="header-burger" onClick={changeModal}>
          <img src="/abito-react-app/images/burger.svg" alt="" />
        </div>
        {modal ? null : (
          <div className={`modal active`}>
            <div className="modal__content">
              <div className="burger-buttons">
                <button
                  className="btn btn-transparent"
                  onClick={changeRegistrmodal}
                >
                  Вход и регистрация
                </button>
                <button className="btn btn-primary">Подать объявление</button>
              </div>
              {registrmodal ? null : (
                <div className={`registr-modal active`}>
                  <div className="registr-modal__content">
                    <h3>Регистрация</h3>
                    <div className="registr-modal-buttons">
                      <label>
                        Логин:
                        <input
                          type="text"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          key={username}
                          defaultValue=""
                        />
                      </label>
                      <label>
                        Пароль:
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          defaultValue=""
                        />
                        <img
                          className="eye"
                          src={
                            showPassword ? showPasswordIcon : closePasswordIcon
                          }
                          alt={
                            showPassword ? "Показать пароль" : "Скрыть пароль"
                          }
                          onClick={changePassword}
                        />
                      </label>

                      <button
                        className="btn btn-primary registr__btn"
                        onClick={registration}
                      >
                        Отправить
                      </button>
                    </div>
                    <button
                      className="modal__close"
                      onClick={changeRegistrmodal}
                    >
                      &times;
                    </button>
                    {message ? (
                      <div className={`registr-message active`}>
                        <div className="registr-message__content">
                          <p>{message}</p>
                          <button
                            className="modal__close"
                            onClick={changeRegistrmodal}
                          >
                            &times;
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
              <button className="modal__close" onClick={changeModal}>
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
