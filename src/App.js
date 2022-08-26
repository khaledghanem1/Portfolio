//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import AboutMe from './components/AboutMe'
import Box from './components/Box'
import Skills from './components/Skills'
import Work from './components/Work'

const thingsILove = [
  { src: "https://www.istockphoto.com/photos/technology", text: "Learning new technologies" },
  { src: "https://en.wikipedia.org/wiki/React_%28JavaScript_library%29", text: "Working with React" },
  { src: "https://www.tibco.com/blog/2017/12/20/tis-the-season-to-be-traveling/", text: "Travelling" },
  { src: "https://www.nps.gov/asis/learn/nature/horses.htm", text: "Horses" },

]
function App() {
  return (
    <>
    {/* <div className="App">
      <Header />
    </div> */}
    
      <Nav />
    <div className="AboutMe">
      <AboutMe />
    </div>
    <div className="Box">
      <Box heading="Things I love" array={thingsILove}/>
      <Skills />
    </div>
{/*     <div className="Work">
      <Work />
    </div> */}
    </>
    
  );
}

export default App;
