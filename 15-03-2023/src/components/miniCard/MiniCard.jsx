import "./index.css";

//mi definisco il click di ogni singola minicard

const MiniCard = ({ imgSrc, imgAlt }) => {
  const onHandleClick = () => window.open(imgSrc, "_blank");

  return (
    <img
      onClick={onHandleClick}
      className="MiniCard"
      src={imgSrc}
      alt={imgAlt}
    />
  );
};

export default MiniCard;