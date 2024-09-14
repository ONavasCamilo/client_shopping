import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";

const Menu = ({ isOpenMenu }) => {
  return (
    <div className={isOpenMenu ? style.menu_cont : style.hide}>
      <div className={style.menu__div}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? style.menu__navlink
              : isActive
              ? style.navlink_active
              : ""
          }
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
          <NavLink to="/login">
            <p className={style.p__strong}>Login</p>
          </NavLink>
          <NavLink to="/register">
          <p className={style.p__strong}>Registrarse</p>
          </NavLink>

        </div>
      </div>
      <div className={style.background__openMenu}></div>
    </div>
  );
};

export default Menu;
