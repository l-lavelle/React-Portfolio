// navigate tranisiton slower
// add code in box for loading 
import videoBG from '../../assets/home-video.mp4'
import './LoadPage.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import ReactTyped from 'react-typed';

function LoadPage() {
  const navigate = useNavigate()
  // useEffect(()=>{
  //     setTimeout(()=>{
  //           navigate('/About')
  //       }, 5000)
  //   }, [])

    return (
      <div>
        <video autoPlay muted id="bg-video">
            <source src={videoBG} type="video/mp4"/>
        </video>
        <div class="content fadeIn">
            <div className='load-container'>
                <ReactTyped className="space-string" strings={[`Lauren Lavelle`,'asdfj']} typeSpeed={350} />
            </div>
        </div>
      </div>
    );
  }
  
  export default LoadPage;
