import style from "./DivCardComponent.module.css";

const DivCardComponent = ({ imgSrc, imgAlt, title, price }) => {
  return (
    <div className={style.div__card}>
      <img src={imgSrc} alt={imgAlt} className={style.image__card}/>
      <p className={style.title__card}>{title}</p>
      <p className={style.price__card}>{price}</p>
    </div>
  );
};

export default DivCardComponent;
