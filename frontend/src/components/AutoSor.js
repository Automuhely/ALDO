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

  async function szerkeszt() {
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
            className="hiddenOnSmall"
            disabled={!kuldheto}
            defaultValue={props.auto.becenev ?? ""}
            onChange={(e) => {
              setBeceneve(e.target.value);
            }}
          />
          {/* ------------------------------------------------------------------------------------------------------------- autó BECENÉV */}
          <span className="showOnSmall text-bg-warning m-auto mt-4 mb-4 p-2 ps-2 pe-3 h3 rounded-3 text-center">
            {props.auto.becenev}
          </span>
          {/* ------------------------------------------------------------------------------------------------------------- autó RENDSZÁM*/}

          <span className="showOnSmall mb-4 text-uppercase text-danger m-auto">
            {props.auto.rendszam}
          </span>
           {/* ------------------------------------------------------------------------------------------------------------ szerkeszt GOMB */}

          <Button
            variant={kuldheto ? "success" : "secondary"}
            className="elsoGom m-auto rounded-3"
            autoid={`elso${autoid ?? ""}`}
            id={`elsoGomb-${autoid ?? ""}`}
            onClick={(e) => {
              szerkeszt(e);
            }}
          >
            {kuldheto ? "Mentés" : "Szerkeszt"}
          </Button>
        </InputGroup>
      </td>
      <td className="hiddenOnSmall text-uppercase">{props.auto.rendszam ?? ""}</td>
      <td className="hiddenOnSmall">{props.auto.alvazszam}</td>
      <td className="hiddenOnSmall">{props.auto.motorkod ?? ""}</td>
      <td className="hiddenOnSmall">{props.auto.evjarat ?? ""}</td>

      <td className="showOnSmall p-3">
        <span>
          Alvázszám:
          <br />
          <span className="text-secondary">
            {props.auto.alvazszam ?? ""}
          </span>
          <br />
          <br />
          Motorkód:
          <br />
          <span className="text-secondary">{props.auto.motorkod ?? ""}</span>
          <br />
          <br />
          Évjárat:
          <br />
          <span className="text-secondary">{props.auto.evjarat}</span>
        </span>
      </td>
    </tr>
  );
}
