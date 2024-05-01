import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import NoPage from "./pages/NoPage.js";
import "./App.css";
import BasicLayout from "./layouts/BasicLayout.js";
import MunkaAr from "./pages/MunkaAr.js";
import Email from "./pages/Email.js";
import Galeria from "./pages/Galeria.js";
import "bootstrap/dist/css/bootstrap.min.css";
import MunkaFolyamatok from "./pages/MunkaFolyamatok.js";
import UserProfile from "./pages/UserProfile.js";
import AkummulatorCsere from "./pages/szolgaltatasok/AkkumulatorCsere.js";
import Futomu from "./pages/szolgaltatasok/Futomu.js";
import VezetoSzerelo from "./pages/VezetoSzerelo.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<UserProfile />} />
        <Route path="/munkafolyamatok" element={<MunkaFolyamatok />} />
        <Route path="/register" element={<Register />} />
        <Route path="/munkaar" element={<MunkaAr />} />
        <Route path="/kapcsolat" element={<Email />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/vezetoszerelo" element={<VezetoSzerelo />} />
        <Route path="/akkumulatorcsere" element={<AkummulatorCsere />} />
        <Route path="/futomu" element={<Futomu />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
