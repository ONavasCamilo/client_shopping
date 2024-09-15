import Button from "../../../components/buttons/Button";
import InputTextLogin from "../../../components/inputText/InputText";
import SectionFlexDirection from "../../../components/sections/SectionFlexDirection";
import SubtitleComponent from "../../../components/subtitle/SubtitleComponent";
import TitleComponent from "../../../components/title/TitleComponent";
import style from "./DetailsPersonal.module.css";

const DetailsPersonal = () => {
    return (
        <main>
            <SectionFlexDirection>
                <TitleComponent text="DATOS PERSONALES"/>
                <InputTextLogin placeholder="Nombre" name="name" type="text"/>
                <InputTextLogin placeholder="Apellidos" name="lastname" type="text"/>
                <SubtitleComponent text="Dirección de entrega por defecto"/>
                <InputTextLogin placeholder="Nombre" name="detailName" type="text"/>
                <InputTextLogin placeholder="Apellidos" name="detailLastname" type="text"/>
                <InputTextLogin placeholder="Dirección" name="address" type="text"/>
                <InputTextLogin placeholder="Código postal" name="postalCode" type="text"/>
                <InputTextLogin placeholder="Localidad" name="location" type="text"/>
                <InputTextLogin placeholder="País" name="country" type="text"/>
                <InputTextLogin placeholder="Teléfono" name="phone" type="text"/>
                <Button text="Limpiar" color="white"/>
                <Button text="Guardar cambios" color="black"/>
            </SectionFlexDirection>
        </main>
    )
}

export default DetailsPersonal;