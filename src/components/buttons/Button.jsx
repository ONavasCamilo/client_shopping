import style from "./Button.module.css"

const Button = ({ text, color }) => {
  const buttonClass =  color === 'white' ? style.button__white : style.button__black;
  return <button className={buttonClass}>{text}</button>;
};

export default Button;
