import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { jsPDF } from "jspdf";

export default function UserInvoice(props) {
  function download() {
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
    });
    doc.setFont("times", "normal");
    doc.setFontSize(10);

    doc.text("Informális adatlap", 10, 10);
    doc.text(`Számlaszám: ${props.szamla.szamlaszam}`, 10, 20);
    doc.text("Autó adatai:", 10, 30);
    doc.text(`Motorkód: ${props.szamla.motorkod}`, 10, 40);
    doc.text(`Évjárat: ${props.szamla.evjarat}`, 10, 50);
    doc.text(`Alvázszám: ${props.szamla.alvazszam}`, 10, 60);
    doc.text(`Rendszám: ${props.szamla.rendszam}`, 10, 70);
    doc.text(`Leírás: ${props.szamla.altalanosLeiras}`, 10, 80);
    doc.text(`Megrendelő: ${props.szamla.ugyfel_nev}`, 10, 90);
    doc.text(`Munkavezető: ${props.szamla.munkavezeto_nev}`, 10, 100);
    doc.text(`Munkalap nyitása: ${props.szamla.created_at}`, 10, 110);

    const informacioText = `Ez a dokumentum kizárólag tájékoztatás céljából készült és nem minősül hivatalos vagy jogilag kötelező dokumentumnak.
    Az itt található információk csak tájékoztató jellegűek, és nem helyettesítik semmilyen hivatalos dokumentumot vagy tanácsadást.
    Az esetleges pontatlanságokért vagy téves információkért semmilyen felelősség nem terhelhető. Kérjük, vegye figyelembe, hogy a hivatalos
    ügyintézéshez vagy jogi célokra szükséges dokumentumokat kérje hivatalos forrásokból.`;

    doc.text(informacioText, 10, 120);
    doc.save("szamla.pdf");
  }
  if (props.szamlaim) {
    // console.log(props.szamla.altalanosLeiras);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=""
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Számlaszám: {props.szamla && props.szamla.szamlaszam}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className="text-dark">
          Rendszám: {props.szamla && props.szamla.rendszam.toUpperCase()}
        </h3>
        <h3 className="text-dark">Leírás</h3>
        <p>{props.szamla && props.szamla.altalanosLeiras}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Vissza</Button>
        <Button onClick={download}>Letöltés</Button>
      </Modal.Footer>
    </Modal>
  );
}
