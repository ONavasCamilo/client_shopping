import { useNavigate } from "react-router-dom";
import style from "./Button.module.css";
import { useSetAuthContext } from "../../providers/UserProvider";

const Button = ({ text, color, type, navigateOnClick, logout }) => {
  const { handleLogoutAuthContext } = useSetAuthContext();
  const navigate = useNavigate();

  const buttonClass =
    color === "white" ? style.button__white : style.button__black;

    const handleClick = () => {
      if (logout) {
        handleLogoutAuthContext();
        navigate("/")
      } else if (navigateOnClick) {
        navigate(navigateOnClick);
      }
    };

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
