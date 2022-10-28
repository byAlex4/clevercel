import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import Productos from "./Productos";
import Producto1 from "./Producto1";
import Promo from "./Promo";
import MetodoPago from "./MetodoPago";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/example-app/public/" element={<Navbar />}>
                        <Route index element={<MetodoPago/>} />
                        <Route path="main" element={<Main />} />
                        <Route path="productos" element={<Productos />} />
                        <Route path="iphone13" element={<Producto1 />} />
                        <Route path="metodo" element={<MetodoPago />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
