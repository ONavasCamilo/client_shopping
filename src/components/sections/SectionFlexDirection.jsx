import style from "./SectionFlexDirection.module.css";

const SectionFlexDirection = ({children}) => {
    return <section className={style.section__flex_direction}>{children}</section>
}

export default SectionFlexDirection;