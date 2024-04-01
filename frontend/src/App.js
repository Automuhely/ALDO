import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import NoPage from "./pages/NoPage.js";import './App.css';
import BasicLayout from "./layouts/BasicLayout.js";
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
      </Route>
    </Routes>
 //  </BrowserRouter>

  );
}

export default App;
