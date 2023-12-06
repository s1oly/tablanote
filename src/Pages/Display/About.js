
const About = () =>{
    const image = require('../../Images/About.png')


    return(
        <div>
            <p/>
                <h2> About</h2>
            <p>
                This project came about as an idea I had while looking for a Kayeda while practicing tabla. I looked through my paper notes, however due to the lack of organization
                I wasn't able to find it. I came up with the idea of a digital storage for different tabla compositions, whether it be a Kayeda or Rela. Currently, TablaNote only supports 
                Teentaal,Jhaptaal,Ektaal, and Rupak Compositions of one Awartan, however we look to expand on that on the future. If you have any questions, please email tablanote@gmail.com.
            </p>
            <img src = {image} alt='Why is this blank'/>
        </div>
        
    );

}

export default About;