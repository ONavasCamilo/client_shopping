import { useNavigate } from "react-router-dom";
import style from "./Button.module.css";
import { useSetAuthContext } from "../../providers/UserProvider";
import { useMessageContext } from "../../providers/MessageGlobalProvider";
import {
  useCartContext,
  useSetCartContext,
} from "../../providers/CartProvider";

const Button = ({
  text,
  color,
  type,
  navigateOnClick,
  logout,
  onClickAddCart,
}) => {
  const { handleLogoutAuthContext } = useSetAuthContext();
  const navigate = useNavigate();

  const { showMessage } = useMessageContext();
  const { addToCart } = useSetCartContext();
  const car = useCartContext();

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

  const handleOnClickAdd = () => {
    addToCart(onClickAddCart);
  };

  return (
    <button className={buttonClass} type={type} onClick={onClickAddCart ? handleOnClickAdd : handleClick}>
      {text}
    </button>
  );
};

export default Button;
