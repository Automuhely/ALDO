import React, { useEffect } from "react";
import useAuthContext from "../contexts/AuthContext";

export default function Galeria() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return <div>Feltöltés alatt!</div>;
}
