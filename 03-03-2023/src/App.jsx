import { useState } from "react";
import QuoteList from "./components/quoteList/QuoteList"
import Header from "./components/header"
import Footer from "./components/footer"
import Slider from "./components/slider"
import Modal from "./components/modal";
import ImageModal from "./components/imageModal/ImageModal"
import "./app.css";

const App = () => {
  const [isDarkModal, setDarkModal] = useState(true);
  const [isModalOpen, setModalOpen] = useState(true);
  const [singleQuoteModal, setSingleQuoteModal] = useState(null);

  return (
    <div className={`App ${isDarkModal && "dark-mode"}`}>
      <Header />
      <Slider />
     <QuoteList setSingleQuoteModal={setSingleQuoteModal} />
     <Footer />
      <button
        className="change-mode"
        onClick={() => setDarkModal((prev) => !prev)}
      >
        {isDarkModal ? "💡" : "🌙"}
      </button>
      {isModalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
      {singleQuoteModal ? (
        <ImageModal
        setSingleQuoteModal = {setSingleQuoteModal}
        />
      ):null}
    </div>
  );
};

export default App;