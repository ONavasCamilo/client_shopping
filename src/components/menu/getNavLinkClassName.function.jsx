import style from "./Menu.module.css";

const getNavLinkClassName = ({ isActive, isPending }) => {
  if (isPending) {
    return style.menu__navlink;
  } else if (isActive) {
    return style.navlink_active;
  } else {
    return style.menu__navlink;
  }
};

export default getNavLinkClassName;
