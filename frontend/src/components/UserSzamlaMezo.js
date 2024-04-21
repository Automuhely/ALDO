import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function UserSzamlaMezo(props) {
  return (
    <>
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
          className="munkalapokTable text-center align-middle"
        >
          <thead>
            <tr>
              <th>Sz.szám</th>
              <th>Becenév</th>
              <th>Rendszám</th>
              <th className="hiddenOnSmall">Munkavezető</th>
              <th>Leírás</th>
              <th colSpan={2}><span className="hiddenOnSmall">Módosult</span></th>
            </tr>
          </thead>
          <tbody>
            {Object.values(props.szamlaim).map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.szamlaszam}</td>
                  <td>{e.becenev}</td>
                  <td>{e.rendszam}</td>
                  <td className="hiddenOnSmall">{e.munkavezeto_nev}</td>
                  <td>
                    {e.altalanosLeiras}
                    <span className="showOnSmall">
                      <br />
                      Munkavezető: <br />
                      <span className="showOnSmallInside">
                        {e.munkavezeto_nev}
                        <br /><br />
                        {e.updated_at}
                      </span>
                    </span>
                  </td>
                  <td className="hiddenOnSmall">{e.updated_at}</td>
                  <td>
                    <Button>Megnéz</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
}
