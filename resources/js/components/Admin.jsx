import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';

function Admin() {
    return (
        <>
            <body style={{width: "95%", marginLeft: "3%", paddingRight: "2%" ,}}>
            <div style={{ maxWidth: '95%', display: "grid", content: "center", marginLeft: "3%" }}>
                    <h1>Dashboard</h1>
                    <div class="position-relative">
                        <Row align="center">
                            <Col>
                            <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                    <Link to='/example-app/public/iphone13'>
                                        <img src="https://icons.iconarchive.com/icons/sora-meliae/matrilineare/512/Categories-applications-office-icon.png" 
                                        style={{ width: '90%' }} />
                                            <Card.Title>Categorias</Card.Title>
                                            <Card.Link href="#">Ver más</Card.Link></Link>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                    <Link to='/example-app/public/iphone13'>
                                        <img src="https://icons.iconarchive.com/icons/sora-meliae/matrilineare/512/Categories-applications-office-icon.png" 
                                        style={{ width: '90%' }} />
                                            <Card.Title>Categorias</Card.Title>
                                            <Card.Link href="#">Ver más</Card.Link></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                    <Link to='/example-app/public/iphone13'>
                                        <img src="https://cdn-icons-png.flaticon.com/512/1170/1170577.png" 
                                        style={{ width: '90%' }} />
                                            <Card.Title>Productos</Card.Title>
                                            <Card.Link href="#">Ver más</Card.Link></Link>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                    <Link to='/example-app/public/iphone13'>
                                        <img src="https://icons.iconarchive.com/icons/sora-meliae/matrilineare/512/Categories-applications-office-icon.png" 
                                        style={{ width: '90%' }} />
                                            <Card.Title>Categorias</Card.Title>
                                            <Card.Link href="#">Ver más</Card.Link></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                    <Link to='/example-app/public/iphone13'>
                                        <img src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png" 
                                        style={{ width: '90%' }} />
                                            <Card.Title>Usuarios</Card.Title>
                                            <Card.Link href="#">Ver más</Card.Link></Link>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card style={{ width: 'auto' }}>
                                    <Card.Body>
                                    <Link to='/example-app/public/iphone13'>
                                        <img src="https://icons.iconarchive.com/icons/sora-meliae/matrilineare/512/Categories-applications-office-icon.png" 
                                        style={{ width: '90%' }} />
                                            <Card.Title>Categorias</Card.Title>
                                            <Card.Link href="#">Ver más</Card.Link></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                                
                        </Row>
                    </div>
                    <hr />

                    <div align="center" style={{paddingBottom:"2%"}}>
                        <h5>Adminitra el negocio con estas herramientas.</h5>
                    </div>

                </div>
            </body>
        </>
    );
}
export default Admin;