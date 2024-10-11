import Button from "../../components/buttons/Button";
import DivClickeable from "../../components/divClickeable/DivClickeable";
import LineDiv from "../../components/lineDiv/LineDiv";
import SectionFlexDirection from "../../components/sectionFlexDirection/SectionFlexDirection";
import TitleComponent from "../../components/title/TitleComponent";
import { useAuthContext } from "../../providers/UserProvider";

const Account = () => {
  const { user } = useAuthContext();

  return (
    <main>
      <SectionFlexDirection>
        <TitleComponent
          text={` HOLA, ${user ? user.name.toUpperCase() : ""}`}
        />
        <DivClickeable h4Text="Mis pedidos" pText="Rastrea tus pedidos aquí." navigateOnClick="/orders"/>
        <LineDiv />
        <DivClickeable
          h4Text="Detalles personales"
          pText="Edite aquí sus datos personales, como la dirección de correo electrónico y la contraseña."
          navigateOnClick="/detailsPersonal"
        />
        <LineDiv />
        <DivClickeable
          h4Text="Cambiar la contraseña"
          pText="Cambie su contraseña aquí."
          navigateOnClick="/changePassword"
        />
        <LineDiv />
        <Button text="Cerrar sesión" color="black" logout={true}/>
      </SectionFlexDirection>
    </main>
  );
};

export default Account;
