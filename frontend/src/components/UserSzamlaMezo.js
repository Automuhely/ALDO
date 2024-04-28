import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

export default function UserSzamlaMezo(props) {
  return (
    <Col
      className="justify-content-center align-items-center p-2 border bg-light"
    >
      <h4 className="text-bg-primary p-3">Számlák</h4>
      {!props.szamlaim ? (
        <>
          <div className="text-center">Nincs még számlád rögzítve.</div>
        </>
      ) : (
        <Table
          bordered
          striped
          hover
          responsive
          className="text-center align-middle"
        >
          <thead>
            <tr>
              <th className="hiddenOnSmall">Sz.szám</th>
              <th className="hiddenOnSmall">Becenév</th>
              <th className="hiddenOnSmall">Rendszám</th>
              <th className="hiddenOnSmall d-md-none">Munkavezető</th>
              <th className="hiddenOnSmall" style={{ width: "3em" }}>
                Leírás
              </th>
              <th colSpan={2} className="hiddenOnSmall">
                Módosult
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.values(props.szamlaim).map((e, i) => {
              return (
                <tr key={i}>
                  <td className="hiddenOnSmall">{e.szamlaszam}</td>
                  <td className="hiddenOnSmall">{e.becenev}</td>
                  <td className="hiddenOnSmall text-uppercase">{e.rendszam}</td>
                  <td className="hiddenOnSmall d-md-none">
                    {e.munkavezeto_nev}
                  </td>
                  <td className="hiddenOnSmall">
                    {e.altalanosLeiras}
                    <span className="d-md-block">
                      <br />
                      Munkavezető:
                      <br />
                      <span className="text-secondary">
                        {e.munkavezeto_nev}
                      </span>
                    </span>
                  </td>
                  <td className="hiddenOnSmall">{e.updated_at}</td>
                  <td className="showOnSmall">
                    <span className="d-block text-bg-secondary rounded-5">
                      {e.becenev} <br />
                    </span>
                  </td>
                  <td className="showOnSmall">
                    {e.altalanosLeiras}
                    <br />
                    <br />
                    Munkavezető: <br />
                    {e.munkavezeto_nev}
                    <br />
                    <br />
                    {e.updated_at}
                    <br />
                    <br />
                    <Button className="btn-success ps-3 pe-3 rounded-4">
                      Megnéz
                    </Button>
                  </td>
                  <td className="hiddenOnSmall">
                    <Button className="btn-success">Megnéz</Button>
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
