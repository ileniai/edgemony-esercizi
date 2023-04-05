import { useContext } from "react";
import { Context } from "../../store";
import PopUp from "../popup";
import styles from "./index.module.scss";

const Navbar = () => {
    const { state, dispatch } = useContext(Context);

  const onHandleSubscribeBtn = () =>
    dispatch({ type: "SET_POPUP_VISIBILITY", payload: true });

  return (
    <div className={styles.Navbar}>
      <img src="https://randomuser.me/api/portraits/women/71.jpg" alt=""/>
      <button onClick={onHandleSubscribeBtn}>{"🔔 "}</button>
      {state.isPopUpVisibile && <PopUp />}
    </div>
  );
};

export default Navbar;