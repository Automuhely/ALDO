import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [tokenem, setTokenem] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    cim: "",
    telefon: "",
    adoszam: "",
    adoazonosito: "",
    szulido: "",
  });
  //const csrf = () => axios.get("/sanctum/csrf-cookie");

  const csrf = () =>
    axios.get("/token").then((response) => {
      console.log(response);
      console.log(response.data);
      setTokenem(response.data);
      console.log("AuthContext Token: ", response.data);
      return tokenem;
    });

  //bejelentkezett felhasználó adatainak lekérdezése
  const getUser = async () => {
    const { data } = await axios.get("/api/user");
    setUser(data);
  };

  const logout = async () => {
    await csrf();
    console.log(tokenem);
    axios.post("/logout", { _token: tokenem }).then((resp) => {
      setUser(null);
      console.log(resp);
    });
  };

  const loginReg = async ({ ...adat }, vegpont) => {
    await csrf();
    adat._token = tokenem;
    console.log("token", adat);
    //lekérjük a csrf tokent

    //  await csrf();

    //bejelentkezés
    //Összegyűjtjük egyetlen objektumban az űrlap adatokat

    // Megpróbáljuk elküldeni a /login végpontra az adatot
    // hiba esetén kiiratjuk a hibaüzenetet
    try {
      await axios.post(vegpont, adat);
      console.log("siker");
      //sikeres bejelentkezés/regisztráció esetén
      //Lekérdezzük a usert
      await getUser();
      //elmegyünk  a kezdőlapra
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const szamlak = async () => {
    try {
      const autoim = await axios.get("/api/szamlaim");
      // console.log("Számláim: ",autoim.data);
      return autoim.data;
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 422) {
        console.log(error.response.data.errors);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ logout, loginReg, errors, getUser, user, szamlak, csrf }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuthContext() {
  return useContext(AuthContext);
}
