import Button from "../../components/buttons/Button";
import LineDiv from "../../components/lineDiv/LineDiv";
import InputText from "../../components/inputText/InputText";
import SectionFlexDirection from "../../components/sections/SectionFlexDirection";
import TitleComponent from "../../components/title/TitleComponent";
import style from "./Login.module.css";

const Login = () => {
  return (
    <main>
      <SectionFlexDirection>
        <TitleComponent text="LOGIN" />
        <InputText placeholder="Correo electrónico" />
        <InputText placeholder="Contraseña" />
        <span className={style.span__olvidaste_contraseña}>
          ¿Olvidaste tu contraseña?
        </span>
        <Button text="Login" color="black" />
        <LineDiv />
        <p className={style.p__no_tienes_una_cuenta}>¿No tienes una cuenta?</p>
        <Button text="Crear una cuenta" color="white" navigateOnClick="/register"/>
      </SectionFlexDirection>
    </main>
  );
};

export default Login;
