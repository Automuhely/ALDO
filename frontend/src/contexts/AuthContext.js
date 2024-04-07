import { createContext, useContext, useState } from "react";
import axios from "../api/axios.js";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// *********************************************
// **                                         **
// **               IMPORTANT!                **
// **            Delete or modify             **
// **        the elements marked below        **
// **                                         **
// *********************************************

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  let token = "";
  const csrf = async () => {
    try {
      const response = await axios.get("/token");
      console.log(response);
      token = response.data;
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("401, nem tudtam token-t lekérdezni", error);
      } else {
        console.error("Hiba történt a token lekérése során", error);
      }
      // REMOVE IT WHEN YOU TESTING
      return null;
      //throw error;
    }
  };

  const getUser = async () => {
    try {
      const { data } = await axios.get("/api/user");
      setUser(data);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.error("422-es hiba történt:", error);
        setErrors(error.response.data.errors);
      }
      if (error.response && error.response.status === 401) {
        console.log("401, nem történt bejelenkezés", error);
      } else {
        console.error("Egyéb hiba történt:", error);
      }
      // REMOVE IT WHEN YOU TESTING
      return null;
      // throw error;
    }
  };

  const loginReg = async ({ ...adat }, vegpont) => {
    try {
      await csrf();
      console.log(token);
      adat._token = token;
      console.log(adat);
      await axios.post(vegpont, adat);
      console.log("Sikeres bejelentkezés/regisztráció");
      await getUser();
      navigate("/profil");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.error("422-es hiba történt:", error);
        setErrors(error.response.data.errors);
      }
      if (error.response && error.response.status === 401) {
        console.log("401, nem történt bejelenkezés", error);
      } else {
        console.error("Egyéb hiba történt:", error);
      }
      // REMOVE IT WHEN YOU TESTING
      return null;
      // throw error;
    }
  };

  const logout = async () => {
    try {
      await csrf();
      console.log(token);
      const resp = await axios.post("/logout", { _token: token });
      navigate("/");
      console.log(resp);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.error("422-es hiba történt:", error);
        setErrors(error.response.data.errors);
      }
      if (error.response && error.response.status === 401) {
        console.log("401, nem történt bejelenkezés", error);
      } else {
        console.error("Egyéb hiba történt:", error);
      }
      // REMOVE IT WHEN YOU TESTING
      return null;
      // throw error;
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ loginReg, logout, errors, getUser, user, csrf}}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
