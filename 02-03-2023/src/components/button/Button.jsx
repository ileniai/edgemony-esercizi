import "./index.css";

const Button = ({ text, onClick, isDisabled = false }) => {
  return (
    <button
      className={`Button  ${isDisabled ? "disabled" : null}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;