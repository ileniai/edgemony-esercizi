import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { GrLogin, GrLogout } from "react-icons/gr";
import { useState } from "react";
import "./index.css";

const Navbar = ({setSearchInputValue, cartListLength, setModalCartVisibility}) => {
  const [inputValue, setInputValue] = useState("");
  
  

  const onHandleInput = (e) => 
  setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault(),
    setSearchInputValue(() => inputValue)
      };

      const onHandleCartClick = () => {
        setModalCartVisibility(()=> true);
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
      <p className="Navbar__cart-cart" onClick={onHandleCartClick}>{cartListLength} <AiOutlineShoppingCart /> </p>
      </div>
    </div>
  );
};

export default Navbar;