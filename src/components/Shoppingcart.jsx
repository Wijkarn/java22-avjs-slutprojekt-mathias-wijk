import "../css/Shoppingcart.css";

export default function Shoppingcart({ cart, setCart, setShowCart, newCartItem, setNewCartItem }) {

    let totalAmount = 0;

    cart.map(product => {
        totalAmount += (product.inCart * product.price);
    });

    function handleCheckout() {
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

    function handleContinue() {
        setShowCart(false);
    }

    function handleEmpty() {
        setCart([]);
    }

    async function patchTooFirebase() {
        // console.log(cart)

        let patchCart = [...cart];

        const obj = {};

        // patchCart.map(key => {
        //     // obj[key.theme] = {};
        // })

        patchCart.forEach(key => {
            // console.log("key", key);
            // Object.hasOwn(obj, key.theme)

            // obj[key.theme][key.itemId] = {stock: key.stock - key.inCart, title: key.title, pieces: key.pieces, price: key.price, imgSrc: key.imgSrc };

            obj[key.theme] = {
                ...obj[key.theme],
                [key.itemId]: {
                    stock: key.stock - key.inCart,
                    title: key.title,
                    pieces: key.pieces,
                    price: key.price,
                    imgSrc: key.imgSrc
                }
            }

        })

        console.log(obj);

        // LOOPA IGENOM ALLA THEMES OCH PATCHA VARJE GÅNG
        for (const theme in obj) {
            const url = `https://java22legoshop-default-rtdb.europe-west1.firebasedatabase.app/new/${theme}.json`;

            const options = {
                method: "PUT",
                body: JSON.stringify(obj[theme]),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }

            // const test = [...obj[theme]]

            // console.log(obj[theme])

            // for(const product in obj[theme]){
            //     console.log(obj[theme][product])
            // }

            console.log(obj[theme]);

            fetch(url, options);
        }
        // const url = `https://java22legoshop-default-rtdb.europe-west1.firebasedatabase.app/new/Technic/42083.json`;

        // const options = {
        //     method: "PUT",
        //     body: JSON.stringify(

        //     ),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // }

        // fetch(url, options);

        // location.reload();
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