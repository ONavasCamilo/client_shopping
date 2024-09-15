import style from "./InputText.module.css";

const InputTextLogin = ({ placeholder, handleOnChange, name, type }) => {

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={style.button__login}
      onChange={handleOnChange}
      name={name}
    ></input>
  );
};

export default InputTextLogin;
