import { Outlet} from "react-router-dom";
import NavBar from '../Display/NavBar';
import Popup from '../PopUp/Popup'
import '../PopUp/Popup.css'

const SharedLayout = () =>{
    return(
        <>
            <Popup className = 'Popup'/>
            <NavBar/>
            <section className= 'section'>
                <Outlet/>
            </section>
        </>
    )
}

export default SharedLayout;
