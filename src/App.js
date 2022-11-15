import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigateBar from "./navigateBar";
import LoginPage from "./loginPage";
import StudentHome from "./student/studentHome";
import ProfHome from "./professors/profHome";
import NoPage from "./NoPage";
import "./App.css";

function App() {
  return (
    <div className="containerApp ">
      <BrowserRouter>
        
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="studentHome" element={<StudentHome />} />
            <Route path="profHome" element={<ProfHome />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
