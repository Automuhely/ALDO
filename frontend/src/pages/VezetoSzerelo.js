import React, { useEffect, useState } from "react";
import useAuthContext from "../contexts/AuthContext";

export default function VezetoSzerelo(){
    const { csrf ,user,getUser} = useAuthContext();
  const [token, setToken] = useState();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      if (!user) {
        getUser();
        const token = await csrf();
        setToken(token);
      }
    };

    fetchCsrfToken();
  }, [user, getUser, csrf]);
    return(
        <div><h1 style={{ textAlign:"center" }}>Munkalapok</h1></div>
    )
}