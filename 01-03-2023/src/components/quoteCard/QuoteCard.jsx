import "./index.css";

const QuoteCard = ({ quoteData }) => {

  return (
    <div className="QuoteCard">
      <img src={quoteData.image} alt="Quotes" />
      <div className="QuoteCard__text-content">
        <h4>{quoteData.quotes}</h4>
        <hr />
        <p className="author">{quoteData.author}</p>
        
      </div>
    </div>
  );
};

export default QuoteCard;