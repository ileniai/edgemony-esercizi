import { BiEuro } from "react-icons/bi";
import "./index.css";

const ModalCart = ({ cartList, setCartList }) => {
  const onHandleClick = (cartProduct) => {
    const filteredCartList = cartList.filter(
      (product) => product.id !== cartProduct.id
    );

    /*faccio un filtro che va ad escludere i prodotti*/

    setCartList(() => filteredCartList);

    localStorage.setItem("cartList", JSON.stringify(filteredCartList));
  };

  

  return (
    <div className="ModalCart">
      {!cartList.length ? (
        <h2>Inserisci un prodotto...</h2>
      ) : (
        
        <div className="ModalCart__list">
          {cartList.map((product) => (
            <div className="ModalCart__product" key={product.id}>
              <img className="ModalCart__product--image" src={product.thumbnail} alt={product.title} />
              <h2 className="ModalCart__product--title">{product.title}</h2>
              <p className="ModalCart__product--price">{product.price}</p>
              <button
                onClick={() => onHandleClick(product)}
                className="ModalCart__product--delete" > x </button>
            </div>
          ))}
          <h3 className="ModalCart__product--tot">
            Totale: {cartList.reduce((acc, product) => acc + product.price, 0)} <BiEuro />
          </h3>
        </div>
      )}
    </div>
  );
};

export default ModalCart;