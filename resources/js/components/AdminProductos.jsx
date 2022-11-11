import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function AdminProductos() {
    return (
        <>
            <body style={{width: "95%", marginLeft: "3%", paddingRight: "2%" ,}}>
                <div style={{display:"inline-flex", textAlign: "end", paddingBottom: "10px  "}}>
                    <div style={{paddingRight: "20px"}}>
                        Categorias
                    </div>
                    <div>
                    <Button variant="primary">Agregar</Button>{' '}
                    </div>
                </div>
                <div>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Productos</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>iPhone</td>
                                <td>kjahdjhad</td>
                                <td>12</td>
                                <td>
                                    <Button variant="warning">Editar</Button>{' '}
                                    <Button variant="danger">Eliminar</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>iPads</td>
                                <td>Thornton</td>
                                <td>56</td>
                                <td>
                                    <Button variant="warning">Editar</Button>{' '}
                                    <Button variant="danger">Eliminar</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>iPods</td>
                                <td>jhkjhdkjashda</td>
                                <td>34</td>
                                <td>
                                    <Button variant="warning">Editar</Button>{' '}
                                    <Button variant="danger">Eliminar</Button>{' '}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </body>
        </>
    );
}
export default AdminProductos;