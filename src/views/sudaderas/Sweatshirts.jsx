import DivCardComponent from "../../components/divCardComponent/DivCardComponent";
import SectionFlexDirection from "../../components/sections/SectionFlexDirection";
import style from "./Sweatshirts.module.css";
import samsungEVO from "../../../public/samsungEVO.jpg";

const Sweatshirts = () => {
  return (
    <SectionFlexDirection>
      <h1 className={style.title__sweatshirts}>SUDADERAS</h1>
      <section className={style.section__cards}>
        <DivCardComponent
          imgSrc={samsungEVO}
          title="Camisa negra"
          price="29.99"
        />
        <DivCardComponent
          imgSrc={samsungEVO}
          title="Camisa negra"
          price="29.99"
        />
        <DivCardComponent
          imgSrc={samsungEVO}
          title="Camisa negra"
          price="29.99"
        />
        <DivCardComponent
          imgSrc={samsungEVO}
          title="Camisa negra"
          price="29.99"
        />
        <DivCardComponent
          imgSrc={samsungEVO}
          title="Camisa negra"
          price="29.99"
        />
        <DivCardComponent
          imgSrc={samsungEVO}
          title="Camisa negra"
          price="29.99"
        />
      </section>
    </SectionFlexDirection>
  );
};

export default Sweatshirts;
