import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "../api/axios";
import { useState } from "react";
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
        console.log("becenév változtatás")
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
        <Form.Control
          className="becenev"
          type="text"
          disabled={!kuldheto}
          defaultValue={props.auto.becenev ?? ""}
          onChange={(e) => {
            setBeceneve(e.target.value);
          }}
        />
        <span>
          <Button
            variant={kuldheto ? "success" : "primary"}
            style={{
              width: "2em",
              fontSize: "1.5em",
              margin: "0",
              padding: "0",
            }}
            autoid={`elso${autoid ?? ""}`}
            id={`elsoGomb-${autoid ?? ""}`}
            className="autoimElsoGomb"
            onClick={(e) => {
              szerkeszt(e);
            }}
          >
            {kuldheto ? (
              <i className="fa-solid fa-floppy-disk"></i>
            ) : (
              <i className="fa-regular fa-pen-to-square"></i>
            )}
          </Button>
        </span>
      </td>
      <td>{props.auto.rendszam ?? ""}</td>
      <td>{props.auto.alvazszam ?? ""}</td>
      <td>{props.auto.motorkod ?? ""}</td>
      <td>{props.auto.evjarat ?? ""}</td>
    </tr>
  );
}
