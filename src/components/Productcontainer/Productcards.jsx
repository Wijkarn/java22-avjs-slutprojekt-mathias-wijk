export default function ProductCard({ title, price, theme, pieces, imgSrc, itemId, stock, setCart, cart }) {

    function handleClick() {

        let newCart = [...cart];

        const newCartItem = {
            title: title,
            price: price,
            theme: theme,
            imgSrc: imgSrc,
            itemId: itemId,
            stock: stock,
            inCart: 1
        }

        let newItem = true;
        let firstItem = true;

        if(cart.length != 0){
            cart.map(product =>{
                if(product.itemId === newCartItem.itemId){
                    product.inCart++;
                    console.log("Old item");
                    newItem = false;
                }
            });
        }
        else{
            console.log("First item");
            firstItem = false;
            newCart.push(newCartItem);
        }

        if(newItem && firstItem){
            console.log("New item")
            newCart.push(newCartItem);
        }

        console.log(cart)

        // newCart.push(newCartItem);

        // console.log(newCart)
        setCart(newCart);
    }

    return (
        <div className="item-card" key={itemId}>
            <img src={imgSrc} />
            <a href=" ">{itemId} {title}</a>
            <span className="item-price">{price} kr</span>
            <span className="pieces">{pieces} pcs</span>
            <span>Theme: {theme}</span>
            <span>Stock: {stock}</span>
            <button onClick={handleClick} className="add-to-cart-btn">Add to cart</button>
        </div>
    );
}