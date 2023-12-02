import { useState } from 'react';
import './Home.css'

const Home = () => {
    const image = require('../../Images/tabla.png')
    const [openA, setOpenA] = useState(false)
    const [openB, setOpenB] = useState(false)
    const [openC, setOpenC] = useState(false)


    const toggleA = () => {
        setOpenA(!openA)
    }
    const toggleB = () => {
        setOpenB(!openB)
    }
    const toggleC = () => {
        setOpenC(!openC)
    }

    return(
        <>
            <section className="section">
                <p> Welcome to TablaNote. You can choose to create a new composition, view your existing compositions, or learn more about TablaNote.</p>
                <p></p>
                <button onClick = {toggleA}><h1> Background on Tabla</h1></button>
                {openA && (
                    <div className='toggle'>
                        <h4>There are many theories on how tabla was formed. One of the main theories was that it was made to accompany the 
                            Khayal Gayaki style of singing, which the pakhawaj wasn't as suited to doing. Since then, the tabla has been split into 
                            many Garana's, each with their own style of playing and school of thought. 
                        </h4>
                    </div>
                )}
                <p></p>
                <button onClick = {toggleB}><h1>Compositions</h1></button>
                {openB && (
                    <div className='toggle2'>
                        <h4>
                            There are many different compositions that are present in tabla, such as peshkar, paran, gat, kayeda, rela, tukdas and more. 
                            Each of these composition's are played in a specfifc taal, each with their own unique theka and a set amount of beats, or maatras. 
                            During solo performance, the tabla player has plays a wide variety of compositions at different speeds, or laya. During Accompaniment, 
                            the tabla player usually provides accompaniment to dance, vocal, or instrumental performance in a certain taal. 
                        </h4>
                    </div>
                )}
                <p></p>
                <button onClick = {toggleC}><h1>How to Use TablaNote</h1></button>
                {openC && (
                    <div className='toggle2'>
                        <h4>
                            Once you sign in, you will be shown your existing compositions. You can view them by pressing the link or create a new one based on the taal
                            you want to play. Currently, only Teentaal and Jhaptaal are supported. We are also working on making sure the pdf's save to any change. After you make
                            changes to your kayeda, download it with the changes, naming it what you named the composition, and move it to the SavedPDFs folder. After that, your link
                            will open up the pdf with the changes. You might need to re-create the composition for changes to show  
                        </h4>
                    </div>
                )}
            </section>
            <img src = {image} alt='Why is this blank'/>
        </>
    );
}

export default Home;