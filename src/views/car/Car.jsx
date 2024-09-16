import Button from "../../components/buttons/Button";
import style from "./Car.module.css";
import iconBagAdd from "/iconBagAdd.svg";

const Car = () => {
  return (
    <main className={style.main__car}>
        <img src={iconBagAdd} alt="bagAdd" className={style.img__bag_add}/>
      <h4>Tu carrito parece vacío</h4>
      <p>Agregue artículos a su carrito.</p>
      <Button text="Seguir comprando" color="black" navigateOnClick="/" />
    </main>
  );
};

export default Car;
