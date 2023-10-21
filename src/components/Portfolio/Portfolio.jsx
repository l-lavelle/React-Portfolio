import image from '../../assets/profilePic.jpg'
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import { useEffect, useState } from 'react'

import "./Portfolio.css"

const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
// import './Portfolio.css'
function Portfolio(){
    return(
        <>
            <div className='text-center'>
                <h1>Portfolio Projects</h1>
            </div>
            <ImageGallery items={images}
                showPlayButton={false}
                showIndex={true}
                useBrowserFullscreen={false}>
            </ImageGallery>
        
        </>
        
    
  );
};


    

export default Portfolio;

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

     {/* <img src={image} className="rounded float-left photo" alt="..."></img>
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={image} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                <img src={image} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                <img src={image} class="d-block w-100" alt="..."></img>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </> */}