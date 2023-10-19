import image from '../../assets/profilePic.jpg'
import './Portfolio.css'
function Portfolio(){
    return(
    <img src={image} className="rounded float-left photo" alt="..."></img>
    )
}

export default Portfolio;