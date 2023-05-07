import { useState } from "react";

export default function ProductCard({ title, price, theme, pieces, imgSrc, itemId, stock, setNewCartItem, cart }) {
    let tempStock = stock;

    if (cart.length != 0) {
        cart.forEach(product => {
            if (product.itemId == itemId) {
                tempStock = stock - product.inCart;
            }
        });
    }

    const [currentStock, setCurrentStock] = useState(tempStock);
    let stockClass;
    let button;

    function handleClick() {

        if (currentStock > 0) {
            const newCartItem = {
                title: title,
                price: price,
                theme: theme,
                imgSrc: imgSrc,
                itemId: itemId,
                stock: stock,
                pieces: pieces,
                inCart: 1
            }
            setCurrentStock(currentStock - 1);

            setNewCartItem(newCartItem);
        }
    }

    if (currentStock < 1) {
        button = "Out of stock";
        stockClass = "img-out-of-stock";
    }
    else {
        button = "Add to cart";
        stockClass = "";
    }

    return (
        <div className="item-card" key={itemId}>
            {currentStock < 1 && <span className="out-of-stock-card">OUT OF STOCK</span>}
            <img className={stockClass} src={imgSrc} />
            <span className="hover">{itemId} {title}</span>
            <span className="item-price">{price} kr</span>
            <span className="pieces">{pieces} pcs</span>
            <span>Theme: {theme}</span>
            <span>Stock: {currentStock}</span>
            <button onClick={handleClick} disabled={!currentStock} className="add-to-cart-btn">{button}</button>
        </div>
    );
}