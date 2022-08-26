import image from '../../src/image.jpeg';
import '..//App.css';
function AboutMe() {
    return (
        <>
        <img src={image}/>
        
      <div className="Aboutme" id='about'>
        <h1>Hi, I'm Khaled</h1>
       <p>Quality Assurance Analyst with excellent collaborative abilities & communication skills who is eager to grasp new concepts quickly and grow professionally. Seeking a challenging position that coincides with my passion for problem solving to drive improvements in client & user experiences.</p>
      </div>
      </>
    );
  }
  
  export default AboutMe;