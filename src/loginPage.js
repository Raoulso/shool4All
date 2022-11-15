import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { Button, Form, Card } from "react-bootstrap";
import './home.css';

function LoginPage() {
  const [credential, setCredential]= useState([]);
  const redirect = useNavigate();
  const handleChange =(field)=> (event)=> {
    credential[field]= event.target.value;
    setCredential(credential);

  }
  
  

  const doLogin = ()=> {
    const data= {role: "student"};
    
      // cic on appel certain credential depuis le back
      return  data
  }
  const login = () => {
    console.log(credential);
    // appel backend
    const dat= doLogin();
    console.log(dat);
    if (dat.role==="prof") {
      //entre dans ProfLogin
      redirect('/profHome');
    }
    else if (dat.role==="student") {
      //entre dans StudentHome
      redirect('/studentHome');
    } 
  };
  return (
    <div className="card">
       
      
        <Card >
        
          <Card.Body>
            <Form.Control type="email" placeholder="Enter Username" onChange={handleChange("username")} value = {credential.username} className="m-3"/>

            <Form.Control type="password" placeholder="Password" onChange={handleChange("password")} value = {credential.password} className="m-3"/>

            <Button variant="success " type="submit" onClick={login} className="m-3" >
              Login
            </Button>
          </Card.Body>
        </Card>
      
    </div>
  );
}
export default LoginPage;
