
import './App.css';
import Subscribe from './components/Subscribe';
import Popular from './components/Popular';
import Agents from './components/Agents';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Plots from './components/Plots';
import Office from './components/Office';
import Residential from './components/Residential';
import Commercial from './components/Commercial';
import Projects from './components/Projects';


function App() {
  return (
   <div>
    <Topbar/>
    <Home/>
    <Popular/>
    <Projects/>
    <Plots/>
   <Residential/>
    <Office/>
    <Commercial/>
    <Agents/>
      <Subscribe/>
      <Footer/>
   </div>
  );
}

export default App;
