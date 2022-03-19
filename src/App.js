import React, {useState, useEffect} from 'react'
import './App.css'
import './loader.css'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Rooms from './pages/Rooms';
import Testimonials from './pages/Testimonials';
import GalleryPage from './pages/GalleryPage';
import SyncLoader from "react-spinners/SyncLoader";

function App() {

  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  }, 3000)
  }, [])

  return (
    <>

{
  
loading ? 

<div className='loader'>

  <SyncLoader 
  size={30} 
  color={"#123abc"} 
  loading={loading} 
  speedMultiplier={1.5} />

</div>

:

<Router>
        <Navbar/> 
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={AboutUs} />
            <Route path='/rooms' component={Rooms} />
            <Route path='/testimonial' component={Testimonials} />
            <Route path='/gallery' component={GalleryPage} />
        </Switch>
    </Router>

}


       
    </>
  );
}

export default App;
