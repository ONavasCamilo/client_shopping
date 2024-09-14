import Button from "../../components/buttons/Button";
import InputText from "../../components/inputText/InputText";
import LineDiv from "../../components/lineDiv/LineDiv";
import SectionFlexDirection from "../../components/sections/SectionFlexDirection";
import TermsAndConditions from "../../components/termsAndConditions/TermsAndConditions";
import TitleComponent from "../../components/title/TitleComponent";
import style from "./Register.module.css";

const Register = () => {
  return (
    <main>
      <SectionFlexDirection>
        <TitleComponent text="REGISTRARSE" />
        <InputText placeholder="Correo electrónico" />
        <InputText placeholder="Nombre" />
        <InputText placeholder="Apellidos" />
        <InputText placeholder="Contraseña" />
        <TermsAndConditions />
        <Button text="Crear una cuenta" />
        <LineDiv />
        <p className={style.p__ya_tienes_una_cuenta}>¿Ya tienes una cuenta?</p>
        <Button text="Login" color="white" />
      </SectionFlexDirection>
    </main>
  );
};

export default Register;
