import { Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './Component/Contact';
import Details from './Component/Details';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Project from './Component/Project';
import Skills from './Component/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
