import { NavLink, useNavigate } from "react-router-dom";
import style from "./Menu.module.css";
import { motion } from "framer-motion";
import {
  useAuthContext,
  useSetAuthContext,
} from "../../providers/UserProvider";
import getNavLinkClassName from "./getNavLinkClassName.function";

const Menu = ({ isOpenMenu, setIsOpenMenu }) => {
  const { user } = useAuthContext();
  const { handleLogoutAuthContext } = useSetAuthContext();

  const navigate = useNavigate();

  const onClickLogout = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("detailsUser");
    window.sessionStorage.removeItem("token");
    handleLogoutAuthContext();
    setIsOpenMenu(false);
    navigate("/");
  };

  return (
    <motion.div
      initial={{ left: isOpenMenu ? "0px" : "-200px" }}
      animate={{ left: isOpenMenu ? "0px" : "-200px" }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className={isOpenMenu ? style.menu_cont : style.hide}
    >
      <div className={style.menu__div}>
        <NavLink
          to="/"
          onClick={() => setIsOpenMenu(false)}
          className={getNavLinkClassName}
        >
          <p className={style.p__strong}>Home</p>
        </NavLink>
        <div className={style.div__products}>
          <NavLink
            to="sweatshirts"
            className={getNavLinkClassName}
            onClick={() => setIsOpenMenu(false)}
          >
            <p>SUDADERAS</p>
          </NavLink>
          <NavLink
            to="tshirts"
            className={getNavLinkClassName}
            onClick={() => setIsOpenMenu(false)}
          >
            <p>CAMISETAS</p>
          </NavLink>
          <NavLink
            to="accesories"
            className={getNavLinkClassName}
            onClick={() => setIsOpenMenu(false)}
          >
            <p>ACCESORIOS</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/car"
            onClick={() => setIsOpenMenu(false)}
            className={getNavLinkClassName}
          >
            <p className={style.p__strong}>Carrito</p>
          </NavLink>
          {user && user.name ? (
            <p className={style.p__strong} onClick={onClickLogout}>
              Cerrar sesión
            </p>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={() => setIsOpenMenu(false)}
                className={getNavLinkClassName}
              >
                <p className={style.p__strong}>Login</p>
              </NavLink>
              <NavLink
                to="/register"
                onClick={() => setIsOpenMenu(false)}
                className={getNavLinkClassName}
              >
                <p className={style.p__strong}>Registrarse</p>
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div
        className={style.background__openMenu}
        onClick={() => setIsOpenMenu(false)}
      ></div>
    </motion.div>
  );
};

export default Menu;
