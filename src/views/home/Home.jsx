import style from "./Home.module.css";
import sudaderasHomeImg from "/sudaderasHomeImg.png";
import camisetasHomeImg from "/camisetasHomeImg.png";
import accesoriosHomeImg from "/accesoriosHomeImg.png";
import { NavLink } from "react-router-dom";
import getNavLinkClassName from "../../components/menu/getNavLinkClassName.function";

const Home = () => {
  return (
    <main className={style.main__home}>
      <h1>SHOPPISTYLE</h1>
      <NavLink to="sweatshirts" className={getNavLinkClassName}>
        <section className={style.section__home}>
          <img
            src={sudaderasHomeImg}
            alt="Sudaderas"
            className={style.img__home}
          />
          <h2>SUDADERAS</h2>
        </section>
      </NavLink>
      <NavLink to="tshirts" className={getNavLinkClassName}>
        <section className={style.section__home}>
          <img src={camisetasHomeImg} alt="" className={style.img__home} />
          <h2>CAMISETAS</h2>
        </section>
      </NavLink>
      <NavLink to="accesories" className={getNavLinkClassName}>
        <section className={style.section__home}>
          <img src={accesoriosHomeImg} alt="" className={style.img__home} />
          <h2>ACCESORIOS</h2>
        </section>
      </NavLink>
    </main>
  );
};

export default Home;
