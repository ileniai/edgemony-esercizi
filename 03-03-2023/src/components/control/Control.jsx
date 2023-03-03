import Button from "../button";
import "./index.css";

const Control = ({ quoteListAuthor }) => {
  const getQuotesNum = () =>
    alert(`Il numero esatto di autori corrisponde a: ${quoteListAuthor}`);

  return (
    <div className="Control">
      <Button
        text="Numero di autori"
        clickFunc={getQuotesNum}
        isDisabled={false}
      />
    </div>
  );
};

export default Control;