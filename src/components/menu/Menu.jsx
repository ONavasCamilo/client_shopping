import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";
import { motion } from "framer-motion";

const Menu = ({ isOpenMenu, setIsOpenMenu }) => {
  const getNavLinkClassName = ({ isActive, isPending }) => {
    if (isPending) {
      return style.menu__navlink;
    } else if (isActive) {
      return style.navlink_active;
    } else {
      return style.menu__navlink;
    }
  };

  return (
    <motion.div
      initial={{ left: "-200px" }}
      animate={{ left: isOpenMenu ? "0px" : "-300px" }}
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
        </div>
      </div>
      <div className={style.background__openMenu}></div>
    </motion.div>
  );
};

export default Menu;
