import { AiOutlineHome } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { GrLogin } from "react-icons/gr";
import { GrLogout } from "react-icons/gr";
import { useState } from "react";
import "./index.css";

const Navbar = ({setSearchInputValue}) => {
  const [inputValue, setInputValue] = useState("");
  

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault(),
    setSearchInputValue(() => inputValue)
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
      <div className="Navbar__cart">
        <p> 🛒</p>
      </div>
    </div>
  );
};

export default Navbar;