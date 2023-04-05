import { useContext } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const PopUp = () =>{
    const { state, dispatch } = useContext(Context);

    const onHandleClosePopUp = () =>
    dispatch({ type: "SET_POPUP_VISIBILITY", payload: false });

    const onChangeInputUsername = (e) =>
    dispatch({ type: "SET_TEMP_USERNAME", payload: e.target.value });

    const onChangeInputPassword = (e) =>
    dispatch({ type: "SET_TEMP_PASSWORD", payload: e.target.value });

    return(
        <div className={styles.PopUp}>
        <div onClick={onHandleClosePopUp} className={styles.overlay}></div>
        <form className={styles.content}>
        <h3>Subscribe to premium!</h3>
        <span>By premium membership 🎋</span>
        <input
          value={state.tempTodo.username}
          onChange={onChangeInputUsername}
          type="text"
          placeholder="Username..."
          required
        />
        <input
          value={state.tempTodo.password}
          onChange={onChangeInputPassword}
          type="text"
          placeholder="Password..."
          required
        />
        <input className={styles.subBtn} type="submit" value="Subscribe" />
      </form>
        </div>
    )
}

export default PopUp