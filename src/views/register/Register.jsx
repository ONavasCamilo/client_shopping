import style from "./Register.module.css";
import { useState } from "react";
import Button from "../../components/buttons/Button";
import InputText from "../../components/inputText/InputText";
import LineDiv from "../../components/lineDiv/LineDiv";
import SectionFlexDirection from "../../components/sections/SectionFlexDirection";
import TermsAndConditions from "../../components/termsAndConditions/TermsAndConditions";
import TitleComponent from "../../components/title/TitleComponent";
import axios from "axios";
import {
  useSetAuthContext,
} from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const initialState = {
    email: "",
    name: "",
    lastname: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);

  const setAuthContext = useSetAuthContext();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://api-shopping-4vo0.onrender.com/api/auth/signup", userData)
      .then(({data}) => {
        const { newUser, token } = data;
        setAuthContext(newUser, token);
        setUserData(initialState);
        navigate("/account")
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        <SectionFlexDirection>
          <TitleComponent text="REGISTRARSE" />
          <InputText
            placeholder="Correo electrónico"
            name="email"
            type="text"
            userData={userData}
            setUserData={setUserData}
          />
          <InputText
            placeholder="Nombre"
            name="name"
            type="text"
            userData={userData}
            setUserData={setUserData}
          />
          <InputText
            placeholder="Apellidos"
            name="lastname"
            type="text"
            userData={userData}
            setUserData={setUserData}
          />
          <InputText
            placeholder="Contraseña"
            name="password"
            type="password"
            userData={userData}
            setUserData={setUserData}
          />
          <TermsAndConditions />
          <Button text="Crear una cuenta" type="submit" />
          <LineDiv />
          <p className={style.p__ya_tienes_una_cuenta}>
            ¿Ya tienes una cuenta?
          </p>
          <Button text="Login" color="white" navigateOnClick="/login" />
        </SectionFlexDirection>
      </form>
    </main>
  );
};

export default Register;
