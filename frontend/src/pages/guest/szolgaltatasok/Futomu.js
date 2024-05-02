import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import useAuthContext from "../../../contexts/AuthContext";

export default function Futomu() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  }, [user, getUser]);
  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <h1>FUTÓMŰ</h1>
        <h3>
          Mi utal arra, hogy baj van a futóművekkel? Ha furcsa, kopogó hangot
          hallasz vagy jobbra-balra húz a kormány, esetleg a gumiabroncsok
          egyenlőtlenül kopnak, akkor valószínűleg elállítódhattak a futóműveid!
          Foglalj időpontot profi futóműellenőrzésre most!
        </h3>
        <h3>Futómű - Bemutatjuk</h3>
        <p>
          A futómű biztosítja a gépjármű és az úttest közötti folyamatos
          kapcsolatot, irányíthatóvá teszi az autót. Ezért a futómű állapota,
          beállításának pontossága jelentősen befolyásolja a gépkocsik
          biztonságos üzemelését és menetkényelmét. A gépjárművek két futóművel,
          első és hátsó futóművel vannak felszerelve. A futómű elemei közé
          soroljuk a gépjárművek haladásával, különböző irányba való
          mozgatásával kapcsolatos, a rugózást, lengéscsillapítást és a
          stabilitást biztosító, valamint a kerékmeghajtások szerkezeteket.
        </p>
        <h6>Ha gépjárműved futóművének összes alkotóeleme tökéletes:</h6>
        <ul>
          <li>Biztonságosan, kényelmesen vezethetsz</li>
          <li>Autód alkatrészei csak csekély mértékben kopnak!</li>
        </ul>
        <h3>Futóművet alkotó szerkezeti elemek</h3>
        <ul>
          <li>Lengéscsillapító</li>
          <p>
            Egy gépjárműben elöl is, hátul is két-két lengéscsillapító van
            beszerelve. A lengéscsillapító feladata a rugózás által keltett
            lengések hatásos csillapítása, a lökésszerűen fellépő nagy
            rugólengések, az esetleges felütések megakadályozása. A gépjármű
            kerekeit az úton tartja, nem engedi az útfelülettől elválni. A
            lengéscsillapító kiegészítő szerkezeti elemei a toronycsapágy,
            toronyszilent, a lengéscsillapító porvédő. A lengéscsillapítók nagy
            része a porvédő szakadása miatt megy idő előtt tönkre. A
            lengéscsillapító szára beszennyeződik, vizet kap, így berozsdásodik,
            emiatt a szimerint elkopik, az olaj elfolyik. A szakadt porvédőt
            ezért kell feltétlenül kicseréltetni.
          </p>
        </ul>
      </Container>
    </div>
  );
}
