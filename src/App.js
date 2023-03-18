import './App.css';
import './Navbar'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Upcoming from './Upcoming';
import Recruitment from './Past';
import Current from './Current';




function App() {
  return (
    <>
    <Navbar/>
      
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/About' element={<AboutUs/>}/> 
          <Route path='/Contact' element={<Contact/>}/> 
          <Route path='/upcoming' element={<Upcoming/>}/> 
          <Route path='/recruitment' element={<Recruitment/>}/> 
          <Route path='/current' element={<Current/>}/> 
        </Routes>
      </div>

    </>
  );
}

export default App;
