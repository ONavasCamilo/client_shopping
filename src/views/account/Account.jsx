import style from "./Account.module.css";
import SectionFlexDirection from "../../components/sections/SectionFlexDirection";
import TitleComponent from "../../components/title/TitleComponent";
import { useSelector } from "react-redux";

const Account = () => {

  const userData = useSelector((state) => state.userData);
  const token = useSelector((state) => state.token);

  return (
    <main>
      <SectionFlexDirection>
        <TitleComponent text={`Hola ${userData.name}`}/>
      </SectionFlexDirection>
    </main>
  );
};

export default Account;
