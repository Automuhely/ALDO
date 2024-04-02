import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import NoPage from "./pages/NoPage.js";import './App.css';
import BasicLayout from "./layouts/BasicLayout.js";
import MunkaAr from "./pages/MunkaAr.js";
import Kapcsolat from "./pages/Kapcsolat.js";
import Galeria from "./pages/Galeria.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import Profile from "./pages/Profile.js";

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<BasicLayout/>}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/munkaar" element={<MunkaAr/>}/> 
        <Route path="/kapcsolat" element={<Kapcsolat/>}/>
        <Route path="/galeria" element={<Galeria/>}/>
      </Route>
    </Routes>
 //  </BrowserRouter>

  );
}

export default App;
