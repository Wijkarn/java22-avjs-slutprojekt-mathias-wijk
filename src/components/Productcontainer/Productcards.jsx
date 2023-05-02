export default function ProductCard({ title, price, theme, pieces, imgSrc, itemId, stock, setCart, cart }) {

    // console.log(title, price, theme, pieces, imgSrc, itemId, stock)

    function handleClick() {
        // console.log({ title, price, theme, pieces, imgSrc, itemId, stock });
        // cart.push( [title, price, theme, pieces, imgSrc, itemId, stock] );
        
        // console.log(cart.length);
        let newCart = [...cart];
       console.log( 'pushing:', newCart.push({ test: 'test'}) );
        // newCart[cart.length] = [title, price, theme, pieces, imgSrc, itemId, stock];

        // console.log(newCart);
        setCart(newCart);
    }

    return (
        <div className="item-card" key={itemId}>
            <img src={imgSrc} />
            <a href="#">{itemId} {title}</a>
            <span className="item-price">{price} kr</span>
            <span className="pieces">{pieces} pcs</span>
            <span>Theme: {theme}</span>
            <span>Stock: {stock}</span>
            <button onClick={handleClick} className="add-to-cart-btn">Add to cart</button>
        </div>
    );
}