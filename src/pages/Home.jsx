import React, { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import ItemsList from "../components/ItemsList"; // Импортируем MyComponent
import { our_array } from "../constants"; // Импортируем массив из constants.js
import { Services } from "../components/Services/Services";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  const [inputValue, setInputValue] = useState("Поиск по объявлениям");
  const [filteredItems, setFilteredItems] = useState(our_array);

  // event.target.value используется для получения текущего значения элемента input в момент, когда происходит событие (например, onFocus, onBlur, onChange).

  //Вот как это работает:

  //onFocus: Событие срабатывает, когда элемент input получает фокус (например, когда пользователь кликает на него или переходит к нему с помощью клавиатуры).

  //onBlur: Событие срабатывает, когда элемент input теряет фокус (например, когда пользователь кликает вне элемента или переходит к другому элементу).

  //onChange: Событие срабатывает, когда значение элемента input изменяется (например, когда пользователь вводит текст).

  //В каждом из этих случаев, event.target ссылается на элемент input, который вызвал событие, а event.target.value содержит текущее значение этого элемента.

  const [visibleItems, setVisibleItems] = useState(6); // Количество отображаемых карточек///

  {
    /** Для реализации функциональности "Показать больше" на главной странице, вам нужно будет добавить состояние для отслеживания количества отображаемых карточек и кнопку для увеличения этого количества. 
    Вот как это можно сделать:
1. Добавьте состояние для отслеживания количества отображаемых карточек. ВЫШЕ
2. Добавьте кнопку "Показать больше" и обработчик события для этой кнопки. handleShowMore
3. Обновите компонент MyComponent для отображения только определенного количества карточек. */
  }

  // Прокрутка страницы вверх при загрузке компонента
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFocus = (event) => {
    if (event.target.value === "Поиск по объявлениям") {
      setInputValue(""); //когда мы нажимаем на поиск по объявлению нужно чтобы поиск был пустой
    }
  };

  const handleBlur = (event) => {
    if (event.target.value === "") {
      setInputValue("Поиск по объявлениям"); // когда мы просто нажали на поиск, НИЧЕГО НЕ НАПИСАЛИ, НАЖАЛИ НА ДРУГОЕ РАНДОМНОЕ МЕСТО ВНЕ ПОИСКА и нужно чтобы вернулось "поиск по об.."
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value); // когда уже мы что-то вписали в поиск и даже если мы куда то нажили вне этого поиска - чтобы написанное оставалось на месте
  };

  const filtered = (arr, value) => {
    return arr.filter((item) => {
      let lowerCaseTitle = item.title.toLowerCase();
      let lowerCaseValue = value.toLowerCase();
      let valueTrim = value.toLowerCase().trim()
      return (
        lowerCaseTitle.includes(lowerCaseValue) || item.title.includes(value) || lowerCaseTitle.includes(valueTrim)
      ); // короче чтобы я допустим поиске писала большими или меленькими ьуквами то нужно и импут и айтем тайтл приобразовать к одному регисту
    });
  };

  const handleSearch = () => {
    const filteredArray = filtered(our_array, inputValue);
    setFilteredItems(filteredArray); // ВОТ ЭТО КАК ПОНЯТЬ??
    setInputValue("Поиск по объявлениям"); // Очищаем поле поиска - то бишь после того как мы нажали на найти - в инпуте снова "поик по объяв"
  };

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 6); // Увеличиваем количество отображаемых карточек на 6
  };

  return (
    <div className="container">
      <Header />
      <main>
        <section className="search">
          <div className="search-box">
            <input
              type="text"
              value={inputValue}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <button
              className="btn btn-primary btn-search"
              onClick={handleSearch}
            >
              <img
                className="btn-search__img"
                src="/abito-react-app/images/find.svg"
                alt=""
              />
              <span className="btn-search__text">Найти</span>
            </button>
          </div>
        </section>

        <section className="content">
          <div className="content-box">
            <div className="content-menu">
              <h2 className="content-menu__text">Рекомендации для Вас</h2>

              {/* Передаем отфильтрованные элементы и количество отображаемых карточек в MyComponent */}
              <ItemsList
                filteredItems={filteredItems}
                visibleItems={visibleItems}
              />
              {filteredItems.length > visibleItems ? (
                <button
                  className="btn btn-primary"
                  style={{ margin: "30px auto", width: "100%" }}
                  onClick={handleShowMore}
                >
                  Показать больше
                </button>
              ) : null}
            </div>

            <Services />
          </div>
        </section>
      </main>
      <hr />
      <Footer/>
    </div>
  );
};
