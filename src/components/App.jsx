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
        // Adds new item to cart
        if (newCartItem.itemId != undefined) {
            let newCart = [...cart];

            let allowAddToCart = true;
            let newItem = true;
            let firstItem = true;

            // checks if item already exist
            cart.forEach(product => {
                if (product.itemId === newCartItem.itemId && product.stock > product.inCart) {
                    product.inCart++;
                    newItem = false;
                }
                else if (product.itemId === newCartItem.itemId && product.stock <= product.inCart) {
                    allowAddToCart = false;
                }
            });

            if (newItem && firstItem) {
                newCart.push(newCartItem);
            }

            if (allowAddToCart) {
                setCart(newCart);
            }
        }

    }, [newCartItem]
    );

    return (
        <>
            <Navbar cart={cart} setShowCart={setShowCart} newCartItem={newCartItem} />

            <main>
                {!showCart ? <Productcontainer setNewCartItem={setNewCartItem} cart={cart} />
                    : <Shoppingcart setCart={setCart} cart={cart} setShowCart={setShowCart} />}
            </main>

        </>

    );
}