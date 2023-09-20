

import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Sign() {
    const [name , setName] =useState('');
    const [password, setPassword] =useState('');
    const [conPassword , setConPassword] =useState('');
    const [email, setEmail] =useState('');
    const [Word , setWord] =useState(false);
    const HandeleForm = (e) => {
 e.preventDefault();
 setWord(true)
    }
    console.log("name"  ,name);
    console.log("password",password);
    console.log("email", email);
    return (
    < div className='SignPage'  style={{width:"30%"   ,marginLeft:"auto" , marginRight:"auto" ,  height:"100vh", display:"flex" , alignItems:"center" , justifyContent:"center"}} >
        <div className='Formaia' style={{width:"100%"    , padding:"20px" , border:"2px solid red" }  }>
      
      <label>User name:</label>
      <Form.Control  type="text" value={name} placeholder="Enter user name" onChange={(e)=>setName(e.target.value)} />
      {name === "" && Word && ( <p>User name is required</p>)}
      {/* <br /> */}

      <label>Password:</label>
      <Form.Control type="password" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
      {password.length < 8 &&  Word && (<p>Password must be more than 8 char</p>)}
     {/* <br /> */}

      <label>Confirm Password:</label>
     <Form.Control type="password" value={conPassword} placeholder=" confuirm password" onChange={(e)=>setConPassword(e.target.value)} />
        {password !== conPassword &&  Word && (<p>confirm from your password</p>)}
     {/* <br/> */}

     <label>Email:</label>
      <Form.Control  required type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
    <br/>
      <button  onClick={HandeleForm} className='btn btn-primary'>Submit</button>
     </div>
     </div>
  );
}

export default Sign;