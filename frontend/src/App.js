import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import NoPage from "./pages/NoPage.js";import './App.css';
import BasicLayout from "./layouts/BasicLayout.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BasicLayout/>}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
