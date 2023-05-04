import "../css/App.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Productcontainer from "./Productcontainer/Productcontainer";
import Shoppingcart from "./Shoppingcart";

export default function App() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [newCartItem, setNewCartItem] = useState({});

    useEffect(() => {
        if (newCartItem.itemId != undefined) {
            let newCart = [...cart];

            let newItem = true;
            let firstItem = true;

            cart.map(product => {
                if (product.itemId === newCartItem.itemId) {
                    product.inCart++;
                    // console.log("Old item");
                    newItem = false;
                }
            });

            if (newItem && firstItem) {
                // console.log("New item")
                newCart.push(newCartItem);
            }

            // console.log(newCart)
            setCart(newCart);
        }

    }, [newCartItem]
    )

    return (
        <>
            <Navbar cart={cart} setShowCart={setShowCart} newCartItem={newCartItem} />

            <main>
                {!showCart && <Productcontainer setCart={setCart} cart={cart} setNewCartItem={setNewCartItem} />}

                {showCart && <Shoppingcart setCart={setCart} cart={cart} setShowCart={setShowCart} newCartItem={newCartItem} />}
            </main>

        </>

    );
}