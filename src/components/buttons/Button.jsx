import style from "./ButtonBlack.module.css"

const ButtonBlack = ({ text, color }) => {
  const buttonClass =  color === 'white' ? style.button__white : style.button__black;
  return <button className={buttonClass}>{text}</button>;
};

export default ButtonBlack;
