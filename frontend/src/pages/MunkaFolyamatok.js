import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuthContext from "../contexts/AuthContext";
import MunkaFolyTable from "../components/MunkaFolyTable";
import MunkaElNemKezdettTable from "../components/MunkaElNemKezdettTable";
import MunkaBefejezettTable from "../components/MunkaBefejezettTable";

export default function MunkaFolyamatok() {
 
  const [ElKezdettMunkak, setElKezdettMunkak] = useState([]);
  const [ElNemKezdettMunkak, setElNemKezdettMunkak] = useState([]);
  const [BefejezettMunkak, setBefejezettMunkak] = useState([]);
  
 

  useEffect(() => {
    axios.get("/api/folyamatmunka")
      .then(response => {
        setElKezdettMunkak(response.data);
      })
      .catch(error => {
        console.error("Hiba történt az elkezdett munkák lekérésekor:", error);
      });
  }, []);


  useEffect(() => {
    axios.get("/api/befejezettmunka")
      .then(response => {
        setBefejezettMunkak(response.data);
      })
      .catch(error => {
        console.error("Hiba történt a befejezett munkák lekérésekor::", error);
      });
  }, []);


  useEffect(() => {
    axios.get("/api/elnemkezdetmunka")
      .then(response => {
        setElNemKezdettMunkak(response.data);
      })
      .catch(error => {
        console.error("Hiba történt az el nem kezdett munkák lekérésekor:", error);
      });
  }, []);


  return (
    <div>
      <h1>Munkafolyamatok</h1>
      <MunkaElNemKezdettTable
        ElNemKezdettMunkak={ElNemKezdettMunkak}
       
      />
      <MunkaFolyTable ElKezdettMunkak={ElKezdettMunkak}/>
      <MunkaBefejezettTable BefejezettMunkak={BefejezettMunkak} />
    </div>
  );
}
