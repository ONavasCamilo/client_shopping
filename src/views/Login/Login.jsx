import InputTextLogin from "../../components/Login/InputTextLogin";
import style from "./Login.module.css";

const Login = () => {
  return (
    <main>
      <section className={style.section__login}>
        <h1>LOGIN</h1>
        <InputTextLogin placeholder="Correo electrónico" />
        <InputTextLogin placeholder="Contraseña" />
        <span>¿Olvidaste tu contraseña?</span>
        <button type="submit">Login</button>
        <div></div>
        <p>¿No tienes una cuenta?</p>
        <button>Crear una cuenta</button>
      </section>
    </main>
  );
};

export default Login;
