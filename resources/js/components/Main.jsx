import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';

function Main() {
  return (
    <>
      <body>
        <div>
          <Carousel>
            <Carousel.Item interval={1500}>
              <Link to='/example-app/public/iphone13'>
              <img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/BannerSitio_MX_iPhoneXr_Horizontal.png?v=1662173234&width=3000"
                alt="First slide"
                style={{ maxWidth: 'auto' }}
              />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <Link to='/example-app/public/metodo'><img
                className="d-block w-100"
                src="http://cdn.shopify.com/s/files/1/0325/8708/8005/files/Banner_Horizontal_Mercado_Pago.png?v=1662586134&width=3000"
                alt="First slide"
                style={{ maxWidth: 'auto' }}
              /></Link>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <Link to='/example-app/public/metodo'><img
                className="d-block w-100"
                src="//cdn.shopify.com/s/files/1/0325/8708/8005/files/BannerSitio_MX_Zip1_Horizontal.png?v=1662173234&width=3000"
                alt="Second slide"
                style={{ maxWidth: 'auto' }}
              /></Link>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <Link to='/example-app/public/metodo'><img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/BannerSitio_MX_Kueski1_Horizontal.png?v=1662173234&width=3000"
                alt="Third slide"
                style={{ maxWidth: 'auto' }}
              /></Link>
            </Carousel.Item>
          </Carousel>
        </div>

        <div align="center">
          <header>
            <br />
            <h1>Productos</h1>
            <div align="center" style={{ maxWidth: '90%' }}>
              <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3" fill>
                <Tab eventKey="home" title="iPhone 13">
                  <Stack direction="horizontal" gap={3} id="iphone13">
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone 13 Pro Max</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link>
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_02c37f1e-e046-4e3a-8a78-cc26097c62cc_478x.jpg?v=1665803705" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone 13 Pro</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $20,990</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link>
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-01_453x.jpg?v=1665803691" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone 13</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $17,990</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link>
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-mini-01_457x.jpg?v=1665803695" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone 13 Mini</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $14,490</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </Stack>
                </Tab>
                <Tab eventKey="profile" title="iPhone 12">
                  <Stack direction="horizontal" gap={3} id="iphone12">
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-mini-01_457x.jpg?v=1665803695" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone 12 Pro Max</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $18,990</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-12-r1_1_477x.jpg?v=1636126435" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone 12 Pro</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $14,990</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-12-r1_1_477x.jpg?v=1636126435" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone 12</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $12,490</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-12-mini-r1_1_477x.jpg?v=1637180895" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone 12 Mini</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $10,990</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </Stack>
                </Tab>
                <Tab eventKey="longer-tab" title="iPhone 11">
                  <Stack direction="horizontal" gap={3} id="iphone11">
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-12-mini-r1_1_477x.jpg?v=1637180895" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone 11 Pro Max</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $12,490</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-pro-10_700x.png?v=1621288402" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone 11 Pro</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $10,990</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-pro-10_700x.png?v=1621288402" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone 11</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $10,990</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </Stack>
                </Tab>
                <Tab eventKey="contact" title="Otros">
                  <Stack direction="horizontal" gap={3} id="iphone11">
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-pro-10_700x.png?v=1621288402" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone XS Max</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $7,490</Card.Subtitle>
                            <Card.Text>Agotado.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-pro-10_700x.png?v=1621288402" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone XS</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $7,090</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/Apple_Iphone_XR_700x.png?v=1621288380" style={{ maxHeight: '300px' }} />
                            <Card.Title>iPhone XR</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $6,190</Card.Subtitle>
                            <Card.Text>En stock.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="bg-light border">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Link to='/example-app/public/iphone13'><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/iphone-x_700x.png?v=1621288396" style={{ maxHeight: '250px' }} />
                            <Card.Title>iPhone X</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde $5,990</Card.Subtitle>
                            <Card.Text>Agotado.</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </Stack>
                </Tab>
              </Tabs>
            </div>
          </header>
          <br />

          <div align="center" className='productos'>
            <br />
            <Button variant="outline-primary" size="lg" as={Link} to='/example-app/public/productos'>
              Ver todos
            </Button>
          </div>

          <br />

          <div style={{ maxWidth: '90%' }}>
            <header>
              <h3>Compra 100% seguro con nuestros</h3>
              <h1>MÉTODOS DE PAGO</h1>
            </header>
            <div>
              <Row xs={1} md={2} className="g-4" >
                <Col>
                  <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.40.39_p.m._1600x.png?v=1662576051" />
                    <Card.Body>
                      <Card.Title>KUESKI PAY</Card.Title>
                      <Card.Text>
                        Kueski Pay es un método de pago digital que te permite hacer compras en línea
                        con comercios afiliados sin la necesidad de tener una tarjeta de crédito.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.42.24_p.m._1378x.png?v=1662576160" />
                    <Card.Body>
                      <Card.Title>MERCADO PAGO</Card.Title>
                      <Card.Text>
                        Mercado Pago es la mayor plataforma de cobros online de la México.
                        La herramienta te permite cobrar por diferentes canales: Link de Pago
                        (Redes Sociales y WhatsApp), QR y Point (de manera presencial) y
                        Checkout de Mercado Pago en tu tienda online.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row xs={1} md={2} className="g-4">
                <Col>
                  <Card>
                    <Card.Img variant="top" src="//cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.34.57_p.m._1600x.png?v=1662575759" />
                    <Card.Body>
                      <Card.Title>PAYPAL</Card.Title>
                      <Card.Text>
                        El sistema de pagos más seguro de internet se llama PayPal y es
                        utilizado por millones de personas que hacen sus compras online.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Img variant="top" src="//cdn.shopify.com/s/files/1/0325/8708/8005/files/PAGO_EN_EFECTIVO_1600x.png?v=1658873081" />
                    <Card.Body>
                      <Card.Title>PAGO EN EFECTIVO Y TRANSFERENCIAS</Card.Title>
                      <Card.Text>
                        La transferencia bancaria es un método de transferencia electrónica
                        de fondos de una persona o entidad a otra.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <br />

          <div style={{ maxWidth: '90%' }}>
            <Carousel variant="dark">
              <Carousel.Item>
                <a href=""><img
                  className="d-block w-100"
                  src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/iconos-28_170x.png?v=1658869951"
                  alt="Envíos NACIONALES"
                  style={{ maxWidth: '100px' }}
                />
                  <h5>ENVIOS NACIONALES</h5>
                  <p>Conoce la mejor forma de recibir tu próximo Clevercel..</p></a>
                <br />
              </Carousel.Item>
              <Carousel.Item>
                <a href=""><img
                  className="d-block w-100"
                  src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/iconos-29_4e306b6c-e841-4f5b-9200-55604d0f75e5_180x.png?v=1658870053"
                  alt="Second slide"
                  style={{ maxWidth: '100px' }}
                />
                  <h5>GARANTIA</h5>
                  <p>No te preocupes por el funcionamiento de tu Clevercel.</p></a>
                <br />
              </Carousel.Item>
              <Carousel.Item>
                <a href=""><img
                  className="d-block w-100"
                  src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/iconos-30_230x.png?v=1658870224"
                  alt="Third slide"
                  style={{ maxWidth: '100px' }}
                />
                  <h5>SERVICIO AL CLIENTE</h5>
                  <p>Resuelve tus dudas.</p></a>
                <br />
              </Carousel.Item>
              <Carousel.Item>
                <a href=""><img
                  className="d-block w-100"
                  src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/iconos-31_220x.png?v=1658870290"
                  alt="Third slide"
                  style={{ maxWidth: '100px' }}
                />
                  <h5>FORMAS DE PAGO</h5>
                  <p>Conoce nuestros métodos de pago.</p></a>
                <br />
              </Carousel.Item>
            </Carousel>
          </div>

          <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.52.56_p.m._2212x.png?v=1662576794"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.56.21_p.m._1600x.png?v=1662577000"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="//cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.55.36_p.m._1600x.png?v=1662577149"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.55.58_p.m._1600x.png?v=1662577062"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </body>


    </>
  );
}

export default Main;