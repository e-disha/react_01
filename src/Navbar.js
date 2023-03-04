import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>CyberLibri</h1>
            <div className="links">
                <Link to='/'>Faqja Kryesore</Link>
                <Link to='/create'>Shto Liber</Link>
            </div>
        </div>
    );
}
 
export default Navbar;