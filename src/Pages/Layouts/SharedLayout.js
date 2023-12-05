import { Outlet} from "react-router-dom";
import NavBar from '../Display/NavBar';
import Popup from '../PopUp/Popup'
import '../PopUp/Popup.css'

const SharedLayout = () =>{
    return(
        <>
            <NavBar/>
            <p></p>
            <Popup/>
            <section className= 'section'>
                <Outlet/>
            </section>
        </>
    )
}

export default SharedLayout;
