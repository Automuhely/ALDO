import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function UserSzamlaMezo(props) {
  return (
    <Container fluid className="text-center pt-2 border bg-light">
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
          className="munkalapokTable text-center align-middle"
        >
          <thead>
            <tr>
              <th className="hiddenOnSmall">Sz.szám</th>
              <th className="hiddenOnSmall">Becenév</th>
              <th className="hiddenOnSmall">Rendszám</th>
              <th className="hiddenOnSmall">Munkavezető</th>
              <th className="hiddenOnSmall">Leírás</th>
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
                  <td className="hiddenOnSmall">{e.rendszam}</td>
                  <td className="hiddenOnSmall">{e.munkavezeto_nev}</td>
                  <td className="hiddenOnSmall">{e.altalanosLeiras}</td>
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
    </Container>
  );
}
