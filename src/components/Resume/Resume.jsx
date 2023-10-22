import {useRef} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Resume(){
const pdfRef = useRef();
const downloadPDF = () =>{
        console.log(30)
       const input= pdfRef.current; 
       html2canvas(input).then((canvas)=>{
        const imgData =canvas.toDataURL('image/png');
        const pdf = new jsPDF('p','mm','a4', true );
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
        const imgX = (pdfWidth -imgWidth * ratio)/2;
        const imgY = 30;
        pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight*ratio);
        pdf.save('Lavelle-resume.pdf')
       })
}
    return(
    <>
    <div className="container" ref= {pdfRef}>
        <p>
        Full stack web developer with a background in the healthcare field and a passion for learning. Interested in using problem solving skills to create collaborative, accessible, and user-friendly applications. Looking to use and expand my skills to bring unique insights to the role. 
        </p>
        <h3>Techincal Skills</h3>
        <p>
        Technical Languages: HTML | CSS | JavaScript | SQL| Python
        Skills: Agile Development | Rest API’s | jQuery | Node.js | Git | Express.js | React | Debugging | MongoDB | Jest | Architectural Design Patterns (MVC, Client-Sever) | Webpack | Vite | Responsive Applications

        </p>
        <h3>Soft Skills</h3>
        <p>
        Analytical Thinking| Problem Solving | Interpersonal Communication | Time Management | Adaptable | Quick Learner   
        </p>
        <h3>Professional Experience</h3>
        <p>
        Pricing and Audit Analyst – Central Transport, Warren, MI 					        03/2023- present
        •	Analyze an average of 300 Bill of Ladings daily to determine if correct class was established and updating according to customer contract if incorrect.
        •	When freight is reweighed checking the difference between driver weight and customer assigned weight and dimensions of freight being shipped for accuracy. 

        Operational Support Specialist - ATI Physical Therapy, Roseville, MI				         09/2020—09/2022
        •	Managed clinic referral dashboard successfully converting referrals to patients scheduled in 48-hour timeframe 
        •	Collaborated with team to provide quality patient care instructing and monitoring exercise performance and set up/delivery of therapeutic modalities
        •	Effectively onboarded new patients by comprehensively reviewing paperwork and explaining insurance benefits in-depth 

        </p>
        <h3>Education</h3>
        <p>
        Full Stack Web Development Boot Camp Certificate: Michigan State University
A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS. 
	
Master of Science – Athletic Training – Western Michigan University, Michigan 				           GPA: 3.93
Bachelor of Science – Athletic Training – Saginaw Valley State University, Michigan 			           GPA: 3.78

        </p>
        <h3>Certifications</h3>
        <p>
        Excel Skills for Data Analytics and Visualization – by Macquarie University on Coursera			               1/2023
Google Data Analytics Certificate – by Google on Coursera						             10/2022
Python for Everybody Specialization – by University of Michigan on Coursera				             10/2022
 
        </p>
  </div>
  <button className='btn btn-primary'onClick={downloadPDF}>Download PDF</button>
  </>
  )
}

export default Resume;
