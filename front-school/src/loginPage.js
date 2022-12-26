import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import "./home.css";

const ROLE = {
  prof: 'prof',
  stud : 'stud'
}
function LoginPage() {
  const [credential, setCredential] = useState([]);
  const redirect = useNavigate();
  const handleChange = (field) => (event) => {
    credential[field] = event.target.value;
    setCredential(credential);
  };

  const doLogin = async (username) => {
    //how to pass parameter username to the backend
    const data = { role: "student" };
    const headers = {
      "Access-Control-Allow-Origin": "*",
    };
    const urlLogin = "http://localhost:8082/login";
    const res = await axios.post(
      urlLogin,
      { headers },
      { username: credential.username }
    );

    

    // cic on appel certain credential depuis le back
    return res.data;
  };
  const login = async () => {

    // appel backend
    const dat = await doLogin();

    if (dat[0].role === ROLE.prof) {
      //entre dans ProfLogin
      redirect("/profHome");
    } else if (dat[1].role === ROLE.stud) {
      //entre dans StudentHome
      redirect("/studentHome");
    }
  };
  return (
    <div className="card ">
      <fieldset>
        <legend>Login</legend>
        <div className="mx-1 p-1">
          <Form.Control
            type="email"
            placeholder="Enter Username"
            onChange={handleChange("username")}
            value={credential.username}
          />
        </div>
        <div className="m-3">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange("password")}
            value={credential.password}
          />
        </div>

        <Button
          variant="success "
          type="submit"
          onClick={login}
          className="m-3"
        >
          Login
        </Button>
      </fieldset>
    </div>
  );
}
export default LoginPage;
