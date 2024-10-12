import SectionFlexDirection from "../../components/sectionFlexDirection/SectionFlexDirection";
import DivCardComponent from "../../components/divCardComponent/DivCardComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { VITE_API_PRODUCTS_LIST } from "../../config/env.config";
import TitleCenter from "../../components/titleCenter/TitleCenter";
import SectionGridCard from "../../components/sectionGridCards/SectionGridCard";

const Tshirts = () => {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    axios
      .get(VITE_API_PRODUCTS_LIST, {
        params: {
          category: "camisetas",
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
      <TitleCenter text="CAMISETAS" />
      <SectionGridCard>
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
      </SectionGridCard>
    </SectionFlexDirection>
  );
};

export default Tshirts;
