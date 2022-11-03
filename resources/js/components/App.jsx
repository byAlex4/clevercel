import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import Productos from "./Productos";
import Producto1 from "./Producto1";
import Promo from "./Promo";
import MetodoPago from "./MetodoPago";
import Ayuda from "./Ayuda";
import Login from "./Login";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/example-app/public" element={<Navbar />}>
                        <Route index element={<Main/>} />
                        <Route path="/example-app/public/main" element={<Main />} />
                        <Route path="/example-app/public/productos" element={<Productos />} />
                        <Route path="/example-app/public/promos" element={<Promo />} />
                        <Route path="/example-app/public/iphone13" element={<Producto1 />} />
                        <Route path="/example-app/public/metodo" element={<MetodoPago />} />
                        <Route path="/example-app/public/centro" element={<Ayuda />} />
                        <Route path="/example-app/public/login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
