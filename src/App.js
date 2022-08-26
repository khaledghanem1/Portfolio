//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import AboutMe from './components/AboutMe'
import Box from './components/Box'
import Skills from './components/Skills'
import Work from './components/Work'
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
      <Box />
      <Skills />
    </div>
    <div className="Work">
      <Work />
    </div>
    </>
    
  );
}

export default App;
