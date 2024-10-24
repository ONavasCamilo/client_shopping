import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const id = searchParam.get("id");
  console.log(id);
  return <></>;
};

export default Product;
