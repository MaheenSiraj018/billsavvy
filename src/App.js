import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/Pages/Login/Login";
import Signup from "../src/Pages/SignUp/Signup";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact Component={Login} />
      <Route path='/signup' Component={Signup} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
