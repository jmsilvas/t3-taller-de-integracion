import './App.css';
import Map from './components/Map';
import {Container, Row, Col} from 'reactstrap';

function App() {
  return (
    <Container className="main-container">
      <Row>
        <Col md="8" sm="12">
          <Map/>
        </Col>
        <Col md="4" sm="12">Chat</Col>
      </Row>
      <Row>
        <Col md="12">Info</Col>
      </Row>

    </Container>
  );
}

export default App;
