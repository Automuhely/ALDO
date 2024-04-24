import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "../api/axios";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import useAuthContext from "../contexts/AuthContext";

export default function AutoSor(props) {
  const [beceneve, setBeceneve] = useState(props.auto.becenev ?? "");
  const [kuldheto, setKuldheto] = useState(false);

  const autoid = props.auto.id;
  const vegpont = "api/autos/" + autoid;
  const { csrf } = useAuthContext();

  async function szerkeszt(e) {
    const token = await csrf();
    if (kuldheto === true) {
      try {
        console.log("becenév változtatás");
        await axios.put(vegpont, { becenev: beceneve, _token: token });
      } catch (error) {
        console.error("Hiba történt:", error);
      }
    }
    setKuldheto((prevState) => !prevState);
  }
  return (
    <tr id={"sor" + props.auto.id}>
      <td>
        <InputGroup>
          <Form.Control
            type="text"
            disabled={!kuldheto}
            defaultValue={props.auto.becenev ?? ""}
            onChange={(e) => {
              setBeceneve(e.target.value);
            }}
          />
          <InputGroup.Text>
              <Button
                variant={kuldheto ? "success" : "primary"}
                className="elsoGomb"
                autoid={`elso${autoid ?? ""}`}
                id={`elsoGomb-${autoid ?? ""}`}
                onClick={(e) => {
                  szerkeszt(e);
                }}
              >
                {kuldheto ? "Mentés" : "Szerkeszt"}
              </Button>
          </InputGroup.Text>
        </InputGroup>
      </td>
      <td>{props.auto.rendszam ?? ""}</td>
      <td>
        <span className="showOnSmall">Alvázszám:</span>
        {props.auto.alvazszam ?? ""}
        <span className="showOnSmall">
          <br />
          Motorkód:
          <span className="showOnSmallInside">
          {props.auto.motorkod ?? ""}
          </span>
          <br />
          <br />
          Évjárat:
          <span className="showOnSmallInside">
            {props.auto.evjarat}
          </span>
        </span>
      </td>
      <td className="hiddenOnSmall">{props.auto.motorkod ?? ""}</td>
      <td className="hiddenOnSmall">{props.auto.evjarat ?? ""}</td>
    </tr>
  );
}
