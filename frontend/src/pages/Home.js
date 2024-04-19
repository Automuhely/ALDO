import { useEffect } from "react";
import useAuthContext from "../contexts/AuthContext";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from "./Footer";

export default function Home() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  return (
    <div>
      < div className="kartyak">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card >
              <Card.Img variant="top" src="img/Akkumulator_csere.jpg" />
              <Card.Body >
                <Card.Title className="text-center">Akkumulator csere</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src="img/futomubeallítas.jpg" />
              <Card.Body>
                <Card.Title className="text-center">Futómű</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src="img/időszakos szerviz.jpg" />
              <Card.Body>
                <Card.Title className="text-center" >Időszakos szerviz</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      < div className="kartyak">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card >
              <Card.Img variant="top" src="img/Klíma.jpg" />
              <Card.Body >
                <Card.Title className="text-center">Klíma</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src="img/atvizsgalas.jpg" />
              <Card.Body>
                <Card.Title className="text-center">Ingyenes műszaki felmérés</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src="img/fekcsere.jpg" />
              <Card.Body>
                <Card.Title className="text-center" >Fékrendszer</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      < div className="kartyak">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card >
              <Card.Img variant="top" src="img/gumicsere.jpg" />
              <Card.Body >
                <Card.Title className="text-center">Gumicsere</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src="img/kipufogó.jpg" />
              <Card.Body>
                <Card.Title className="text-center">Kipufogó</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src="img/muszaki vizsga.jpg" />
              <Card.Body>
                <Card.Title className="text-center" >Műszaki vizsga</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
      </div> );
}
    
 
