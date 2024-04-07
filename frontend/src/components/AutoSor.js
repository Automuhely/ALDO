import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "../api/axios";
import { useEffect, useState } from "react";
import useAuthContext from "../contexts/AuthContext";

export default function AutoSor(props) {
  const autoid = props.auto.id;
  const [beceneve, setBeceneve] = useState(props.auto.becenev ?? "");
  const [szerkesztheto, setSzerkesztheto] = useState(false);
  const vegpont = "api/autos/" + autoid;
  const { csrf } = useAuthContext();

  useEffect(() => {
    props.setBecenev(beceneve);
    console.log("render AUTOSOR");
  }, [beceneve, props.auto]);

  async function szerkeszt(e) {
    setSzerkesztheto(!szerkesztheto);

    if (e.target.innerHTML === "Mentés") {
      const token = await csrf();
      try {
        await axios
          .put(vegpont, { becenev: beceneve, _token: token })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error("Hiba történt:", error);
          });
      } catch (error) {
        console.error("Hiba történt:", error);
      }
    }
  }

  return (
    <tr id={"sor" + props.auto.id}>
      <td>
        <Form.Control
          className="becenev"
          type="text"
          disabled={!szerkesztheto}
          defaultValue={props.auto.becenev ?? ""}
          onChange={(e) => {
            setBeceneve(e.target.value);
          }}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          disabled
          readOnly
          value={props.auto.rendszam ?? ""}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          disabled
          readOnly
          value={props.auto.alvazszam ?? ""}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          disabled
          readOnly
          value={props.auto.motorkod ?? ""}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          disabled
          readOnly
          value={props.auto.evjarat ?? ""}
        />
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
