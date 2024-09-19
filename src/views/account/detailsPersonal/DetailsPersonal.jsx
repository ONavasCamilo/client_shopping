import { useEffect, useState } from "react";
import Button from "../../../components/buttons/Button";
import InputTextLogin from "../../../components/inputText/InputText";
import SectionFlexDirection from "../../../components/sections/SectionFlexDirection";
import SubtitleComponent from "../../../components/subtitle/SubtitleComponent";
import TitleComponent from "../../../components/title/TitleComponent";
import {
  useAuthContext,
  useSetAuthContext,
} from "../../../providers/UserProvider";
import axios from "axios";
import {
  VITE_API_USERS_ADDDETAILSUSER,
  VITE_API_USERS_UPDATE,
  VITE_API_USERS_UPDATE_DETAILSUSER,
} from "../../../config/env.config";

const DetailsPersonal = () => {
  const { user, token, detailsUser } = useAuthContext();
  const { handleOnAuthContext } = useSetAuthContext();

  const initialStateUser = {
    name: user.name || "",
    lastname: user.lastname || "",
  };

  const initialStateDetails = {
    detailsName: detailsUser?.detailsName || "",
    detailsLastname: detailsUser?.detailsLastname || "",
    address: detailsUser?.address || "",
    postalCode: detailsUser?.postalCode || "",
    location: detailsUser?.location || "",
    country: detailsUser?.country || "",
    phone: detailsUser?.phone || "",
  };

  const [userData, setUserData] = useState(initialStateUser);
  const [detailsData, setDetailsData] = useState(initialStateDetails);

  const API_CALL = detailsUser?.detailsName
    ? VITE_API_USERS_UPDATE_DETAILSUSER + user.id
    : VITE_API_USERS_ADDDETAILSUSER + user.id;
  const method = detailsUser?.detailsName ? "PUT" : "POST";

  useEffect(() => {
    if (user) {
      setUserData({
        name: user.name || "",
        lastname: user.lastname || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (detailsUser) {
      setDetailsData({
        detailsName: detailsUser?.detailsName || "",
        detailsLastname: detailsUser?.detailsLastname || "",
        address: detailsUser?.address || "",
        postalCode: detailsUser?.postalCode || "",
        location: detailsUser?.location || "",
        country: detailsUser?.country || "",
        phone: detailsUser?.phone || "",
      });
    }
  }, [detailsUser]);

  if (!user || !token) {
    return <p>Cargando...</p>;
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const hasUserDataChanged =
      userData.name !== initialStateUser.name ||
      userData.lastname !== initialStateUser.lastname;

    const hasDetailsDataChanged = Object.keys(detailsData).some(
      (key) => detailsData[key] !== initialStateDetails[key]
    );

    let apiCallExecuted = false;

    if (hasDetailsDataChanged) {
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
        window.localStorage.setItem(
          "detailsUser",
          JSON.stringify(updatedDetailsUser)
        );
        handleOnAuthContext(true, user, token, updatedDetailsUser);
        setDetailsData(initialStateDetails);
        apiCallExecuted = true;
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (hasUserDataChanged) {
      try {
        const response = await axios.put(
          VITE_API_USERS_UPDATE + user.id,
          userData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const updatedUser = response.data;
        window.localStorage.setItem("user", JSON.stringify(updatedUser));
        setUserData(initialStateUser)
        apiCallExecuted = true;
      } catch (error) {
        console.log("Error:", error);
      }
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
            userData={userData}
            setUserData={setUserData}
          />
          <InputTextLogin
            placeholder="Apellidos"
            name="lastname"
            type="text"
            userData={userData}
            setUserData={setUserData}
          />
          <SubtitleComponent text="Dirección de entrega por defecto" />
          <InputTextLogin
            placeholder="Nombre"
            name="detailsName"
            type="text"
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Apellidos"
            name="detailsLastname"
            type="text"
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Dirección"
            name="address"
            type="text"
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Código postal"
            name="postalCode"
            type="text"
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Localidad"
            name="location"
            type="text"
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="País"
            name="country"
            type="text"
            userData={detailsData}
            setUserData={setDetailsData}
          />
          <InputTextLogin
            placeholder="Teléfono"
            name="phone"
            type="text"
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
