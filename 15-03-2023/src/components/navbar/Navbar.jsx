import { AiOutlineHome } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { GrLogin } from "react-icons/gr";
import { GrLogout } from "react-icons/gr";
import { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // TODO: trasmettere il valore della input (inputValue) all'elemento di ricerca
  };

  return (
    <div className="Navbar">
      <div className="Navbar_account">
        <AiOutlineHome className="Navbar_icon"/>
        <RiAccountCircleLine className="Navbar_icon"/>
        <GrLogin className="Navbar_icon"/>
        <GrLogout className="Navbar_icon"/>
      </div>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="🔍 Cerca prodotto..."
          required
        />
      </form>
    </div>
  );
};

export default Navbar;