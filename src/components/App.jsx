import "../css/App.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Productcontainer from "./Productcontainer/Productcontainer";

export default function App() {
    const [cart, setCart] = useState([]);

    return (
        <>
            <Navbar cart={cart}/>

            <Productcontainer setCart={setCart} cart={cart}/>
        </>

    );
}