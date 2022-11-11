import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Productos from "./Productos";
import Producto1 from "./Producto1";
import Promo from "./Promo";
import MetodoPago from "./MetodoPago";
import Ayuda from "./Ayuda";
import Login from "./Login";
import Carrito from "./Carrito";
import AdminBar from "./AdminBar";
import Admin from "./Admin";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/example-app/public" element={<AdminBar />}>
                        <Route index element={<Admin/>} />
                        <Route path="main" element={<Main />} />
                        <Route path="productos" element={<Productos />} />
                        <Route path="promos" element={<Promo />} />
                        <Route path="iphone13" element={<Producto1 />} />
                        <Route path="metodo" element={<MetodoPago />} />
                        <Route path="centro" element={<Ayuda />} />
                        <Route path="login" element={<Login />} />
                        <Route path="carro" element={<Carrito />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
