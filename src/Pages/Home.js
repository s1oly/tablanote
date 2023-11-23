import { Link, Outlet } from "react-router-dom";

const Home = () => {
    const image = require('/Users/s1oly/Desktop/tablanote/src/Images/tabla.png')

    return(
        <div>
            <h2>Home</h2>
            <p> Welcome to TablaNote. You can choose to create a new composition, view your existing compositions, or learn more about TablaNote.</p>
            <Outlet>
                <Link to = 'compositions' className = 'btn'><h2>Compositions</h2></Link>
                <Link to = 'createcomposition' className = 'btn'><h2>Create Compositions</h2></Link>
                <Link to = 'about' className = 'btn'><h2>About</h2></Link>
            </Outlet>
            <img src = {image} alt='Why is this blank'/>
        </div>
    );
}

export default Home;