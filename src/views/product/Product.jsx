import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SectionFlexDirection from "../../components/sectionFlexDirection/SectionFlexDirection";
import { VITE_API_PRODUCTS_ONE } from "../../config/env.config";
import SubtitleComponent from "../../components/subtitle/SubtitleComponent";
import style from "./Product.module.css";
import Button from "../../components/buttons/Button";
import LineDiv from "../../components/lineDiv/LineDiv";

const Product = () => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const id = searchParam.get("id");

  const [product, setProduct] = useState({});
  const [groupProduct, setGroupProduct] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    axios
      .get(VITE_API_PRODUCTS_ONE + id)
      .then((response) => {
        setProduct(response.data.product);
        setGroupProduct(response.data.groupProductsByName);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <SectionFlexDirection>
      <div className={style.product_container}>
        <button className={style.arrow_button}>{"<"}</button>
        <img
          className={style.product_image}
          src={product.imgUrl}
          alt={product.name}
        />
        <button className={style.arrow_button}>{">"}</button>
      </div>
      <SubtitleComponent text={product.name} />
      <p className={style.product_price}>{product.price} €</p>
      <div className={style.div_group__products}>
        {groupProduct.map((productGroup) => (
          <Link key={productGroup.id} to={`/product?id=${productGroup.id}`}>
            <img
              src={productGroup.imgUrl}
              className={
                product.id === productGroup.id
                  ? style.group__products_img_select
                  : style.group__products_img
              }
            ></img>
          </Link>
        ))}
      </div>
      <div className={style.sizes_container}>
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`${style.button_sizes} ${
              selectedSize === size ? `${style.button_selected}` : ""
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      <Button text="Añadir a la cesta" />
      <LineDiv />
    </SectionFlexDirection>
  );
};

export default Product;
