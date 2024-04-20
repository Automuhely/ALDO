
import AutoSor from "../components/AutoSor";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

export default function UserAutoMezo(props) {
return ""
  return (
    <Col className="col-sm-12 m-auto autokMezo pt-4">
      <h1 className="text-center">Autóim</h1>
      {!props.autoim ? (
        <>
          <div className="text-center">Nincs még autód rögzítve.</div>
        </>
      ) : (
        <Table bordered striped hover>
          <thead>
            <tr>
              <th>Becenév</th>
              <th>Rendszám</th>
              <th>Alvázszám</th>
              <th>Motorkód</th>
              <th>Évjárat</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {Object.values(props.autoim).map((e, i) => {
              return (
                <AutoSor
                  key={i}
                  auto={e}
                  // autoim={props.autoim}
                  /*  becenev={becenev}
                  setBecenev={setBecenev}
                  setRendszam={setRendszam}
                  setAlvazszam={setAlvazszam}
                  setMotorkod={setMotorkod}
                  setEvjarat={setEvjarat} */
                />
              );
            })}
          </tbody>
        </Table>
      )}
    </Col>
  );
}
