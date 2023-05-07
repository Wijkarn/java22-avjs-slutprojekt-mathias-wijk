import "../css/Shoppingcart.css";

export default function Shoppingcart({ cart, setCart, setShowCart }) {

    let totalAmount = 0;
    let totalCartItems = 0;

    // Calculates have many cart items and total price
    cart.forEach(product => {
        totalAmount += (product.inCart * product.price);
        totalCartItems += product.inCart;
    });

    function handleCheckout() {
        // Checks if something is in the cart
        if (cart.length > 0) {
            alert("Thank you for your purchase!");
            patchTooFirebase();
            setCart([]);
            setShowCart(false);
        }
        else {
            alert("Your cart is empty!");
        }
    }

    // Continue shopping
    function handleContinue() {
        setShowCart(false);
    }

    // Empty cart
    function handleEmpty() {
        setCart([]);
        setShowCart(false);
    }

    // Updates the database
    async function patchTooFirebase() {
        let patchCart = [...cart];

        const obj = {};

        // Loops through all products and sort them by theme
        patchCart.forEach(product => {
            obj[product.theme] = {
                ...obj[product.theme],
                [product.itemId]: {
                    stock: product.stock - product.inCart,
                    title: product.title,
                    pieces: product.pieces,
                    price: product.price,
                    imgSrc: product.imgSrc
                }
            }

        });

        // Loops through all themes and makes a patch for each theme
        for (const theme in obj) {
            const url = `https://java22legoshop-default-rtdb.europe-west1.firebasedatabase.app/new/${theme}.json`;

            const options = {
                method: "PATCH",
                body: JSON.stringify(obj[theme]),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }

            fetch(url, options);
        }
    }

    return (
        <div id="shopping-cart">
            <div id="cart">
                {cart.map(product => <div key={product.itemId} className="cart-item"><div><img className="cart-item-img" src={product.imgSrc} />{product.itemId} <span className="product-title">{product.title}</span><span>{product.inCart * product.price} kr</span></div><span className="produc-amount">Qty: {product.inCart}</span></div>)}
            </div>
            <div id="order">
                <h2>Order summary</h2>
                <h4>Total items in cart: {totalCartItems}</h4>
                <h4>Total: {totalAmount} kr</h4>
                <button className="order-btn" onClick={handleCheckout}>Checkout</button>
                <button className="order-btn" onClick={handleContinue}>Continue Shopping</button>
                <button className="order-btn" onClick={handleEmpty}>Empty Cart</button>
            </div>
        </div>
    );
}