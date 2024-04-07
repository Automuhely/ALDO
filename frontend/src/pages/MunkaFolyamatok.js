import { useEffect } from "react";
import React from "react";
import useAuthContext from "../contexts/AuthContext";

export default function MunkaFolyamatok() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return (
    <div>
        <h1>Munkák</h1>
        
    </div>
  );
  }