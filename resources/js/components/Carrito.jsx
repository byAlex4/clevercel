import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';

function Carrito() {
    return (
        <>
            <body>
                <div style={{ maxWidth: '95%', display: "grid", content: "center", marginLeft: "3%", marginTop: "3%" }}>
                    <h1>Carrito</h1>
                    <hr />
                    <div>
                        <Row>
                            <Col style={{ maxWidth: '20%' }}>
                                <Card style={{ width: 'auto' }}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Card style={{ width: 'auto' }}>
                                                <Card.Body>
                                                    <Link to='iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                                        <Card.Title>iPhone 13 Pro Max</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                                        <Card.Text>En stock.</Card.Text>
                                                        <Card.Link href="#">Ver más</Card.Link></Link>
                                                </Card.Body>
                                            </Card>
                                        </ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>

                            <Col style={{ marginLeft: "10px", }} align="center">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <h5>Conoce las opciones que CLEVERCEL te da para que tengas tu smartphone ideal.</h5>
                    </div>

                </div>
            </body>
        </>
    );
}

export default Carrito;