import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "../api/axios";
import { useState } from "react";

export default function AutoSor(props) {
  const autoid = props.auto.id;
  const [szerkesztheto, setSzerkesztheto] = useState(false);

  function szerkeszt() {
    setSzerkesztheto(!szerkesztheto);
  }

  return (
    <tr id={"sor" + props.auto.id}>
      <td>
        <Form.Control
          className="becenev"
          type="text"
          disabled={!szerkesztheto}
          value={props.auto.becenev ?? ""}
          onChange={(e) => {
            props.setBecenev(e.target.value);
          }}
        />
      </td>
      <td>
        <Form.Control type="text" disabled value={props.auto.rendszam ?? ""} />
      </td>
      <td>
        <Form.Control type="text" disabled value={props.auto.alvazszam ?? ""} />
      </td>
      <td>
        <Form.Control type="text" disabled value={props.auto.motorkod ?? ""} />
      </td>
      <td>
        <Form.Control type="text" disabled value={props.auto.evjarat ?? ""} />
      </td>
      <td>
        <Button
          variant={szerkesztheto ? "success" : "primary"}
          autoid={`elso${autoid ?? ""}`}
          id={`elsoGomb-${autoid ?? ""}`}
          className="autoimElsoGomb"
          onClick={(e) => {
            szerkeszt(e);
          }}
        >
          {szerkesztheto ? "Mentés" : "Szerkeszt"}
        </Button>
      </td>
      <td>
        <Button
          variant="danger"
          autoid={`masodik${autoid ?? ""}`}
          id={`masodikGomb-${autoid ?? ""}`}
          className="autoimMasodikGomb"
          onClick={(e) => {
            szerkeszt(e);
          }}
        >
          Töröl
        </Button>
      </td>
    </tr>
  );
}
