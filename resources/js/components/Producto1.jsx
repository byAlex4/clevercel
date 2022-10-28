import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Producto1() {
    return (
        <> <br />
            <body style={{ maxWidth: '95%', marginLeft: ' 10%', marginRight: ' 10%' }} >
                <Row>
                    <Col>
                        <img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" />
                    </Col>
                    <Col>
                        <h1>iPhone 13 Pro Max</h1>
                        <h3>$22,990</h3> <h4 disable>$25,490</h4>
                        <p>Impuesto incluido. Gastos de envío calculados en la compra </p>
                        <hr />

                        <p>Categoria:</p>
                        <Button variant="outline-secondary">Outlet</Button>{' '}
                        <Button variant="outline-secondary">Seminuevo</Button>{' '}
                        <Button variant="outline-secondary" disabled>Como Nuevo</Button>{' '} <br />

                        <br /><p>Capacidad:</p>
                        <Button variant="outline-secondary">128GB</Button>{' '}
                        <Button variant="outline-secondary">256GB</Button>{' '}
                        <Button variant="outline-secondary" disabled>512GB</Button>{' '}
                        <Button variant="outline-secondary" disabled>1TB</Button>{' '} <br />
                        <br /><p>Color:</p>
                        <Button variant="outline-secondary">Gold</Button>{' '}
                        <Button variant="outline-secondary">Silver</Button>{' '}
                        <Button variant="outline-secondary" disabled>Blue</Button>{' '}
                        <Button variant="outline-secondary">Pink</Button>{' '}
                        <Button variant="outline-secondary" disabled>Black</Button>{' '} <br />

                        <br /><p>Cantidad:</p>
                        <InputGroup className="mb-3" fill>
                            <Button variant="outline-secondary" id="button-addon1" size='lg'>
                                -
                            </Button>
                            <Form.Control
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                placeholder="0"
                                style={{ maxWeight: '30px' }}
                            />
                            <Button variant="outline-secondary" id="button-addon1">
                                +
                            </Button>
                        </InputGroup>

                        <p>En Stock.</p>

                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                                Añadir al carrito
                            </Button>
                            <Button variant="primary" size="lg">
                                Comprar ahora
                            </Button>
                        </div>
                    </Col>
                </Row>
                <br />
            </body>
        </>
    );
}

export default Producto1;