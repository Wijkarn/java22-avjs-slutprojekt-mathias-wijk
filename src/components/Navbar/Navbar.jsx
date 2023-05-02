import "../../css/Navbar.css";
import Navbuttons from "./Navbuttons";
import Navbarcart from "./Navbarcart";

export default function Navbar({cart}) {

    return (
        <nav>

            <Navbuttons />

            <Navbarcart cart={cart}/>

        </nav>
    );
}