import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Kepek(props) {
  return (
    <Container fluid className="m-auto">
      <Row className="">
        {props.obj.map((e, i) => {
          return (
              <Col key={i} className="col-sm-12 col-md-4 col-lg-3 mb-5" xs={12}>
                <Col className="bg-light border-dark rounded p-2 mb-1">
              <Link to={e.link} className="text-decoration-none" >
                <Card className="">
                  <Card.Img variant="top" src={e.src} style={{height: "10em"}} className="object-fit-cover"/>
                  <Card.Body>
                    <Card.Title className="text-center fs-6">{e.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
