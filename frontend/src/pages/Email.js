import React, { useEffect } from "react";
import useAuthContext from "../contexts/AuthContext";
import Kapcsolat from "../components/Kapcsolat";
import TerkepElerhetoseg from "../components/TerkepElerhetoseg";

export default function Emial() {
  const { user, getUser, csrf  } = useAuthContext();


  useEffect(() => {
    if (!user) {
      getUser();
      
    }
  }, [user]);

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
