import React, { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [modal, setModal] = useState(true);

  const changeModal = () => {
    setModal(!modal);
  };

  return (
    <header className="header">
      <div className="header-box">
        <a href="/" className="header-logo">
          <img src="/images/box.svg" alt="" />
          <span>Abito</span>
        </a>
        <div className="header-buttons">
          <button className="btn btn-transparent">Вход и регистрация</button>
          <button className="btn btn-primary">Подать объявление</button>
        </div>
        <div className="header-burger" onClick={changeModal}>
          <img src="images/burger.svg" alt="" />
        </div>
        {modal ? null : (
          <div className={`modal active`}>
            <div className="modal__content">
              <button className="modal__close" onClick={changeModal}>
                &times;
              </button>
              <div className="burger-buttons">
          <button className="btn btn-transparent">Вход и регистрация</button>
          <button className="btn btn-primary">Подать объявление</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
