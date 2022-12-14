import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Outlet, Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <>
      <header>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <a href="http://localhost/example-app/public/">
              <img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/logo_Web_copy_5296e797-bef9-46ff-b9d4-6fce0c573bc6_550x.png?v=1630618828"
                style={{ maxHeight: '45px' }} />
            </a>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link as={Link} to='/example-app/public/productos'>iPhone</Nav.Link>
                <Nav.Link as={Link} to='/example-app/public/promos'>Promos del Mes</Nav.Link>
                <Nav.Link as={Link} to='/example-app/public/metodo'>Metodos de pago</Nav.Link>
                <Nav.Link as={Link} to='/example-app/public/centro'>┬┐Necesitas ayuda?</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Busqueda" className="me-2" aria-label="Busqueda" />
              </Form>
              <Link to='login'>
                <img 
                src="https://banner2.cleanpng.com/20180622/tqt/kisspng-computer-icons-user-clip-art-consignee-5b2d25107181a2.1674732415296852644649.jpg" 
                style={{ maxHeight: '35px' }}/>
              </Link>
              
              <Link to='carro'>
                <img 
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png" 
                style={{ maxHeight: '35px' }}/>
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <section>
        <Outlet></Outlet>
      </section>

      <footer style={{ backgroundColor: '#fff773' }}>
        <br />
        <div>
          <Container>
            <Row>
              <Col>
                <h3>BUSQUEDA</h3>

                <p><a href="">Busqueda</a></p>
                <p><a href="">T├ęrminos del servicio</a></p>
              </Col>

              <Col>
                <h3>CONT├üCTANOS</h3>

                <p><a href="">servicioalcliente@clevercel.mx</a></p>
                <p>Encuentra nuestros productos en cualquiera de los siguientes <a href="">MARKETPLACES</a>:</p>
                <ul>
                  <li>
                    Claro Shop / Liverpool
                  </li>
                  <li>
                    Coppel / Amazon
                  </li>
                  <li>
                    Mercado Libre
                  </li>
                </ul>
                <p>Tambi├ęn estamos en:</p>
                <ul>
                  <li>
                    <a href="">Colombia Clevercel.co</a>
                  </li>
                  <li>
                    <a href="">Per├║ Clevercel.pe</a>
                  </li>
                </ul>
              </Col>

              <Col>
                <h3>NOSOTROS</h3>

                <p><a href="">┬┐QUI├ëNES SOMOS?</a></p>
                <p><a href="">MEDIO AMBIENTE</a></p>
                <p><a href="">SEGURIDAD</a></p>
                <p><a href="">CALIDAD</a></p>
              </Col>

              <Col>
                <h3>POL├ŹTICAS DEL SITIO</h3>

                <p><a href="">Tratamiento de Datos</a></p>
                <p><a href="">T├ęrminos y condiciones</a></p>
                <p><a href="">Pol├ştica de Cookies</a></p>
                <p><a href="">Pol├şticas de Env├şo</a></p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default NavScrollExample;