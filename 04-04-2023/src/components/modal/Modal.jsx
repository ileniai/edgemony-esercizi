import { randomHSLA } from "../../utils/funcs";
import styles from "./index.module.scss";

const Modal = ({setGeneralModalContext}) => {
    const onHandleClick = () =>
  setGeneralModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));
     return(
        <div className={styles.Modal} >
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Cupiditate quo laudantium harum aliquam eligendi earum asperiores! 
            Nulla tempora asperiores perspiciatis nam recusandae consequuntur 
            porro veritatis? Ex, sint. </p>
        <button className={styles.btnClose} onClick={onHandleClick}>X</button>
      </div>
  );
};
 
export default Modal