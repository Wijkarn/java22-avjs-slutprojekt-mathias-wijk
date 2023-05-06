import ProductCard from "./Productcards";
import Filterbutton from "./Filterbutton";
import "../../css/Productcontainer.css";
import { useEffect, useState } from 'react';

export default function Productcontainer({ setCart, cart, showCart, setShowCart, setNewCartItem }) {
    const [products, setProducts] = useState([]);
    const [theme, setTheme] = useState("All");
    const [allThemes, setAllThemes] = useState([]);

    async function getProducts() {
        const res = await fetch(`https://java22legoshop-default-rtdb.europe-west1.firebasedatabase.app/new/.json`);
        const data = await res.json();

        console.log(data);

        const themeArray = Object.keys(data);
        // const themeObjects = Object.values(data);
        // const themeArrayValues = Object.keys(themeObjects);

        // console.log("Theme Array", themeArray);
        // console.log("Theme Array", themeArray);
        // console.log("themeArrayValues", themeArrayValues);

        // const arr = themeArray.map(function (theme) { return theme + 'bara för att visa' });
        // console.log('arr', arr)

        // themeObjects.map(themeObject => {
        //     // console.log("themeObject:", themeObject)
        //     Object.values(themeObject).map(item => {
        //         console.log("item:", item.title)
        //     })
        // });

        // console.log("Theme array values", themeArrayValues);

        setProducts(data);
        // setProducts(themeObjects);
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
                {/* {theme === "All" && Object.keys(products).map(key => Object.keys(products).map(product => <ProductCard key={product.itemId} title={product.title} theme={key} pieces={product.pieces} price={product.price} imgSrc={product.imgSrc} itemId={product.itemId} stock={product.stock} setNewCartItem={setNewCartItem} />))} */}

                {/* {theme === "All" && Object.keys(products).map(key => Object.keys(products[key]).map(product => console.log("stock:", products[key][product].stock, "Item", product , "Theme:", key)))} */}
                {/* {theme === "All" && Object.keys(products).map(key => Object.keys(key).map(product => console.log("stock:", product.stock)))} */}

                {/* WORKING!! */}
                {/* {theme === "All" && Object.keys(products).map(key => Object.keys(products[key]).map(product => <ProductCard key={product} title={products[key][product].title} theme={products[key][product].key} pieces={products[key][product].pieces} price={products[key][product].price} imgSrc={products[key][product].imgSrc} itemId={product} stock={products[key][product].stock} setNewCartItem={setNewCartItem}/>))} */}
                {theme === "All" ? Object.keys(products).map(productTheme => Object.keys(products[productTheme]).map(product => <ProductCard key={product} title={products[productTheme][product].title} theme={productTheme} pieces={products[productTheme][product].pieces} price={products[productTheme][product].price} imgSrc={products[productTheme][product].imgSrc} itemId={product} stock={products[productTheme][product].stock} setNewCartItem={setNewCartItem} />))
                    : Object.keys(products[theme]).map(product => <ProductCard keys={product} title={products[theme][product].title} theme={theme} pieces={products[theme][product].pieces} price={products[theme][product].price} imgSrc={products[theme][product].imgSrc} itemId={product} stock={products[theme][product].stock} setNewCartItem={setNewCartItem} />)}

                {/* {theme === "All" && Object.values(products).map(key => Object.values(key).map(product => <ProductCard key={product} title={product.title} theme={product} pieces={product.pieces} price={product.price} imgSrc={product.imgSrc} itemId={product} stock={product.stock} setNewCartItem={setNewCartItem}/>))} */}

                {
                    // /* {theme === "All" && Object.values(products).map(key => {
                    //     Object.values(key).map(product => {
                    //         <ProductCard key={product} title={product.title} />
                    //         console.log("Products:", products, "Keys:", key, "Product:", product, "Img", product.imgSrc);
                    //     })
                    // })
                    // } */
                }

                {
                    // console.log(products)
                    /*theme === "All" && products.map(themeObject =>
                        Object.values(themeObject).map(item => {
                            Object.keys(themeObject).map(itemId => console.log(itemId))
                            console.log("item:", item, "themeobject:", themeObject);
                            return <ProductCard key={item.title} title={item.title} itemId={"ID:"} pieces={item.pieces} imgSrc={item.imgSrc} stock={item.stock} price={item.price} />
                        })
                    )
                    */
                }

                {/* {theme === "All" && Object.keys(products).map(key => Object.keys(products[key]).map(product => Object.keys(products[key][product]).map(prop => console.log(prop))))} */}
                {/* theme !== "All" && products[theme].map(product => <ProductCard key={product.itemId} title={product.title} theme={theme} pieces={product.pieces} price={product.price} imgSrc={product.imgSrc} itemId={product.itemId} stock={product.stock} setNewCartItem={setNewCartItem}/>)*/}
            </div>
        </>
    );
}