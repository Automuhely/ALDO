import AutoSor from "../components/AutoSor";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

export default function UserAutoMezo(props) {
  return (
    <Container fluid className="text-center p-2 border bg-light">
      <h4 className="text-bg-primary p-3">Autóim</h4>
      {!props.autoim ? (
        <>
          <div className="text-center">Nincs még autód rögzítve.</div>
        </>
      ) : (
        <Table bordered striped hover className="text-center">
          <thead>
            <tr>
              <th style={{ minWidth: "5em", width: "15em" }}>Becenév</th>
              <th className="hiddenOnSmall">Rendszám</th>
              <th className="hiddenOnSmall">Alvázszám</th>
              <th className="hiddenOnSmall">Motorkód</th>
              <th className="hiddenOnSmall">Évjárat</th>
              <th className="showOnSmall">Autó</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(props.autoim).map((e, i) => {
              return <AutoSor key={i} auto={e} />;
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
