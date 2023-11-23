import { Outlet} from "react-router-dom";
import NavBar from '../Display/NavBar';

const SharedLayout = () =>{
    return(
        <>
            <NavBar/>
            <section className= 'section'>
                <Outlet/>
            </section>
        </>
    )
}

export default SharedLayout;
