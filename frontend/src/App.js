import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/guest/Home.js";
import Login from "./pages/guest/Login.js";
import Register from "./pages/guest/Register.js";
import NoPage from "./pages/guest/NoPage.js";
import AkummulatorCsere from "./pages/guest/szolgaltatasok/AkkumulatorCsere.js";
import Galery from "./pages/guest/Galery.js";
import Futomu from "./pages/guest/szolgaltatasok/Futomu.js";
import BasicLayout from "./layouts/BasicLayout.js";
import WorkPrice from "./pages/guest/WorkPrice.js";
import Email from "./pages/guest/Email.js";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkProcesses from "./pages/worker/WorkProcesses.js";
import UserProfile from "./pages/user/UserProfile.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<UserProfile />} />
        <Route path="/munkafolyamatok" element={<WorkProcesses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/munkaar" element={<WorkPrice />} />
        <Route path="/kapcsolat" element={<Email />} />
        <Route path="/galeria" element={<Galery />} />
        <Route path="/akkumulatorcsere" element={<AkummulatorCsere />} />
        <Route path="/futomu" element={<Futomu />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
