import { useState } from "react";
import Button from "../../components/buttons/Button";
import LineDiv from "../../components/lineDiv/LineDiv";
import InputText from "../../components/inputText/InputText";
import SectionFlexDirection from "../../components/sectionFlexDirection/SectionFlexDirection";
import TitleComponent from "../../components/title/TitleComponent";
import style from "./Login.module.css";
import { useSetAuthContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { VITE_API_AUTH_SIGNIN } from "../../config/env.config";
import { useMessageContext } from "../../providers/MessageGlobalProvider";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialState);

  const { handleOnAuthContext } = useSetAuthContext();
  const { showMessage } = useMessageContext();

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post(VITE_API_AUTH_SIGNIN, userData)
      .then(({ data }) => {
        const { user, token } = data;
        handleOnAuthContext(true, user, token, user.detailUser);
        window.localStorage.setItem("user", JSON.stringify(user));
        window.sessionStorage.setItem("token", token);
        window.localStorage.setItem("detailsUser", JSON.stringify(user.detailUser));
        setUserData(initialState);
        showMessage("Ha iniciado sesión correctamente");
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
