import style from "./InputText.module.css";

const InputTextLogin = ({ placeholder, name, type, userData, setUserData, value }) => {

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={style.button__login}
      name={name}
      onChange={handleOnChange}
      value={value}
    ></input>
  );
};

export default InputTextLogin;
