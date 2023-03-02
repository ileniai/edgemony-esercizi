import { useState } from "react";
import QuoteList from "./components/quoteList/QuoteList"
import Header from "./components/header"
import Footer from "./components/footer"
import Slider from "./components/slider"
import Modal from "./components/modal";
import "./app.css";

const App = () => {
  const [isDarkModal, setDarkModal] = useState(true);
  const [isModalOpen, setModalOpen] = useState(true);


  return (
    <div className={`App ${isDarkModal && "dark-mode"}`}>
      <Header />
      <Slider />
     <QuoteList />
     <Footer />
      {isModalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
      <button
        className="change-mode"
        onClick={() => setDarkModal((prev) => !prev)}
      >
        {isDarkModal ? "💡" : "🌙"}
      </button>
    </div>
  );
};

export default App;