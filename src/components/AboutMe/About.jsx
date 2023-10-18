import videoBG from '../../assets/home-video.mp4'
import './About.css'

function About() {
    return (
      <div>
        <video autoPlay muted id="bg-video">
            <source src={videoBG} type="video/mp4"/>
        </video>
        <div class="content fadeIn">
            <div>
                <h1>Lauren Lavelle</h1>
                <>Nice to meet you</>
            </div>
        </div>
      </div>
    );
  }
  
  export default About;
