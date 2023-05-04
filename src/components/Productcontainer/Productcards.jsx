import Productpage from "./Productmodal";

export default function ProductCard({ title, price, theme, pieces, imgSrc, itemId, stock, setNewCartItem }) {

    function handleClick() {

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

        setNewCartItem(newCartItem);
    }

    function handleModal(){
        // const modal = document.getElementById(itemId);

        // modal.showModal();
    }

    return (
        <div className="item-card" key={itemId}>
            <img src={imgSrc} />
            <span onClick={handleModal} className="hover">{itemId} {title}</span>
            {/* <Productpage title={title} theme={theme} pieces={pieces} price={price} imgSrc={imgSrc} itemId={itemId} stock={stock}/> */}
            <span className="item-price">{price} kr</span>
            <span className="pieces">{pieces} pcs</span>
            <span>Theme: {theme}</span>
            <span>Stock: {stock}</span>
            <button onClick={handleClick} className="add-to-cart-btn">Add to cart</button>
        </div>
    );
}