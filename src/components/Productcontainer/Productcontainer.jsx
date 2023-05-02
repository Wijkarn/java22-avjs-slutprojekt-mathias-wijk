import ProductCard from "./Productcards";
import Sortbutton from "./Sortbutton";
import "../../css/Productcontainer.css";
import { useEffect, useState } from 'react';

export default function Productcontainer() {
    const [products, setProducts] = useState({})
    const [theme, setTheme] = useState("");

    async function getProducts(theme) {
        if(theme === "All"){
            theme = "";
        }
        const res = await fetch(`https://java22legoshop-default-rtdb.europe-west1.firebasedatabase.app/${theme}.json`);
        const data = await res.json();

        // console.log(Array.isArray(data))
        
        setProducts(data)

        console.log('in getProducts', data)
        // Object.keys(data).map(key => data[key].map(product => console.log(product)))
    }

    useEffect(() => {
        getProducts(theme);
    }, [theme]
   );

    return (
        <main>
            <Sortbutton themes={products} setTheme={setTheme}/>
            <div className="item-container">
                { !Array.isArray(products) && Object.keys(products).map(key => products[key].map(product => <ProductCard key={product.itemId} title={product.title} theme={key} pieces={product.pieces} price={product.price} imgSrc={product.imgSrc} itemId={product.itemId} stock={product.stock}/>))}
                { Array.isArray(products) && products.map(product => <ProductCard key={product.itemId} title={product.title} theme={theme} pieces={product.pieces} price={product.price} imgSrc={product.imgSrc} itemId={product.itemId} stock={product.stock}/>)} 
            </div>
        </main>
    );
}