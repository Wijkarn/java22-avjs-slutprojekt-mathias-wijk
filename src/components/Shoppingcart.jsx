import "../css/Shoppingcart.css";

export default function Shoppingcart({ cart, setCart, setShowCart, newCartItem, setNewCartItem }) {

    let totalAmount = 0;

    cart.map(product => {
        totalAmount += (product.inCart * product.price);
    });

    function handleCheckout() {
        if (cart.length > 0) {
            alert("Thank you for your purchase!");
            setCart([]);
            setShowCart(false);
        }
        else{
            alert("Your cart is empty!");
        }
    }

    function handleContinue() {
        setShowCart(false);
    }

    function handleEmpty() {
        setCart([]);
    }

    return (
        <div id="shopping-cart">
            <div id="cart">
                {cart.map(product => <div key={product.itemId} className="cart-item"><div><img className="cart-item-img" src={product.imgSrc} />{product.itemId} <span className="product-title">{product.title}</span><span>{product.inCart * product.price} kr</span></div><span className="produc-amount">Qty: {product.inCart}</span></div>)}
            </div>
            <div id="order">
                <h2>Order summary</h2>
                <h4>Total: {totalAmount} kr</h4>
                <button className="order-btn" onClick={handleCheckout}>Checkout</button>
                <button className="order-btn" onClick={handleContinue}>Continue Shopping</button>
                <button className="order-btn" onClick={handleEmpty}>Empty Cart</button>
            </div>
        </div>
    );
}