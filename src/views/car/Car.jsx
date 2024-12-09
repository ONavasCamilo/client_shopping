import Button from "../../components/buttons/Button";
import LineDiv from "../../components/lineDiv/LineDiv";
import TitleComponent from "../../components/title/TitleComponent";
import { useCartContext } from "../../providers/CartProvider";
import style from "./Car.module.css";
import iconBagAdd from "/iconBagAdd.svg";
import iconEquis from "/iconEquis.svg";

const Car = () => {
  const car = useCartContext();

  return (
    <>
      {car.length ? (
        <main className={style.main__car_length}>
          <TitleComponent text="SU CARRITO" />
          {car.map((product) => (
            <div className={style.div__product} key={product.id}>
              <img
                src={product.imgUrl}
                alt={product.name}
                className={style.div__product_img}
              />
              <p className={style.div__name}>{product.name}</p>
              <img src={iconEquis} alt="" className={style.div__icon_equis}/>
              <div className={style.div__items}>
              <p className={style.div__weight}>0.600kg</p>
              <p className={style.div__quantity}>Cantidad: 1</p>
              </div>
              <p className={style.div__price}>{product.price}€</p>
              <LineDiv />
            </div>
          ))}
        </main>
      ) : (
        <main className={style.main__car}>
          <img src={iconBagAdd} alt="bagAdd" className={style.img__bag_add} />
          <h4>Tu carrito parece vacío</h4>
          <p>Agregue artículos a su carrito.</p>
          <Button text="Seguir comprando" color="black" navigateOnClick="/" />
        </main>
      )}
    </>
  );
};

export default Car;
