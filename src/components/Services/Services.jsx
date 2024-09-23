import './Services.css'

export const Services = () => {
    return (
        <div className="content-aside">
              <h3 className="content-aside__title">Сервисы и услуги</h3>

              <div className="content-aside__box">
                <div className="content-aside__list">
                  <div className="content-aside__list-item">
                    <img
                      className="content-aside__list-item--img"
                      src="/images/delivery.svg"
                      alt="img"
                    />
                    <h5 className="content-aside__list-item--title">
                      Доставка
                    </h5>
                    <p className="content-aside__list-item--info">
                      Проверка при получении и возможность бесплатно вернуть
                      товар
                    </p>
                  </div>
                  <div className="content-aside__list-item">
                    <img
                      className="content-aside__list-item--img"
                      src="/images/car.svg"
                      alt="img"
                    />
                    <h5 className="content-aside__list-item--title">
                      Автотека
                    </h5>
                    <p className="content-aside__list-item--info">
                      Отчёт с историе авто: пробег, владельцы, сведения о
                      залоге, ДТП и ремонтах
                    </p>
                  </div>
                  <div className="content-aside__list-item">
                    <img
                      className="content-aside__list-item--img"
                      src="/images/home.svg"
                      alt="img"
                    />
                    <h5 className="content-aside__list-item--title">
                      Онлайн-бронирование жилья
                    </h5>
                    <p className="content-aside__list-item--info">
                      Посуточная аренда квартир и домов: большой выбор вариантов
                      для поездок по России
                    </p>
                  </div>
                </div>
                <hr />
                <div className="content-aside__footer">
                  <p className="content-aside__footer-item">
                    © ООО «Абито», 2011–2021
                  </p>
                  <a href="#!" className="content-aside__footer-item">
                    Политика конфиденциальности
                  </a>
                  <a href="#!" className="content-aside__footer-item">
                    Обработка данных
                  </a>
                </div>
              </div>
            </div>
    )
}