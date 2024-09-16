import { useState } from "react";
import Button from "../../../components/buttons/Button";
import InputTextLogin from "../../../components/inputText/InputText";
import SectionFlexDirection from "../../../components/sections/SectionFlexDirection";
import SubtitleComponent from "../../../components/subtitle/SubtitleComponent";
import TitleComponent from "../../../components/title/TitleComponent";
import { useAuthContext, useSetAuthContext } from "../../../providers/UserProvider";
import axios from "axios";

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
    ? `https://api-shopping-4vo0.onrender.com/api/users/update/detailsUser/${user.id}`
    : `https://api-shopping-4vo0.onrender.com/api/users/addDetailsUser/${user.id}`;
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
            value={detailsData.detailsLastname}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Dirección"
            name="address"
            type="text"
            value={detailsData.address}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Código postal"
            name="postalCode"
            type="text"
            value={detailsData.postalCode}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Localidad"
            name="location"
            type="text"
            value={detailsData.location}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="País"
            name="country"
            type="text"
            value={detailsData.country}
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Teléfono"
            name="phone"
            type="text"
            value={detailsData.phone}
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
