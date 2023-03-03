//import {useState} from "react"
import "./index.css";


const QuoteCard = ({ quoteData, setSingleQuoteModal }) => {

  //const [setModalEvent] = useState(false);

  

  const onImageClick = () => {
    //setModalEvent((prev)=>!prev)
    setSingleQuoteModal(() => quoteData);
  };

  return (
    <div className="QuoteCard">
      <img onClick={onImageClick} src={"https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=800"} alt="Quotes" />
      <div className="QuoteCard__text-content">
        <hr />
        <h4 className="author">{quoteData.author}</h4>

      </div>
    </div>
  );
};

export default QuoteCard;

//<p>{quoteData.quote}</p>