import React, { useEffect } from "react";
import useAuthContext from "../contexts/AuthContext";
import { Card } from "react-bootstrap";

export default function Galeria() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  

  return (
    <div>
      <div className="galery">
      <Card.Img src="img/muszaki vizsga.jpg" alt="Card image" />
      </div>
    </div>
  );
}
