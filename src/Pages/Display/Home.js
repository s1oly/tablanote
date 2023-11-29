import { useState } from 'react';

const Home = () => {
    const image = require('/Users/s1oly/Desktop/tablanote/src/Images/tabla.png')
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return(
        <>
            <section className="section">
                <p> Welcome to TablaNote. You can choose to create a new composition, view your existing compositions, or learn more about TablaNote.</p>
                <p></p>
                <button onClick = {toggle}><h1> Background on Tabla</h1></button>
                {open && (
                    <div className='toggle'>
                        <h4>There are many theories on how tabla was formed. </h4>
                    </div>
                )}
            </section>
            <img src = {image} alt='Why is this blank'/>
        </>
    );
}

export default Home;