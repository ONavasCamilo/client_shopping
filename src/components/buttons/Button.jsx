import { useNavigate } from 'react-router-dom';
import style from "./Button.module.css";

const Button = ({ text, color, type, navigateOnClick }) => {
  const navigate = useNavigate();

  const buttonClass =
    color === "white" ? style.button__white : style.button__black;

  return (
    <button className={buttonClass} type={type} onClick={() => navigate(navigateOnClick)}> 
      {text}
    </button>
  );
};

export default Button;
