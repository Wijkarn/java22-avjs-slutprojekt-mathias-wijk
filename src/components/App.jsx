import "../css/App.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Productcontainer from "./Productcontainer/Productcontainer";
import Shoppingcart from "./Shoppingcart";

export default function App() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    return (
        <>
            <Navbar cart={cart} setShowCart={setShowCart} />

            <main>
                {!showCart && <Productcontainer setCart={setCart} cart={cart}/>}
                {showCart && <Shoppingcart setCart={setCart} cart={cart} setShowCart={setShowCart}/>}
            </main>

        </>

    );
}