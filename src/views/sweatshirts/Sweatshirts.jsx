import DivCardComponent from "../../components/divCardComponent/DivCardComponent";
import SectionFlexDirection from "../../components/sections/SectionFlexDirection";
import style from "./Sweatshirts.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { VITE_API_PRODUCTS_LIST } from "../../config/env.config";

const Sweatshirts = () => {
  const [dataProducts, setDataProducts] = useState([]);
  console.log(dataProducts);

  useEffect(() => {
    axios
      .get(VITE_API_PRODUCTS_LIST, {
        params: {
          category: "sudaderas",
        },
      })
      .then((response) => {
        setDataProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SectionFlexDirection>  
      <h1 className={style.title__sweatshirts}>SUDADERAS</h1>
      <section className={style.section__cards}>
        {dataProducts
          ? dataProducts.map((product) => (
              <DivCardComponent
                key={product.id}
                imgSrc={product.imgUrl}
                title={product.name}
                price={product.price}
              />
            ))
          : null}
      </section>
    </SectionFlexDirection>
  );
};

export default Sweatshirts;
