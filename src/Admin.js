import React from "react"; 
import { useState } from "react";
import axios from "axios";
import './Admin.css';

function Admin(){
 const[data,setData]=useState([]);

 const retrive=()=>{
    axios.post('http://localhost:2005/data').then((response)=>{
        
    setData(response.data)
     console.log(data)
})

 }

    return(
  <div>

 <button onClick={retrive}>GET Data</button>
   {

  <div className="tab">
 <table>
  <th>
  Name
  </th>
  <th>
  Password
  </th>
   {
    
    data.map((d,id)=>{
        
        return    <tr key={d.id}>
                   <td>{d.name}</td>
                   <td>{d.password}</td>
            </tr>
        
    })



   }



 </table>

</div>


   }
   

  </div>

    )
}


export default Admin
