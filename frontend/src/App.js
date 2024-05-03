import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/guest/Home.js";
import Login from "./pages/guest/Login.js";
import Register from "./pages/guest/Register.js";
import NoPage from "./pages/guest/NoPage.js";
import AkummulatorCsere from "./pages/guest/szolgaltatasok/AkkumulatorCsere.js";
import Galeria from "./pages/guest/Galeria.js";
import Futomu from "./pages/guest/szolgaltatasok/Futomu.js";
import BasicLayout from "./layouts/BasicLayout.js";
import MunkaAr from "./pages/guest/MunkaAr.js";
import Email from "./pages/guest/Email.js";
import "bootstrap/dist/css/bootstrap.min.css";
import MunkaFolyamatok from "./pages/worker/MunkaFolyamatok.js";
import UserProfile from "./pages/user/UserProfile.js";

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
        <Route path="/akkumulatorcsere" element={<AkummulatorCsere />} />
        <Route path="/futomu" element={<Futomu />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
