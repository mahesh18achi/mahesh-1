import React from 'react';
import './Styles.css';
import {Link} from 'react-router-dom'

function Navbar(){
  return( 

   <div>

   <nav className='nav-bar'>
    <ul >
    
   <li>   <Link to="/">Student Login </Link> </li>
   <li>   <Link to="/faculty">Faculty Login </Link> </li>
   
   <li>    <Link to="/faculty">Attendance </Link> </li>
   <li>   <Link to="/faculty">Marks </Link> </li>
   <li>   <Link to="/admin">Admin</Link> </li>

    </ul>
   </nav>




   </div>




  )
}

export default Navbar;