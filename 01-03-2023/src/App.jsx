import QuoteList from "./components/quoteList/QuoteList"
import Gallery from "./components/gallery"
import Header from "./components/header"
import Footer from "./components/footer"
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Gallery />
     <QuoteList />
     <Footer />
    </div>
  );
};

export default App;
