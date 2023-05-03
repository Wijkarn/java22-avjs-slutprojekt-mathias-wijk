import "../../css/Navbar.css";
import Navbuttons from "./Navbuttons";
import Navbarcart from "./Navbarcart";

export default function Navbar({cart, setShowCart}) {

    return (
        <nav>

            <Navbuttons setShowCart={setShowCart}/>

            <Navbarcart cart={cart} setShowCart={setShowCart}/>

        </nav>
    );
}