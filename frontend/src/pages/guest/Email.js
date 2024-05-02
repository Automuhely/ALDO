import React, { useEffect, useState } from "react";
import useAuthContext from "../../contexts/AuthContext";
import Kapcsolat from "../../components/guest/Kapcsolat";
import TerkepElerhetoseg from "../../components/guest/TerkepElerhetoseg";

export default function Emial() {
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

  return (
    <div>
      <h1 className="kapcsolatiurlap">Kapcsolati űrlap</h1>
      <div className="kapcsolatdiv">
        <Kapcsolat></Kapcsolat>
        <TerkepElerhetoseg></TerkepElerhetoseg>
      </div>
    </div>
  );
}
