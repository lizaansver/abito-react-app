import "./RegistrationModal.css";

export const RegistrationModal = ({ warning, username, setUsername, showPassword, password, setPassword, showPasswordIcon,closePasswordIcon, changePassword, registration, message, setMessage, changeRegistrmodal}) => {
  

  return (
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
              {warning ? (
                  <p className="warning">{warning}</p>
                ) : null}
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
    )
}