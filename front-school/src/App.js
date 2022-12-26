import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import NavigateBar from "./navigateBar";
import LoginPage from "./loginPage";
import StudentHome from "./student/studentHome";
import ProfHome from "./professors/profHome";
//import Counter from "./Redux/counter";
import NoPage from "./NoPage";
import "./App.css";


const logout = ()=> {
  //const redirect = useNavigate();
  alert( 'ouuutt');
  //redirect("/");
}

function App() {
  return (
    <div className="containerApp ">
      <BrowserRouter>
      {/* <Counter /> */}
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="studentHome" element={<StudentHome myLogout = {logout} />} />
            <Route path="profHome" element={<ProfHome />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
