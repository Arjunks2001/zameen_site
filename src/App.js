
import './App.css';
 
 
 
 
 
 
 
 
 
 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Route, Router, Routes } from 'react-router-dom';
import Front_page from './components/Home_page/Front_page';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Popular_Details from './components/View_Details/Popular_Details';
 



function App() {

  return (
    <>
    <Topbar/>
 <Router>
    <Routes>
    
      <Route exact path="/" element={<Front_page/>} />
      <Route exact path="/Popular_Details" element={<Popular_Details/>} />
      

    </Routes>
   </Router> 
   <Footer/>
    </>
   
  
     
     
   
  );
}

export default App;
