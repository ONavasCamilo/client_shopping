import style from "./Account.module.css";
import SectionFlexDirection from "../../components/sections/SectionFlexDirection";
import TitleComponent from "../../components/title/TitleComponent";
import { useAuthContext } from "../../providers/UserProvider";

const Account = () => {

  const { user } = useAuthContext();

  return (
    <main>
      <SectionFlexDirection>
        <TitleComponent text={`Hola ${user ? user.name : 'nada'}`}/>
      </SectionFlexDirection>
    </main>
  );
};

export default Account;
