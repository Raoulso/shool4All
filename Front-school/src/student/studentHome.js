import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "./student.css";

const getStudentDataById = (id) => {
  return [
    { topic: "Math", grade: 5 },
    { topic: "Info", grade: 7 },
    { topic: "chimica", grade: 9 },
  ];
};
const getTopic = async()=> {
  const urlTopic = "http://localhost:8082/topic";
  const headers = {
    "Access-Control-Allow-Origin": "*",
   
  };
  const resTopic = await axios.get(urlTopic, {  headers});
  console.log(resTopic);
  return resTopic.labels;
}
const filtra = (a) => {
  if (a.grade > 5) {
    return true;
  }
  return false;
};
function StudentHome() {
  const [topicLabel, setTopicLabel]= useState([]);
  const [dataStudent, setDataStudent] = useState([...getStudentDataById(1)]);

  useEffect( ()=> { 
    const urlTopic = "http://localhost:8082/topic";
    
    axios.get(urlTopic).then(res=>{
      
      setTopicLabel(res.data)
      console.log(res.data)
    })
  
    
  },[])
  return (
    <div className="studi">
      <div className="btnLogOut">
      <button type="button" className="btn btn-danger">Log out</button>
      </div>
      <h2>Libretto</h2>
      
      <table className="table table-hover">
      <thead>
      <tr>
        <th>Materia</th>
        <th>Nota</th>
        
      </tr>
    </thead>
    <tbody>
        
        {dataStudent.filter(filtra).map((g) => (
          <tr key={JSON.stringify(g)}>
            <td> {g.topic}</td>
            <td>{g.grade} </td>
          </tr>
        ))}
        </tbody>        
      </table>
      <div>
      {
    topicLabel.map((topicLabel)=>(
    <h3 >{topicLabel.label} </h3>))
  }
      </div>
    </div>
  );
}
export default StudentHome;
