import { Link } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to = '/compositions' className = 'btn'><h2>Compositions</h2></Link>
            <Link to = '/createcomposition' className = 'btn'><h2>Create Compositions</h2></Link>
            <Link to = '/about' className = 'btn'><h2>About</h2></Link>
        </nav>
    );
};

export default NavBar