import React from "react";
import { useState } from "react";
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
    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
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
                    <Button
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