

const Home = () => {
    const image = require('/Users/s1oly/Desktop/tablanote/src/Images/tabla.png')

    return(
        <>
            <section className="section">
                <p> Welcome to TablaNote. You can choose to create a new composition, view your existing compositions, or learn more about TablaNote.</p>
                <img src = {image} alt='Why is this blank'/>
            </section>
        </>
    );
}

export default Home;