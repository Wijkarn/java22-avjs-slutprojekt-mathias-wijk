import ProductCard from "./Productcards";
import Filterbutton from "./Filterbutton";
import "../../css/Productcontainer.css";
import { useEffect, useState } from 'react';

export default function Productcontainer({setNewCartItem }) {
    const [products, setProducts] = useState([]);
    const [theme, setTheme] = useState("All");
    const [allThemes, setAllThemes] = useState([]);

    async function getProducts() {
        const res = await fetch(`https://java22legoshop-default-rtdb.europe-west1.firebasedatabase.app/new/.json`);
        const data = await res.json();

        console.log(data);

        const themeArray = Object.keys(data);

        setProducts(data);

        setAllThemes(themeArray);
    }

    useEffect(() => {
        getProducts();
    }, []
    );


    return (
        <>
            <Filterbutton themes={allThemes} setTheme={setTheme} />
            <div className="item-container">

                {theme === "All" ? Object.keys(products).map(productTheme => Object.keys(products[productTheme]).map(product => <ProductCard key={product} title={products[productTheme][product].title} theme={productTheme} pieces={products[productTheme][product].pieces} price={products[productTheme][product].price} imgSrc={products[productTheme][product].imgSrc} itemId={product} stock={products[productTheme][product].stock} setNewCartItem={setNewCartItem} />))
                    : Object.keys(products[theme]).map(product => <ProductCard keys={product + product} title={products[theme][product].title} theme={theme} pieces={products[theme][product].pieces} price={products[theme][product].price} imgSrc={products[theme][product].imgSrc} itemId={product} stock={products[theme][product].stock} setNewCartItem={setNewCartItem} />)}

            </div>
        </>
    );
}