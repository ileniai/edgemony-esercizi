import "./index.css";

const Modal = ({ setModalOpen }) => {
  return (
    <div className="Modal">
      <div className="Modal__content">
        <h3>Sei sicuro di voler continuare?</h3>
        <h4>Accetta i coockie</h4>
        <div className="Modal__content--btns">
          <button className="modalbtn"onClick={() => alert("Se non accetti non entri")}>Annulla</button>
          <button className="modalbtn"onClick={() => setModalOpen((prev) => false)}>Accetta</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;