import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Details from './Component/Details';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Login from './Component/Login';
import SplashCursor from './Component/Splashcrusor';

function App() {
  return (
    <div className="App">
      <Header/>
      <SplashCursor/>
      <Details/>
      <About/>
      <Login/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
