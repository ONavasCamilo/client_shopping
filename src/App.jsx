import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/home/Home";
import Login from "./views/Login/Login";
import Register from "./views/register/Register";
import {
  useAuthContext,
  useSetAuthContext,
} from "./providers/UserProvider";
import DetailsPersonal from "./views/account/detailsPersonal/DetailsPersonal";
import Orders from "./views/account/orders/Orders";
import Account from "./views/account/Account";
import ChangePassword from "./views/account/changePassword/ChangePassword";
import Car from "./views/car/Car";
import { useEffect } from "react";

const App = () => {
  const { login } = useAuthContext();
  const { handleOnAuthContext } = useSetAuthContext();

  const getLocalStorage = () => {
    const userData = window.localStorage.getItem("user");
    const tokenData = window.sessionStorage.getItem("token");
    const detailsData = window.localStorage.getItem("detailsUser");

    if (userData && tokenData) {
    const userDataParse = JSON.parse(userData);
    const detailsUserParse = detailsData ? JSON.parse(detailsData) : {};
    handleOnAuthContext(true, userDataParse, tokenData, detailsUserParse);
  }
  };

  useEffect(() => {
    if (!login) {
      getLocalStorage();
    }
  }, [login]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/detailsPersonal" element={<DetailsPersonal />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </>
  );
};

export default App;
