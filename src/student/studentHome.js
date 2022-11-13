import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

const getStudentDataById = (id)=>{ 
  return [{ topic: "Math", grade:5},{ topic: "Info", grade:7},{ topic: "chimica", grade:9} ]
}
const filtra=(a)=> { 
  if (a.grade>5) {
    return true;
  }return false
 }
function StudentHome() {
  const [dataStudent, setDataStudent] = useState([...getStudentDataById(1)])
  return (
    <div className="contain-fluid bg-secondary ">
      <div>LogU</div>
      <div> matiere</div>
      <div> liste + note { dataStudent.filter(filtra).map((g)=>(
        <div key={JSON.stringify(g)}> 
        <h3> { g.topic }</h3> 
        <h4>{ g.grade } </h4>
          
        </div>

      )) } </div>
      
     
    </div>
  );
}
export default StudentHome;
