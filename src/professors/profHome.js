import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./prof.css";

function ProfHome() {
  const [materiaProf, setMateriaPro] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showStudent = () => {
    handleShow();
    const urlStudent = "http://localhost:8082/students";
    axios.get(urlStudent).then(stud => {
      setStudentList(stud.data);
      console.log(stud.data)
    });
  };
  useEffect(() => {
    const urlMatiere = "http://localhost:8082/topic";
    axios.get(urlMatiere).then((mat) => {
      setMateriaPro(mat.data);
    }, []);
  });
  return (
    <div className=" profHome">
      <div className="btnLogOut">
        <button type="button" className="btn btn-danger">
          Logout
        </button>
      </div>
      <h2> Professor page Welcome</h2>
      <div className="divMaterie">
        {" "}
        {materiaProf.map((materiel) => (
          <button
            type="button"
            className="btn btn-primary btnMaterie"
            onClick={showStudent}
            key={JSON.stringify(materiel)}
          >
           {materiel.label}{" "}
          </button>
        ))}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className=" text-center "></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {studentList.map((stud) => (
              <h4 key={JSON.stringify(stud)}> {stud.name}</h4>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            <Link to="profHome">Reurrn to my Home</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ProfHome;
