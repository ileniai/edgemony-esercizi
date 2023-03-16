import { useState } from "react";
import CardList from "./components/cardList";
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
  const [modalContext, setModalContext] = useState ({
    productData: {},
    isVisibile: false,
  })


  return (
    <div className="App">
      <Navbar 
      setSearchInputValue={setSearchInputValue}/>
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
      />
      )}
    </div>
  );
}

export default App;