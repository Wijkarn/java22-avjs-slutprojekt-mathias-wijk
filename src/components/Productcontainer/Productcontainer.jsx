import ProductCard from "./Productcards";
import Filterbutton from "./Filterbutton";
import "../../css/Productcontainer.css";
import { useEffect, useState } from 'react';

export default function Productcontainer({ setCart, cart, showCart, setShowCart , setNewCartItem}) {
    const [products, setProducts] = useState({});
    const [theme, setTheme] = useState("All");
    const [allThemes, setAllThemes] = useState([]);

    async function getProducts() {
        const res = await fetch(`https://java22legoshop-default-rtdb.europe-west1.firebasedatabase.app/old/.json`);
        const data = await res.json();
        let array = [];

        setProducts(data)
        // Object.keys(data).map(key => data[key].map(product => console.log(product)))
        Object.keys(data).map(key => {
            array.push(key);
        })
        setAllThemes(array);
    }

    useEffect(() => {
        getProducts();
    }, []
    );

    return (
        <>
            <Filterbutton themes={allThemes} setTheme={setTheme} />
            <div className="item-container">
                {theme === "All" && Object.keys(products).map(key => products[key].map(product => <ProductCard key={product.itemId} title={product.title} theme={key} pieces={product.pieces} price={product.price} imgSrc={product.imgSrc} itemId={product.itemId} stock={product.stock} setNewCartItem={setNewCartItem} />))}
                {theme !== "All" && products[theme].map(product => <ProductCard key={product.itemId} title={product.title} theme={theme} pieces={product.pieces} price={product.price} imgSrc={product.imgSrc} itemId={product.itemId} stock={product.stock} setNewCartItem={setNewCartItem}/>)}
            </div>
        </>
    );
}