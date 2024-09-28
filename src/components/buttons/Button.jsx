import { useNavigate } from "react-router-dom";
import style from "./Button.module.css";
import { useSetAuthContext } from "../../providers/UserProvider";
import { useMessageContext } from "../../providers/MessageGlobalProvider";

const Button = ({ text, color, type, navigateOnClick, logout }) => {
  const { handleLogoutAuthContext } = useSetAuthContext();
  const navigate = useNavigate();

  const { showMessage } = useMessageContext();

  const buttonClass =
    color === "white" ? style.button__white : style.button__black;

  const handleClick = () => {
    if (logout) {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("detailsUser");
      window.sessionStorage.removeItem("token");
      handleLogoutAuthContext();
      showMessage("Sesión cerrada con éxito");
      navigate("/");
    } else if (navigateOnClick) {
      navigate(navigateOnClick);
    }
  };

  return (
    <button className={buttonClass} type={type} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
