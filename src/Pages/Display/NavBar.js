import { NavLink} from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
    return (
        <nav className="navBar">
            <NavLink to ='/home' style = {({isActive}) => {return {color: isActive ? 'red': 'grey'}}} ><h2>Home</h2></NavLink>
            <NavLink to = '/createcomposition' style = {({isActive}) => {return {color: isActive ? 'red': 'grey'}}}><h2>Create Compositions</h2></NavLink>
            <NavLink to = '/about' style = {({isActive}) => {return {color: isActive ? 'red': 'grey'}}}><h2>About</h2></NavLink>
        </nav>
    );
};

export default NavBar