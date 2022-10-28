import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MetodoPago() {
    return (
        <>
            <body>
                <div class="position-relative text">
                    <Card className="text-gray">
                        <Card.Img
                            src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/BANNER_P_3000x.png?v=1665009647"
                            alt="Card image"
                        />
                        <Card.ImgOverlay>
                            <Card.Title
                                style={{ position: 'absolute', top: '50%', right: '50%', fontWeight: 'bold', fontSize: '66px' }}>
                                Metodos de pago
                            </Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div align='center'>
                    <h4>Conoce nuestros Metodos de pago</h4>
                    <h5>Compra 100% seguro!</h5>

                    <div style={{ maxWidth: '90%' }}>
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card>
                                    <Card.Img
                                        src="http://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-07-15_a_la_s_6.04.40_p.m._1810x.png?v=1657926317"
                                        alt="Card image"
                                    />
                                    <Card.ImgOverlay className="text-white">
                                        <Card.Title
                                            style={{ position: 'absolute', top: '10%', right: '50%', fontWeight: 'bold', fontSize: '45px' }}>
                                            Tarjeta de Crédito y Débito
                                        </Card.Title>
                                    </Card.ImgOverlay>
                                    <Card.Body>
                                        <Card.Text align='left'>
                                            Paga con tu tarjeta de crédito Visa, American Express o
                                            MasterCard en nuestro sitio web a través de Mercado Pago y no pagues intereses:
                                            <ul>
                                                <li>
                                                    El beneficio de cuotas sin interés aplica solo para tarjeta
                                                    habientes de Afirme, American Express, Banbajio, Banca Mifel, banco Azteca, Banco Famsa, Banjercito, Banorte, Banregio,
                                                    Citibanamex, Falabella, HSBC, Inbursa, Invex, Konfio, Liverpool, Santander y Scotiabank.
                                                </li>

                                            </ul>
                                            Aplican términos y condiciones de uso de cada banco.
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
            </body>
        </>
    );
}
export default MetodoPago;