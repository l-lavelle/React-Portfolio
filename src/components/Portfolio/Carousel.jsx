import "./Carousel.css"
import{useState} from "react";

// Idea with more project able to look at tags:(frontend, back-end, design)

export const Carousel = ({data}) => {
    const [project, setProject]=useState(0)

    const nextProject= ()=>{
        setProject(project === data.length-1 ? 0: project+1)
    }    

    const prevProject=()=>{
        setProject(project === 0? data.length-1 : project-1)
    }
    return(
    <>
        <h1 className="text-center">Portfolio Projects</h1>
        <div className="portfolio">
            <div className="carousel">
                <i className="bi bi-arrow-left-circle-fill arrow arrow-left" onClick={prevProject}></i>
                {data.map((item,index)=>{
                return (
                    <>
                    <img src={item.pic.src} key={index} className={project===index ? "slide" : "slide-hidden"}/>
                    </>
                )
                })}
                <i className="bi bi-arrow-right-circle-fill arrow arrow-right" onClick={nextProject}></i>
            <span className="indicators">
                {data.map((_,index)=>{
                    return <button key={index} onClick={()=>setProject(index)} className={project === index ? "indicator" : "indicator-inactive"}></button>
                })}
            </span>
            </div>
            <div className="project-info">
            {data.map((item,index)=>{
                return (
                    <>
                    <h3 key={index} className = {project===index ? "slide" : "slide-hidden"}>{`${item.name}`}</h3>
                    </>
                )
                })}
            <h4>Summary</h4>
            {data.map((item,index)=>{
                return (
                    <>
                    <p key={index} className = {project===index ? "slide" : "slide-hidden"}>{`${item.summary}`}</p>
                    </>
                )
                })}
            <h4>Contributions</h4>
            {data.map((item,index)=>{
                return (
                    <>
                    <p key={index} className = {project===index ? "slide" : "slide-hidden"}>{`${item.contributions}`}</p>
                    </>
                )
                })}
            <h4>Techonologies & Tools</h4>
            {data.map((item,index)=>{
                return (
                    <>
                    <p key={index} className = {project===index ? "slide" : "slide-hidden"}>{`${item.Tools}`}</p>
                    </>
                )
                })}
            </div>
        </div>
    </>
    )
}
