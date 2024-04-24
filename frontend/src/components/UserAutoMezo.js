import AutoSor from "../components/AutoSor";
import Table from "react-bootstrap/Table";

export default function UserAutoMezo(props) {
  return (
    <>
      <h1 className="text-center">Autóim</h1>
      {!props.autoim ? (
        <>
          <div className="text-center">Nincs még autód rögzítve.</div>
        </>
      ) : (
        <Table bordered striped hover className="text-center">
          <thead>
            <tr>
              <th style={{ minWidth: "15em", width: "20em" }}>Becenév</th>
              <th>Rendszám</th>
              <th>
                Alvázszám
                <span className="showOnSmall">Motorkód</span>
              </th>
              <th className="hiddenOnSmall">Motorkód</th>
              <th className="hiddenOnSmall">Évjárat</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(props.autoim).map((e, i) => {
              return <AutoSor key={i} auto={e} />;
            })}
          </tbody>
        </Table>
      )}
    </>
  );
}
