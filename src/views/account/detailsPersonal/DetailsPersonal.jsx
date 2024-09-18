import { useState } from "react";
import Button from "../../../components/buttons/Button";
import InputTextLogin from "../../../components/inputText/InputText";
import SectionFlexDirection from "../../../components/sections/SectionFlexDirection";
import SubtitleComponent from "../../../components/subtitle/SubtitleComponent";
import TitleComponent from "../../../components/title/TitleComponent";
import { useAuthContext, useSetAuthContext } from "../../../providers/UserProvider";
import axios from "axios";
import { VITE_API_USERS_ADDDETAILSUSER, VITE_API_USERS_UPDATE_DETAILSUSER } from "../../../config/env.config";

const DetailsPersonal = () => {
  const { user, token, detailsUser } = useAuthContext();
  const { handleOnAuthContext } = useSetAuthContext();

  const initialState = {
    detailsName: detailsUser?.detailsName || "",
    detailsLastname: detailsUser?.detailsLastname || "",
    address: detailsUser?.address || "",
    postalCode: detailsUser?.postalCode || "",
    location: detailsUser?.location || "",
    country: detailsUser?.country || "",
    phone: detailsUser?.phone || "",
  }

  const [detailsData, setDetailsData] = useState(initialState);

  const API_CALL = detailsUser?.detailsName
    ? VITE_API_USERS_UPDATE_DETAILSUSER + user.id
    : VITE_API_USERS_ADDDETAILSUSER + user.id;
  const method = detailsUser?.detailsName ? "PUT" : "POST";

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method,
        url: API_CALL,
        data: detailsData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedDetailsUser = response.data.detailUser;
      window.localStorage.setItem("detailsUser", JSON.stringify(updatedDetailsUser));
      handleOnAuthContext(true, user, token, updatedDetailsUser);
      setDetailsData(initialState)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        <SectionFlexDirection>
          <TitleComponent text="DATOS PERSONALES" />
          <InputTextLogin
            placeholder="Nombre"
            name="name"
            type="text"
            value={user.name}
          />
          <InputTextLogin
            placeholder="Apellidos"
            name="lastname"
            type="text"
            value={user.lastname}
          />
          <SubtitleComponent text="Dirección de entrega por defecto" />
          <InputTextLogin
            placeholder="Nombre"
            name="detailsName"
            type="text"
            value={detailsData.detailsName}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Apellidos"
            name="detailsLastname"
            type="text"
            value={detailsUser?.detailsLastname}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Dirección"
            name="address"
            type="text"
            value={detailsUser?.address}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Código postal"
            name="postalCode"
            type="text"
            value={detailsUser?.postalCode}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Localidad"
            name="location"
            type="text"
            value={detailsUser?.location}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="País"
            name="country"
            type="text"
            value={detailsUser?.country}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Teléfono"
            name="phone"
            type="text"
            value={detailsUser?.phone}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <Button text="Limpiar" color="white" />
          <Button text="Guardar cambios" color="black" type="submit" />
        </SectionFlexDirection>
      </form>
    </main>
  );
};

export default DetailsPersonal;
