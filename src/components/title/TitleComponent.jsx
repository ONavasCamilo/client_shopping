import style from "./TitleComponent.module.css";

const TitleComponent = ({ title }) => {
  return <h1 className={style.title__component}>{title}</h1>;
};

export default TitleComponent;
