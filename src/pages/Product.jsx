import React, { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { useParams } from "react-router-dom";
import { our_array } from "../constants";
import { Services } from "../components/Services/Services";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "../components/Footer/Footer";
export const Product = () => {
  
  // Прокрутка страницы вверх при загрузке компонента
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [inputValue, setInputValue] = useState("Поиск по объявлениям");
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

  const { id } = useParams();
  const ourProduct = our_array.find((p) => p.id === +id);

  //настройки для слайдера !!!
  const settings = {
    dots:  false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
            <button className="btn btn-primary btn-search">
              <img className="btn-search__img" src="/abito-react-app/images/find.svg" alt="" />
              <span className="btn-search__text">Найти</span>
            </button>
          </div>
        </section>
        <section className="content">
          <div className="content-box">
            {ourProduct ? (
              <div className="content-product">
                <div className="content-product__left">
                  <h2 className="content-product__left--title">
                    {ourProduct.title}{" "}
                    {/* короче через ourProduct мы выходим на наши товары */}
                  </h2>
                  {/* <img
                    className="content-product__left--img"
                    src={ourProduct.img}
                    alt=""
                  /> */}
                  <div className="content-product__left--images">
                    {ourProduct.img.length === 1 ? (
                      <img
                      className="content-product__left--img"
                      src={ourProduct.img[0]}
                      alt="img"
                    /> 
                    ) : (
                      <Slider {...settings}>
                    {ourProduct.img.map((image, index) => {
                      return (<div key={index}>
                      <img
                        alt={`image${index + 1}`}
                        className="content-product__left--img"
                        src={image}
                      />
                    </div>)
                    })}
                    </Slider>
                    )}
                  </div>
                  <p className="content-product__left--info">
                    {ourProduct.description}
                  </p>
                </div>
                <div className="content-product__right">
                  <div className="content-product__right--price">
                    {ourProduct.price}
                  </div>
                  <a
                    href="tel:89005853355"
                    className="btn btn-primary btn-show btn-call"
                  >
                    Позвонить
                  </a>
                  <Link to={"/"} className="btn btn-primary btn-show">
                    Вернуться на главную страницу
                  </Link>
                </div>
              </div>
            ) : (
              <div className="not-found">
                <p>Упс, ничего не найдено</p>
                <Link to={"/"} className="btn btn-primary hello">
                  Вернуться на главную страницу
                </Link>
              </div>
            )}

            <Services />
          </div>
        </section>
      </main>
      <hr />
     <Footer />
    </div>
  );
};
