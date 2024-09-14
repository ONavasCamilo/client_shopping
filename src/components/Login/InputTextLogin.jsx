import style from "./InputTextLogin.module.css"

const InputTextLogin = ({ placeholder }) => {
  return <input type="text" placeholder={placeholder} className={style.button__login} ></input>;
};

export default InputTextLogin;
