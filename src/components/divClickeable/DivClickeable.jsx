import { useNavigate } from "react-router-dom";
import style from "./DivClickeable.module.css";

const DivClickeable = ({ h4Text, pText, navigateOnClick }) => {
    const navigate = useNavigate();

  return (
    <div onClick={() => navigate(navigateOnClick)} className={style.div__clickeable}>
      <h4 className={style.h4__clickeable}>{h4Text}</h4>
      <p className={style.p__clickeable}>{pText}</p>
    </div>
  );
};

export default DivClickeable;
