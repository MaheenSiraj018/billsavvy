import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/Pages/Login/Login";
import Signup from "../src/Pages/SignUp/Signup";
import Dashboard from "../src/Pages/Dashboard/Dashboard"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact Component={Login} />
      <Route path='/signup' Component={Signup} />
      <Route path='/dashboard' Component={Dashboard} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
