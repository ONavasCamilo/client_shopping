import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/home/Home";
import Login from "./views/Login/Login";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
