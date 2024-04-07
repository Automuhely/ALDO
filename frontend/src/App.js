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

import UserProfile from "./pages/UserProfile.js";

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/munkaar" element={<MunkaAr />} />
        <Route path="/kapcsolat" element={<Email />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    //  </BrowserRouter>
  );
}

export default App;
