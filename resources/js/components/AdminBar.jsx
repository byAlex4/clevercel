import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import React from 'react';
import Admin from './Admin';
import AdminProductos from './AdminProductos';
import AdminCategorias from './AdminCategorias';

function AdminBar() {
    return (
        <>
            <div style={{display: "grid", content: "center", backgroundColor: "#f5f6fb" }}>
                <Row>
                    <Col>
                        <Tab.Container id="left-tabs-example">
                            <Row>
                                <Col sm={3} style={{paddingLeft: "2%", background: "#2a52c4", paddingBottom: "5%"}}>
                                    <img src="https://8099266.fs1.hubspotusercontent-na1.net/hub/8099266/hubfs/logo%20clevercel_blanco-06-1.png?height=120&name=logo%20clevercel_blanco-06-1.png" 
                                    style={{width: "80%"}}/>
                                    <Nav variant="pills" className="flex-column" activeKey={"Tablero"}>
                                        <hr />
                                        <Nav.Item>
                                            <Nav.Link eventKey="Tablero" title="Tablero">Tablero</Nav.Link>
                                        </Nav.Item>
                                        <hr />
                                        <Nav.Item>
                                            <Nav.Link eventKey="Categorias">Categorias</Nav.Link>
                                        </Nav.Item>
                                        <hr />
                                        <Nav.Item>
                                            <Nav.Link eventKey="Productos">Productos</Nav.Link>
                                        </Nav.Item>
                                        <hr />
                                        <Nav.Item>
                                            <Nav.Link eventKey="Usuarios">Usuarios</Nav.Link>
                                        </Nav.Item>
                                        <hr />
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Row style={{backgroundColor: "#ffffff"}}>
                                        <header>
                                            <Navbar>
                                                <Container>
                                                    <Form className="d-flex">
                                                        <Form.Control
                                                            type="search"
                                                            placeholder="Search"
                                                            className="me-2"
                                                            aria-label="Search"
                                                        />
                                                        <Button variant="outline-success">Search</Button>
                                                    </Form>
                                                    <Navbar.Collapse className="justify-content-end">
                                                        <Navbar.Text>
                                                            Signed in as: <a href="#login">Admin</a>
                                                        </Navbar.Text>
                                                    </Navbar.Collapse>
                                                </Container>
                                            </Navbar>
                                        </header>
                                    </Row>
                                    <Tab.Content style={{ marginTop: "2%", marginBottom: "2%", marginLeft: "2%", 
                                    paddingTop: "2%" , paddingBottom: "2%" , backgroundColor: "#ffffff", width: "95%", maxHeight: "80%"}}>
                                        <Tab.Pane eventKey="Tablero">
                                            <Admin />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Categorias">
                                            <AdminCategorias />
                                        </Tab.Pane> 
                                        <Tab.Pane eventKey="Productos">
                                            <AdminProductos />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Usuarios">
                                            <Admin />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </div>
            <footer style={{ backgroundColor: '#fff773', paddingBottom: "2%" }}>
                <hr />
                <p>Copyright to @Clevercel</p>
            </footer>
        </>
    );
}

export default AdminBar;