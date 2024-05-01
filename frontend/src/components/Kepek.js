import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Kepek(props) {
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {props.obj.map((e, i) => {
          return (
            <Col key={i}>
              <Link to={e.link}>
                <Card>
                  <Card.Img variant="top" src={e.src} />
                  <Card.Body>
                    <Card.Title className="text-center">{e.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
