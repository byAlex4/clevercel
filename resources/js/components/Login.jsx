import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    return (
        <>
            <body>
                <div style={{ marginTop: '5%', marginBottom: '5%' }} align='center'>
                    <h2
                        style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '54px' }}>
                        Inicio de Sesion
                    </h2>
                    <br />
                    <p> Por favor, introduzca su correo electrónico y contraseña: </p>

                    <Form style={{ marginRight: '35%', marginLeft: '35%' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Escriba su correo electronico" />
                            <Form.Text className="text-muted">
                                Nunca compartiremos su correo electrónico con nadie más.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>

                        <div className="d-grid" style={{ marginTop: '8%'}}>
                            <Button variant='outline' size="lg" style={{ fontFamily: 'sans-serif', fontWeight:'bold', background: '#fff773' }}>
                                Inicar sesion
                            </Button>
                        </div>
                    </Form>
                </div>
            </body>
        </>
    );
}

export default Login;