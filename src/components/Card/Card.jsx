import './Card.css'
import { Link } from 'react-router-dom';

export const Card = ({id, title, price, adress, date, img }) => {
  return (
    <Link to={`/product/${id}`} className="card-item">
      <div className="card-item--img">
        <img src={img} alt="img" />
      </div>
      <h5 className="card-item--title">{title}</h5>
      <strong className="card-item--price">{price}</strong>
      <span className="card-item--descr descr--1">{adress}</span>
      <span className="card-item--descr">{date}</span>
    </Link>
  );
};
