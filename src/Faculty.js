import React from 'react';
import {useState } from 'react';
import axios from 'axios'

function Faculty(){

const [data,setData]=useState({

    name:"",
    password:""
});

const handleChange =(e)=>{
    const{name,value}=e.target;
    setData({
  ...data,
   [name]:value,

    });
};

const[res,setRes] =useState([]);
const[resp,setResp] =useState([]);


const handleSubmit=(e)=>{
    e.preventDefault(); 
    axios
    .post('http://localhost:2005/login',data) // Replace '/api/submit' with your actual API endpoint
    .then((response) => {
      
      setRes(response.data[0]);
      console.log(res[0])
 console.log(response)
    
      
      // You can perform additional actions upon success, such as redirecting the user.
    })
    .catch((error) => {
      console.error('Error sending form data:', error);
    });

}

const adduser =(e)=>{
    e.preventDefault(); 
    axios
    .post('http://localhost:2005/adduser',data) // Replace '/api/submit' with your actual API endpoint
    .then((response) => {
      
      setResp(response.data);
      console.log(resp)  
 console.log(response)
    
      
      // You can perform additional actions upon success, such as redirecting the user.
    })
    .catch((error) => {
      console.error('Error sending form data:', error);
    });
}

return(

<div className='faculty'>

<h1>Faculty Page</h1>

<div className='formbox'>
<form onSubmit={handleSubmit}>
<label>UserName:<input type="text" placeholder='enter username' name="name" value={ data.name} onChange={handleChange}/></label>

<label>PassWord:<input type="password" placeholder='enter password'    name="password" value={ data.password}  onChange={handleChange}    /></label><br/>

<input type="submit"/>


</form> 

</div>

<button  onClick={adduser}> Add user</button>
{  res?<h4>you are logged in as  <b>{res.name}</b></h4>:<h4>USER NOT FOUND</h4> }

{  resp?<h4>Sucessfully Added  <b>{resp.name}</b></h4>:<h4>Failed Adding User</h4> }
   
</div>

)

}

export default Faculty;