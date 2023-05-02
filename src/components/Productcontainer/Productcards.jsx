export default function ProductCard({ title, price, theme, pieces, imgSrc, itemId, stock}) {

    console.log(theme)

    return (
        <div className="item-card" key={itemId}>
            <img src={imgSrc} />
            <a href="#">{itemId} {title}</a>
            <span className="item-price">{price} kr</span>
            <span className="pieces">{pieces} pcs</span>
            <span>Theme: {theme}</span>
            <span>Stock: {stock}</span>
            <button className="add-to-cart-btn">Add to cart</button>
        </div>
    );
}