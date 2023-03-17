import { useState } from "react";
import CardList from "./components/cardList";
import ModalCart from "./components/modalCart";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar";
import MiniCardList from "./components/miniCardList";
import ProductModal from "./components/productModal";
import "./App.css";

/*const obj = 
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    };*/


function App({setSearchInputValue}) {

  const [cartList, setCartList] = useState(
    
    JSON.parse(localStorage.getItem("cartList")) || []
    
  );


  const [modalContext, setModalContext] = useState ({
    productData: {},
    isVisibile: false,
  })

  const [modalCartVisibility, setModalCartVisibility] = useState (false)

  const localStorageCartList =
    window !== "undefined" &&
    JSON.parse(localStorage.getItem("cartList") || "[]").length;

  return (
    <div className="App">
      <Navbar 
      cartListLength={localStorageCartList || cartList.length}
      setSearchInputValue={setSearchInputValue}
      setModalCartVisibility={setModalCartVisibility}
      />
      <Hero />
      <MiniCardList />
      <CardList title="Technology" endpoint="/products?limit=10"
      setModalContext = {setModalContext}/>
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10"
      setModalContext = {setModalContext}/>
      <Footer />
      {modalContext.isVisibile && (
      <ProductModal 
      productData={modalContext.productData}
      setModalContext = {setModalContext}
      setCartList={setCartList}
      />
      )}
      {modalCartVisibility && (
        <ModalCart cartList={cartList} setCartList={setCartList} />
      )}
    </div>
  );
}

export default App;