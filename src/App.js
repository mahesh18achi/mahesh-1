import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Faculty from './Faculty';
import Admin from './Admin';


function App(){

return(

<div>
<Router>
  <Routes>
  
     
  <Route path="/" element={<Navbar/>}/>
  <Route path="/faculty" element={<Faculty/>}/>
  <Route path="/admin" element={<Admin/>}/>
  





  </Routes>



  </Router>



</div>






)


}

export default App