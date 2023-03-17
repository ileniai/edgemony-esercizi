import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import "./index.css";

const GalleryModal = ({ imgUrl, imgAlt, setGalleryVisible }) => {
  return (
    <img onClick={() => setGalleryVisible(false)} src={imgUrl} alt={imgAlt} />
  );
};

const ProductModal = ({ productData, setModalContext, setCartList }) => {
  const [isGalleryVisible, setGalleryVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const onHandleClose = () =>
    setModalContext((prev) => ({
      ...prev,
      isVisibile: false,
    }));

  const onHandleAddCart = () => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cartList")) || [];

    const isProductDataInsideLocalStorage = !localStorageCartItems.find(
      (product) => product.id === productData.id
    );

    setCartList((prev) =>
      !!prev.find((product) => product.id === productData.id)
        ? [...prev]
        : [...prev, productData]
    );

    if (isProductDataInsideLocalStorage) {
      localStorage.setItem(
        "cartList",
        JSON.stringify([...localStorageCartItems, productData])
      );

      alert(`Hai aggiunto ${productData.title} al carrello!`);
    } else {
      alert(`Attenzione, il prodotto ${productData.title} è già presente nel carrello!`);
    }

    setModalContext((prev) => ({
      ...prev,
      isVisibile: false,
    }));
  };

  const onHandleImageClick = (imgUrl) => {
    setGalleryVisible(true);
    setSelectedPhoto(() => imgUrl);
  };

  return (
    <div className="ProductModal">
      {isGalleryVisible ? (
        <GalleryModal
          imgUrl={selectedPhoto}
          imgAlt={selectedPhoto}
          setGalleryVisible={setGalleryVisible}
        />
      ) : (
        <div className="ProductModal__content">
          <div className="ProductModal__text">
            <h1>{productData.title}</h1>
            <p>{productData.description}</p>
            <div className="ProductModal__text--info">
              <span>{productData.category}</span>
              <span>{productData.price}</span>
            </div>
          </div>
          <div className="ProductModal__gallery">
            {productData.images.map((image) => (
              <img className="ProductModal__gallery-img"
                onClick={() => onHandleImageClick(image)}
                src={image}
                alt={image}
                key={image}
              />
            ))}
          </div>
          <button onClick={onHandleAddCart} className="ProductModal--cart">Aggiungi al carrello <AiOutlineShoppingCart /> </button>
          <button onClick={onHandleClose} className="ProductModal--close">
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductModal;