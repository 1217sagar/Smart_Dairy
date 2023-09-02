import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
      <footer>
        <Container>
          <Row>
            <Col classname="text-center py-3">
              <p>Smart Dairy &copy; {year}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}

export default Footer;