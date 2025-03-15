import { Route, Router } from 'lucide-react';
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Details from './Component/Details';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Project from './Component/Project';
import Skills from './Component/Skills';
// import SplashCursor from './Component/Splashcrusor';

function App() {
  return (
    <div className="App">
      <Header/>
      <Details/>
      <Skills />
      <Project />
      <Router>
        <Route path="About" element={<About />}></Route>
        <Route path="Skills" element={<Skills />}></Route>
        <Route path="Project" element={<Project />}></Route>
      </Router>
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
