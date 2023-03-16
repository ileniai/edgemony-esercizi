import {textDescription } from "../../utils/function";
import {titleDescription} from "../../utils/function";
import "./index.css";

const Card = ({ productData, setModalContext }) => {

  const onHandleClick = () => setModalContext (()=> ({
    isVisibile: true,
    productData,
  }))

  return (
    <div className="Card" onClick={onHandleClick}>
      <div className="Card__image">
      <img className="image"
        src={productData.thumbnail}
        alt={productData.title}
      />
      </div>
      <div className="Card__text">
        <h3 className="Card__text--title">
        {titleDescription(productData.title)}
        </h3>
        <p className="Card__text--description">
          {textDescription(productData.description)}
        </p>
        <p className="Card__text--category">{productData.category}</p>
        <p className="Card__text--price">$ {productData.price}</p>
      </div>
    </div>
  );
};

export default Card;