import "./index.css";

const ProductModal = ({ productData, setModalContext }) => {
//funzione che scatena la chiusura della modale
/*mi creo un oggetto di tutti i prodotti precedenti
(productData) rimane quello ma imposto la visibilità della modale a false*/
  const onHandleClose = () =>
  setModalContext((prev) => ({
   ...prev,
   isVisibile: false,

  }));

  return (
    <div className="ProductModal">
        <div className="ProductModal__content">
          <div className="ProductModal__text">
            <h1 className="ProductModal__text--title">{productData.title}</h1>
            <p className="ProductModal__text--description">{productData.description}</p>
            <div className="ProductModal__text--info">
              <span className="ProductModal__text--info--category">{productData.category}</span>
              <span className="ProductModal__text--info--price"> $ {productData.price}</span>
            </div>
          </div>
          <div className="ProductModal__gallery">
            {productData.images.map((image) => (
              <img
                onClick={() => onHandleImageClick(image)}
                src={image}
                alt={image}
                key={image}
              />
            ))}
          </div>
          <button onClick={onHandleClose} className="ProductModal--close">X</button>
          <button className="ProductModal--cart"> 🛒</button>
        </div>
    </div>
  );
};
export default ProductModal;