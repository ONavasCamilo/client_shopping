import style from "./TitleComponent.module.css";

const TitleComponent = ({ text }) => {
  return <h1 className={style.title__component}>{text}</h1>;
};

export default TitleComponent;
