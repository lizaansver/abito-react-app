import React from "react";
import { Card } from "../components/Card/Card"; /// Импортируем компонент Card

const MyComponent = ({ filteredItems, visibleItems }) => {
  return (
    <div className="content-menu__list">
      {filteredItems.length === 0 ? (
        // <div className="not-found">Упс, ничего не найдено</div>
        <div
          className="not-found">
          <p>Упс, ничего не найдено</p>
          <a href="/" className="btn btn-primary">
            Вернуться на главную страницу
          </a>
        </div>
      ) : (
        filteredItems.slice(0, visibleItems).map((item) => (
          <Card
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            adress={item.adress}
            date={item.date}
            img={item.img[0]}
          />
        ))
      )}
    </div>
  );
};

export default MyComponent;
