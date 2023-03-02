import {useState} from "react"
import "./index.css";


const QuoteCard = ({ quoteData, setSingleQuoteModal }) => {

  const [setModalEvent] = useState(false);

  const onImageClick = () => {
    setModalEvent((prev)=>!prev)
    setSingleQuoteModal(() => quoteData);
  };

  return (
    <div className="QuoteCard">
      <img onClick={onImageClick} src={quoteData.image} alt="Quotes" />
      <div className="QuoteCard__text-content">
        <h4>{quoteData.quotes}</h4>
        <hr />
        <p className="author">{quoteData.author}</p>
        
      </div>
    </div>
  );
};

export default QuoteCard;