import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function AutoSor(props){
    const autoid = props.auto.id
    let szerkNyitva = 0;

    function szerkeszt(e){
        if(!szerkNyitva){
            szerkNyitva = 1
            let elsoGomb = document.getElementById(`elsoGomb-${autoid}`);
            elsoGomb.innerHTML="Mentés"
            console.log(elsoGomb)
            elsoGomb.classList.toggle("btn-primary")
            console.log(elsoGomb)

            elsoGomb.classList.toggle("btn-success")
            console.log(elsoGomb)


            let masodikGomb = document.getElementById(`masodikGomb-${autoid}`);
            masodikGomb.innerHTML="Mégse"
        /*     masodikGomb.classList.toggle("btn-danger")
            masodikGomb.classList.toggle("btn-primary") */
        }else{
            szerkNyitva = 0
            let elsoGomb = document.getElementById(`elsoGomb-${autoid}`);
            elsoGomb.innerHTML="Szerkeszt"
            console.log("ITT KELLENE KÉKNEK LENNI")
            console.log(elsoGomb)

            elsoGomb.classList.toggle("btn-success")
            console.log(elsoGomb)

            elsoGomb.classList.toggle("btn-primary")
            console.log(elsoGomb)
            
            let masodikGomb = document.getElementById(`masodikGomb-${autoid}`);
            masodikGomb.innerHTML="Töröl"
            /* masodikGomb.classList.toggle("btn-danger")
            masodikGomb.classList.toggle("btn-primary") */

        }
    }

    return(
        <tr id={"sor"+props.auto.id}>
        <td>
          <Form.Control type="text" disabled value={props.auto.becenev??""} onChange={()=>{props.setBecenev(props.auto.target.value)}}/>
        </td>
        <td>
          <Form.Control type="text" disabled value={props.auto.rendszam??""} onChange={()=>{props.setRendszam(props.auto.target.value)}}/>
        </td>
        <td>
          <Form.Control type="text" disabled value={props.auto.alvazszam??""} onChange={()=>{props.setAlvazszam(props.auto.target.value)}}/>
        </td>
        <td>
          <Form.Control type="text" disabled value={props.auto.motorkod??""} onChange={()=>{props.setMotorkod(props.auto.target.value)}}/>
        </td>
        <td>
          <Form.Control type="text" disabled value={props.auto.evjarat??""} onChange={()=>{props.setEvjarat(props.auto.target.value)}}/>
        </td>
        <td>
          <Button variant="primary" autoid={`elso${autoid??""}`} id={`elsoGomb-${autoid??""}`}  className="autoimElsoGomb" onClick={(e)=>{szerkeszt(e)}}>Szerkeszt</Button>
        </td>
        <td>
          <Button variant="danger"  autoid={`masodik${autoid??""}`} id={`masodikGomb-${autoid??""}`}  className="autoimMasodikGomb" onClick={(e)=>{szerkeszt(e)}}>Töröl</Button>
        </td>
      </tr>

    )
}