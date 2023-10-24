import { Carousel, Container, Row, Col } from 'react-bootstrap'
import menu from '../data/menu.json'

const Home = () => {
  return (
    // inseriamo un Container, una Row e una Col per dare una struttura contenitiva al nostro carosello
    <Container>
      <Row className="justify-content-center">
        {/* <div className="col col-12 col-md-6 col-lg-4"> */}
        <Col md={6}>
          <Carousel className="mt-4">
            {menu.map((pasta) => {
              return (
                // OGNI VOLTA che generate dinamicamente del contenuto tramite il metodo .map()
                // dovete ricordarvi che React ha bisogno di poter DISTINGUERE tra gli elementi
                // generati
                // per fare questo è necessario assegnare una "key" univoca ad ogni elemento generato
                // questo serve a livello di performance, per evitare manipolazioni del DOM inutili
                // e perchè è brutto da vedere :)
                <Carousel.Item key={pasta.id}>
                  <img src={pasta.image} alt="kitten" className="w-100" />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
