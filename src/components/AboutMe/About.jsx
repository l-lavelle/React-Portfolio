import videoBG from '../../assets/home-video.mp4'
import './About.css'

function About() {
    return (
      <div>
        <video autoPlay muted id="bg-video">
            <source src={videoBG} type="video/mp4"/>
        </video>
      </div>
    );
  }
  
  export default About;
