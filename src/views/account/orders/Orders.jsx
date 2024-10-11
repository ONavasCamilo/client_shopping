import SectionFlexDirection from "../../../components/sectionFlexDirection/SectionFlexDirection";
import TitleComponent from "../../../components/title/TitleComponent";
import style from "./Orders.module.css";

const Orders = () => {
    return (
        <main>
            <SectionFlexDirection>
            <TitleComponent text="MIS PEDIDOS"/>
            <p className={style.p__no_results}>No hay resultados</p>
            </SectionFlexDirection>
        </main>
    )
}

export default Orders;