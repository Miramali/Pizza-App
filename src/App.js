
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route  path="/" exact Component={Home}/>
      <Route  path="/menu" exact Component={Menu}/>
      <Route  path="/about" exact Component={About}/>
      <Route  path="/contact" exact Component={Contact}/>
      
     
    </Routes>
    <Footer />

    </Router>
    
     
    </>
  );
}

export default App;
