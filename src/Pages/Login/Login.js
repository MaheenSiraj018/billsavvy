import react from "react";
import SidePanel from "../../Components/SidePanel/SidePanel.js";
import LoginForm from "../../Components/LoginForm/Loginform.js";
import "./login.module.css";
import useMediaQuery from '@mui/material/useMediaQuery';

import Dashboard from "../Dashboard/Dashboard.js"
import {Link} from "react-router-dom";


const Login= ()=>{
    const isScreenWideEnough = useMediaQuery('(min-width:768px)');
    return (
        <div className="main-login-div">
        <div className="login-div">
        {isScreenWideEnough && (
        <SidePanel top="-15" />
      )}
            <LoginForm/>
        </div>
        
        <Link to='/Dashboard' >Go to Dashboard</Link>
        </div>
    );
}

export default Login;