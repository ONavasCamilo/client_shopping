import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/home/Home";
import Login from "./views/Login/Login";
import Register from "./views/register/Register";
import { AuthProvider } from "./providers/UserProvider";
import DetailsPersonal from "./views/account/detailsPersonal/DetailsPersonal";
import Orders from "./views/account/orders/Orders";
import Account from "./views/account/Account";
import ChangePassword from "./views/account/changePassword/ChangePassword";
import Car from "./views/car/Car";

const App = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default App;
