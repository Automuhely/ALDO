import AutoSor from "./UserCarTableRow";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";

export default function UserCarTable(props) {
  return (
    <Col
      className="justify-content-center align-items-center p-2 border bg-light"
    >
      <h4 className="text-bg-primary p-3">Autóim</h4>
      {!props.autoim ? (
        <>
          <div className="text-center">Nincs még autód rögzítve.</div>
        </>
      ) : (
        <Table bordered striped hover responsive className="text-center">
          <thead>
            <tr>
              <th style={{ minWidth: "6em", width: "6em" }}>Becenév</th>
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
    </Col>
  );
}
