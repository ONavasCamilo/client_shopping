import SectionFlexDirection from "../../../components/sectionFlexDirection/SectionFlexDirection";
import DivCardComponent from "../../../components/divCardComponent/DivCardComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { VITE_API_PRODUCTS_LIST } from "../../../config/env.config";
import SectionGridCard from "../../../components/sectionGridCards/SectionGridCard";
import style from "../style.module.css";
import { Link } from "react-router-dom";
import TitleCenter from "../../../components/titleCenter/TitleCenter";

const Accesories = () => {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    axios
      .get(VITE_API_PRODUCTS_LIST, {
        params: {
          category: "accesorios",
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
      <TitleCenter text="ACCESORIOS" />
      <SectionGridCard>
        {dataProducts
          ? dataProducts.map((product) => (
              <Link
                to={`/product?id=${product.id}`}
                key={product.id}
                className={style.link__product}
              >
                <DivCardComponent
                  key={product.id}
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

export default Accesories;
