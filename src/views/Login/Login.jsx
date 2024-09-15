import { useState } from "react";
import Button from "../../components/buttons/Button";
import LineDiv from "../../components/lineDiv/LineDiv";
import InputText from "../../components/inputText/InputText";
import SectionFlexDirection from "../../components/sections/SectionFlexDirection";
import TitleComponent from "../../components/title/TitleComponent";
import style from "./Login.module.css";
import { useSetAuthContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialState);

  const { handleOnAuthContext } = useSetAuthContext();

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://api-shopping-4vo0.onrender.com/api/auth/signin", userData)
      .then(({ data }) => {
        const { user, token } = data;
        handleOnAuthContext(user, token);
        setUserData(initialState);
        navigate("/account");
      });
  };

  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        <SectionFlexDirection>
          <TitleComponent text="LOGIN" />
          <InputText
            placeholder="Correo electrónico"
            type="text"
            userData={userData}
            setUserData={setUserData}
            name="email"
          />
          <InputText
            placeholder="Contraseña"
            type="password"
            userData={userData}
            setUserData={setUserData}
            name="password"
          />
          <span className={style.span__olvidaste_contraseña}>
            ¿Olvidaste tu contraseña?
          </span>
          <Button text="Login" color="black" />
          <LineDiv />
          <p className={style.p__no_tienes_una_cuenta}>
            ¿No tienes una cuenta?
          </p>
          <Button
            text="Crear una cuenta"
            color="white"
            navigateOnClick="/register"
          />
        </SectionFlexDirection>
      </form>
    </main>
  );
};

export default Login;
