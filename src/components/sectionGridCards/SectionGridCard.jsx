import style from "./SectionGridCard.module.css";

const SectionGridCard = ({ children }) => {
  return <section className={style.section__cards}>{children}</section>;
};

export default SectionGridCard;
