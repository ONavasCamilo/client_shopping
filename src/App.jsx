import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/home/Home";
import Login from "./views/Login/Login";
import Register from "./views/register/Register";
import Account from "./views/account/Account";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
};

export default App;
