import style from "./SubtitleComponent.module.css";

const SubtitleComponent = ({text}) => {
    return (
        <h2 className={style.h2__subtitle}>{text}</h2>
    )
};

export default SubtitleComponent;
