import { NavLink, useNavigate } from "react-router-dom";
import style from "./Menu.module.css";
import { motion } from "framer-motion";
import {
  useAuthContext,
  useSetAuthContext,
} from "../../providers/UserProvider";

const Menu = ({ isOpenMenu, setIsOpenMenu }) => {
  const { user } = useAuthContext();
  const { handleLogoutAuthContext } = useSetAuthContext();

  const navigate = useNavigate();

  const getNavLinkClassName = ({ isActive, isPending }) => {
    if (isPending) {
      return style.menu__navlink;
    } else if (isActive) {
      return style.navlink_active;
    } else {
      return style.menu__navlink;
    }
  };

  const onClickLogout = () => {
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
          <p>SUDADERAS</p>
          <p>CAMISETAS</p>
          <p>ACCESORIOS</p>
        </div>
        <div>
          <p className={style.p__strong}>Carrito</p>
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
      <div className={style.background__openMenu}></div>
    </motion.div>
  );
};

export default Menu;
