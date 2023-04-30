import ProductCard from "./Productcards";
import Sortbutton from "./Sortbutton";
import "../../css/Productcontainer.css";
import { useEffect, useState } from 'react';

export default function Productcontainer() {
    const [products, setProducts] = useState({})
    const [theme, setTheme] = useState("");

    async function getProducts(theme) {
        const res = await fetch(`https://java22legoshop-default-rtdb.europe-west1.firebasedatabase.app/${theme}.json`);
        const data = await res.json();

        setProducts(data)
        // Object.keys(data).map(key => data[key].map(product => console.log(product)))
    }

    useEffect(() => {
        getProducts(theme);
    }, [theme]
   );

    return (
        <main>
            <Sortbutton themes={products} />
            <div className="item-container">
                {Object.keys(products).map(key => products[key].map(product => <ProductCard key={product.itemId} title={product.title} theme={product.theme} pieces={product.pieces} price={product.price} imgSrc={product.imgSrc} itemId={product.itemId}/>))}
            </div>
        </main>
    );
}