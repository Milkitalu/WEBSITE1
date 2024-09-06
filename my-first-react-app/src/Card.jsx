
import profilePic from './assets/my-pic.png'
function Card() {
    return(
        <div className="card">
            <img src={profilePic} alt='profile picture'></img>
            <h2>Talaku Getahun</h2>
            <p>I'm Telecommunication Engineer</p>
        </div>
    );
}

export default Card