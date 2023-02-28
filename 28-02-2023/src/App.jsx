import QuoteList from "./components/quoteList/QuoteList"
import Header from "./components/header"
import Footer from "./components/footer"
import Menu from "./components/menu"
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu type = "Autori 💬 " />
      <Menu type = "Preferiti 🤍 " />
     <QuoteList />
     <Footer />
    </div>
  );
};

export default App;
