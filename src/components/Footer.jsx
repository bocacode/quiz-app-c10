import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRight } from 'react-bootstrap-icons';



export default function Footer () {

  const currentYear = new Date().getFullYear();
  const githubLink = "https://github.com/jsohndata/quiz-app";

  return (
    <footer>
      <Container>
        <Row>
          <Col>
          <p><small>&copy; {currentYear}</small>
          <br />
          {/* <ArrowRight /> */}
          <a href={githubLink} target="_blank" rel="noreferrer">Code in Github</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
    
  )
}


