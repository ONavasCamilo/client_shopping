import { useState } from "react";
import Button from "../../../components/buttons/Button";
import InputTextLogin from "../../../components/inputText/InputText";
import SectionFlexDirection from "../../../components/sectionFlexDirection/SectionFlexDirection";
import TitleComponent from "../../../components/title/TitleComponent";
import { VITE_API_USERS_UPDATE_PASSWORD } from "../../../config/env.config";
import { useAuthContext } from "../../../providers/UserProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMessageContext } from "../../../providers/MessageGlobalProvider";

const ChangePassword = () => {
  const { user, token } = useAuthContext();
  const { showMessage } = useMessageContext();

  const initialState = {
    oldpassword: "",
    password: "",
    confirmpassword: "",
  };

  const [passwords, setPasswords] = useState(initialState);

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        VITE_API_USERS_UPDATE_PASSWORD + user.id,
        passwords,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.status === 200) {
        showMessage("Contraseña cambiada correctamente");
        navigate("/account");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <main>
      +
      <form onSubmit={handleOnSubmit}>
        <SectionFlexDirection>
          <TitleComponent text="CAMBIAR LA CONTRASEÑA" />
          <InputTextLogin
            placeholder="Contraseña anterior"
            name="oldpassword"
            type="password"
            userData={passwords}
            setUserData={setPasswords}
          />
          <InputTextLogin
            placeholder="Nueva contraseña"
            name="password"
            type="password"
            userData={passwords}
            setUserData={setPasswords}
          />
          <InputTextLogin
            placeholder="Confirmar nueva contraseña"
            name="confirmpassword"
            type="password"
            userData={passwords}
            setUserData={setPasswords}
          />
          <Button text="Enviar petición" color="black" />
        </SectionFlexDirection>
      </form>
    </main>
  );
};

export default ChangePassword;
