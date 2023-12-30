import React from "react";
import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./loginform.css";
import {
    Button,
    TextField,
    InputAdornment,
    Icon, IconButton,
} from "@mui/material";
import MailSharpIcon from '@mui/icons-material/MailSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import VisibilityIcon from '@mui/icons-material/Visibility';


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");
    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
    };
    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            console.log('password sent:', password);//log the password
            const response = await axios.post("http://localhost:3001/login/login/", {
                email,
                password,
            });
    
            console.log("Login response:", response);
    
            if (response && response.data) {
                console.log("Login successful:", response.data);
                // Handle successful login, e.g., redirect to dashboard
            } else {
                console.error("Login failed: Response or data property is undefined");
                // Handle login failure, display error message, etc.
            }
        } catch (error) {
            console.error("Login failed:", error);
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Error during login. Please try again.");
      }
    }
    };
    return (
        <div className="loginformdiv">
            <div className="loginform">
                <h4 id="loginform-header">Login to BillSavvy!</h4>
                <form>

                    <TextField
                        className="emailinput inputwidth"
                        color="success"
                        name=" Enter Email Address"
                        label="Enter Email Address"
                        size="medium"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            '@media (max-width: 768px)': {
                              width: '80vw', // Adjust the width for smaller screens
                            },
                            '@media (min-width: 769px) and (max-width: 1023px)': {
                                width: '30vw', // Adjust the width for medium screens
                            },
                            '@media (min-width: 1024px)': {
                                width: '37vw',  // Default width for larger screens
                            },
                          }}
                        variant="filled"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailSharpIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        className="loginChild1 inputwidth"
                        color="success"
                        name="Enter Password"
                        label="Enter Password"
                        size="medium"
                        required={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            '@media (max-width: 768px)': {
                              width: '80vw', // Adjust the width for smaller screens
                            },
                            '@media (min-width: 769px) and (max-width: 1023px)': {
                                width: '30vw', // Adjust the width for medium screens
                            },
                            '@media (min-width: 1024px)': {
                                width: '37vw',  // Default width for larger screens
                            },
                          }}
                        variant="filled"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockSharpIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <VisibilityIcon
                                        onClick={handleShowPasswordClick}
                                        aria-label="toggle password visibility"
                                    >
                                        <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                                    </VisibilityIcon>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <Button
                    onClick={(e)=> handleLogin(e)}
                        className="registerButton"
                        sx={{
                            '@media (max-width: 768px)': {
                              width: '80vw', // Adjust the width for smaller screens
                            },
                            '@media (min-width: 769px) and (max-width: 1023px)': {
                              width: '30vw', // Adjust the width for medium screens
                            },
                            '@media (min-width: 1024px)': {
                                width: '37vw',  // Default width for larger screens
                            },
                          }}
                        color="warning"
                        variant="contained"
                    >
                        login
                    </Button>
                </form>
                <Button
            
                    className="forgetPassword"
                    sx={{
                        '@media (max-width: 768px)': {
                          width: '80vw', // Adjust the width for smaller screens
                        },
                        '@media (min-width: 769px) and (max-width: 1023px)': {
                            width: '30vw', // Adjust the width for medium screens
                        },
                        '@media (min-width: 1024px)': {
                            width: '37vw',  // Default width for larger screens
                        },
                      }}
                    color="error"
                    variant="text"
                >
                    Forget password?
                </Button>

                <Link to='/Signup' id="link">Don't Have an Account? SignUp</Link>
            </div>
        </div>
    );
}

export default LoginForm;