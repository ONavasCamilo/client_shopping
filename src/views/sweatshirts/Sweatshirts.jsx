import DivCardComponent from "../../components/divCardComponent/DivCardComponent";
import SectionFlexDirection from "../../components/sectionFlexDirection/SectionFlexDirection";
import { useEffect, useState } from "react";
import axios from "axios";
import { VITE_API_PRODUCTS_LIST } from "../../config/env.config";
import TitleCenter from "../../components/titleCenter/TitleCenter";
import SectionGridCard from "../../components/sectionGridCards/SectionGridCard";
import { Link } from "react-router-dom";
import style from "./Sweatshirts.module.css";

const Sweatshirts = () => {
  const [dataProducts, setDataProducts] = useState([]);

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
      <TitleCenter text="SUDADERAS" />
      <SectionGridCard>
        {dataProducts
          ? dataProducts.map((product) => (
              <Link
                to={`/product?id=${product.id}`}
                key={product.id}
                className={style.link__product}
              >
                <DivCardComponent
                  imgSrc={product.imgUrl}
                  title={product.name}
                  price={product.price}
                />
              </Link>
            ))
          : null}
      </SectionGridCard>
    </SectionFlexDirection>
  );
};

export default Sweatshirts;
