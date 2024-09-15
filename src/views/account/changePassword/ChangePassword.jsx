import Button from "../../../components/buttons/Button";
import InputTextLogin from "../../../components/inputText/InputText";
import SectionFlexDirection from "../../../components/sections/SectionFlexDirection";
import TitleComponent from "../../../components/title/TitleComponent";
import style from "./ChangePassword.module.css";

const ChangePassword = () => {
  return (
    <main>
      <SectionFlexDirection>
        <TitleComponent text="CAMBIAR LA CONTRASEÑA" />
        <InputTextLogin
          placeholder="Contraseña anterior"
          name="oldPassword"
          type="password"
        />
        <InputTextLogin
          placeholder="Nueva contraseña"
          name="newPassword"
          type="password"
        />
        <InputTextLogin
          placeholder="Confirmar nueva contraseña"
          name="confirmPassword"
          type="password"
        />
        <Button text="Enviar petición" color="black"/>
      </SectionFlexDirection>
    </main>
  );
};

export default ChangePassword;
