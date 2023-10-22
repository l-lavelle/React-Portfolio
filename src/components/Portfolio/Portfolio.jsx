import { Carousel } from "./Carousel.jsx";
import slides from "./carouselData.js"


// import {useState} from 'react';

// function Portfolio(){
//     const [errorMessage, setErrorMessage] = useState('');

//     return(
//     <div className="container">
//         <h1 class="text-center">Contact Me</h1>
//         <form>
//         <h4 class="text-left">Name</h4>
//         <input class="form-control"
//             name="name"
//             type="text"
//         />
//         <h4>Email</h4>
//         <input  
//             class="form-control"
//             name="email"
//             type="email"
//         />
//         <h4>Message</h4>
//         <textarea class="form-control"
//             name="massage"
//             type="text"
//             rows="10"
//         />
//         <div class="text-center">
//             <button type="submit" class="btn btn-primary">Submit</button>
//         </div>
//         </form>
//         {errorMessage && (
//         <div>
//             <p className="error-text">{errorMessage}</p>
//         </div>
//         )}
//   </div>
//   )
// }



function Portfolio(){
    return(<div><Carousel data={slides} /></div>);
};


export default Portfolio;

// import image from '../../assets/profilePic.jpg'
// import ImageGallery from "react-image-gallery"
// import "react-image-gallery/styles/css/image-gallery.css"
// import { useEffect, useState, useRef } from 'react'

// import "./Portfolio.css"

// const images = [
//     {
//       original: "https://picsum.photos/id/1018/1000/600/",
//       thumbnail: "https://picsum.photos/id/1018/250/150/",
//       id:"1"
//     },
//     {
//       original: "https://picsum.photos/id/1015/1000/600/",
//       thumbnail: "https://picsum.photos/id/1015/250/150/",
//     },
//     {
//       original: "https://picsum.photos/id/1019/1000/600/",
//       thumbnail: "https://picsum.photos/id/1019/250/150/",
//     },
//   ];



// const info=[
//     {name:'project1'},
//     {name:'project2'},
//     {name:'project3'}
// ]
// function Portfolio(){
    
//     return(
//         <>
//             <div className='text-center'>
//                 <h1>Portfolio Projects</h1>
//             </div>
//             <ImageGallery items={images}
//                 showPlayButton={false}
//                 showIndex={true}
//                 useBrowserFullscreen={false}>
//             </ImageGallery>
//             <>
//                 <p></p>
//             </>
//         </>
        
    
//   );
// };


// import { Carousel } from 'react-responsive-carousel'
// get min file
{/* <>
        <Carousel className="Carousel">
        <div>
            <img src={image} className='s' />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={image}className='s' />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={image} className='s'/>
            <p className="legend">Legend 3</p>
        </div>
        </Carousel>
    </> */}

    