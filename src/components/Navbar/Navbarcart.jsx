export default function Navbarcart({ cart , setShowCart}) {

    let cartItems = 0;

    // Counts all  
    cart.map(product =>{
        cartItems += product.inCart;
    });

    function handeClick(event){
        event.preventDefault();
        setShowCart(true);
    }

    return (
        <a href="#" onClick={handeClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20">
                <g fill="currentColor" fillRule="evenodd">
                    <path d="M4 3.512v5.804c0 .377.349.684.779.684.43 0 .779-.307.779-.684V3.512C5.558 2.33 6.653 1.368 8 1.368c1.347 0 2.442.962 2.442 2.144v5.804c0 .377.35.684.78.684.43 0 .778-.307.778-.684V3.512C12 1.575 10.206 0 8 0S4 1.575 4 3.512z"></path>
                    <path d="M2.46 6.33c-.269 0-.489.194-.5.441L1.435 18.19a.436.436 0 00.131.332.52.52 0 00.348.149h12.151c.276 0 .501-.207.501-.462l-.525-11.436c-.011-.248-.23-.442-.5-.442H2.46zM14.448 20l-12.974-.001a1.591 1.591 0 01-1.064-.462 1.357 1.357 0 01-.408-1.03L.56 6.372C.595 5.602 1.277 5 2.11 5h11.78c.835 0 1.516.602 1.551 1.372l.56 12.197c0 .789-.697 1.431-1.553 1.431z"></path>
                </g>
            </svg>
            <span>{cartItems}</span>
        </a>
    );
}