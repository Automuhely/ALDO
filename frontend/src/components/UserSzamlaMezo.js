import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

export default function UserSzamlaMezo(props) {
  return (
    <Col className="col-sm-12 m-auto szamlakMezo">
      <h1 className="text-center">Számlák</h1>
      {!props.szamlaim ? (
        <>
          <div className="text-center">Nincs még számlád rögzítve.</div>
        </>
      ) : (
        <Table
          bordered
          striped
          hover
          responsive="sm"
          className="munkalapokTable"
        >
          <thead>
            <tr>
              <th>Számlaszám</th>
              <th>Becenév</th>
              <th>Rendszám</th>
              <th>Munkavezető</th>
              <th>Leírás</th>
              <th>Módosult</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.values(props.szamlaim).map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.munkalapszam}</td>
                  <td>{e.becenev}</td>
                  <td>{e.rendszam}</td>
                  <td>{e.munkavezeto_nev}</td>
                  <td>{e.altalanosLeiras}</td>
                  <td>{e.updated_at}</td>
                  <td>
                    <i
                      className="fa-solid fa-eye d-block m-auto"
                      style={{
                        fontSize: "1.5em",
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Col>
  );
}
