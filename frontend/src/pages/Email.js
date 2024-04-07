import React, { useEffect } from "react";
import useAuthContext from "../contexts/AuthContext";
import Kapcsolat from "../components/Kapcsolat";

export default function Emial() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return (
    <div>
      <h1>Kapcsolati űrlap</h1>
      <Kapcsolat></Kapcsolat>
    </div>
  );
}
