import ProductCard from "./Productcard";
import Filterbutton from "./Filterbutton";
import SortButton from "./Sortbutton";
import "../../css/Productcontainer.css";
import { useEffect, useState } from 'react';

export default function Productcontainer({ setNewCartItem, cart }) {
    const [products, setProducts] = useState([]);
    const [theme, setTheme] = useState("All");
    const [allThemes, setAllThemes] = useState([]);

    // Gets all products from firebase
    async function getProducts() {
        const res = await fetch(`https://java22legoshop-default-rtdb.europe-west1.firebasedatabase.app/.json`);

        if (res.status == 200) {
            const data = await res.json();

            const themeArray = Object.keys(data);

            // adds all products to an array
            const productsArray = [];
            Object.keys(data).map(themes => {
                Object.keys(data[themes]).map(product => {
                    productsArray.push(
                        {
                            itemId: product,
                            theme: themes,
                            imgSrc: data[themes][product].imgSrc,
                            title: data[themes][product].title,
                            pieces: data[themes][product].pieces,
                            price: data[themes][product].price,
                            stock: data[themes][product].stock
                        }
                    )
                })
            });

            setProducts(productsArray);

            setAllThemes(themeArray);
        }
    }

    useEffect(() => {
        getProducts();
    }, []
    );

    return (
        <>
            <div id="filter-sort-buttons">
                <Filterbutton themes={allThemes} setTheme={setTheme} />
                <SortButton products={products} setProducts={setProducts} />
            </div>
            <div className="item-container">
                {/* loops through product array to create item cards */}
                {theme === "All" ? products.map(product => <ProductCard key={product.itemId} stock={product.stock} title={product.title} itemId={product.itemId} imgSrc={product.imgSrc} price={product.price} pieces={product.pieces} theme={product.theme} setNewCartItem={setNewCartItem} cart={cart} />)
                    : products.map(product => product.theme === theme && <ProductCard key={product.itemId} stock={product.stock} title={product.title} itemId={product.itemId} imgSrc={product.imgSrc} price={product.price} pieces={product.pieces} theme={product.theme} setNewCartItem={setNewCartItem} cart={cart} />)}

            </div>
        </>
    );
}