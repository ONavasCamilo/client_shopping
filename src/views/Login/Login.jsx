import ButtonBlack from "../../components/buttons/Button";
import LineDiv from "../../components/lineDiv/LineDiv";
import InputTextLogin from "../../components/login/InputTextLogin";
import TitleComponent from "../../components/title/TitleComponent";
import style from "./Login.module.css";

const Login = () => {
  return (
    <main>
      <section className={style.section__login}>
        <TitleComponent title="LOGIN" />
        <InputTextLogin placeholder="Correo electrónico" />
        <InputTextLogin placeholder="Contraseña" />
        <span className={style.span__olvidaste_contraseña}>¿Olvidaste tu contraseña?</span>
        <ButtonBlack text="Login" color="black"/>
        <LineDiv />
        <p className={style.p__no_tienes_una_cuenta}>¿No tienes una cuenta?</p>
        <ButtonBlack text="Crear una cuenta" color="white"/>
      </section>
    </main>
  );
};

export default Login;
