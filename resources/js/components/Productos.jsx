import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function Productos() {
    return (
        <>
            <body>
                <div class="position-relative">
                    <Card className="text-white">
                        <Card.Img
                            src="https://cdn.shopify.com/s/files/1/0325/8708/8005/collections/banner5_1748x.jpg?v=1659107164"
                            alt="Card image"
                        />
                        <Card.ImgOverlay>
                            <Card.Title
                                style={{ position: 'absolute', top: '50%', left: '50%', fontWeight: 'bold', fontSize: '66px' }}>
                                iPhone
                            </Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <br />
                <div style={{ maxWidth: '95%', display: "grid", content: "center", marginLeft: "3%" }}>
                    <h1 align="center">Productos</h1>
                    <div>
                        <Row>
                            <Col style={{ maxWidth: '20%' }}>
                                <h2>Filtros</h2>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Disponibilidad</Accordion.Header>
                                        <Accordion.Body>
                                            <Form>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    label="En existencia"
                                                />
                                                <Form.Check
                                                    type="switch"
                                                    id="disabled-custom-switch"
                                                    label="Agotado"
                                                />
                                            </Form>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Precio</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Range />
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Categoria</Accordion.Header>
                                        <Accordion.Body>
                                            <Form>
                                                {['checkbox'].map((type) => (
                                                    <div key={`default-${type}`} className="mb-3">
                                                        <Form.Check
                                                            type={type}
                                                            id={`default-${type}`}
                                                            label={`Outlet`}
                                                        />

                                                        <Form.Check
                                                            type={type}
                                                            label={`Semi nuevo`}
                                                            id={`disabled-default-${type}`}
                                                        />
                                                    </div>
                                                ))}
                                            </Form>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Capacidad</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Range />
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Color</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Range />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                            </Col>

                            <Col style={{ marginLeft: "10px", }} align="center">
                                <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                        <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                            <Card.Title>iPhone 13 Pro Max</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                            <Card.Text>En stock.</Card.Text>
                                            <Card.Link href="#">Ver más</Card.Link></a>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                        <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                            <Card.Title>iPhone 13 Pro Max</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                            <Card.Text>En stock.</Card.Text>
                                            <Card.Link href="#">Ver más</Card.Link></a>
                                    </Card.Body>
                                </Card>
                                <br />
                            </Col>
                            <Col align="center">
                                <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                        <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                            <Card.Title>iPhone 13 Pro Max</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                            <Card.Text>En stock.</Card.Text>
                                            <Card.Link href="#">Ver más</Card.Link></a>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                        <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                            <Card.Title>iPhone 13 Pro Max</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                            <Card.Text>En stock.</Card.Text>
                                            <Card.Link href="#">Ver más</Card.Link></a>
                                    </Card.Body>
                                </Card>
                                <br />
                            </Col>

                            <Col align="center">
                                <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                        <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                            <Card.Title>iPhone 13 Pro Max</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                            <Card.Text>En stock.</Card.Text>
                                            <Card.Link href="#">Ver más</Card.Link></a>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                        <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                            <Card.Title>iPhone 13 Pro Max</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                            <Card.Text>En stock.</Card.Text>
                                            <Card.Link href="#">Ver más</Card.Link></a>
                                    </Card.Body>
                                </Card>
                                <br />
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

export default Productos;