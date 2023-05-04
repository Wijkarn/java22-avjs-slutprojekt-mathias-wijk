export default function Productmodal({ title, price, theme, pieces, imgSrc, itemId, stock }) {

    

    return (
        <dialog id={itemId}>
            <img src={imgSrc} className="dialog-page" />
            {itemId} {title}
        
        </dialog>
    );
}