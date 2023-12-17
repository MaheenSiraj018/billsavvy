import React from "react";
import { useState } from "react";
import "./signupform.css";
import {
    Button,
    TextField,
    InputAdornment,
    Icon, IconButton,
} from "@mui/material";
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="signupformdiv">
            <div className="signupform">
                <h4 id="signup-header">Register to BillSavvy!</h4>
                <form>
                    <TextField
                        className="rectangleTextfield"
                        color="success"
                        name="Enter Name"
                        label="Enter Name"
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
                                    <PersonSharpIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        className="signupChild1"
                        color="success"
                        name=" Enter Contact Number"
                        label="Enter Contact Numer"
                        size="medium"
                        disabled={false}
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
                                    <CallSharpIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        className="signupChild2"
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
                        className="signupChild3"
                        color="success"
                        name=" Enter Residential Address"
                        label="Enter Residential Address"
                        size="medium"
                        sx={{
                            '@media (max-width: 768px)': {
                              width: '80vw', // Adjust the width for smaller screens
                            },
                            '@media (min-width: 769px) and (max-width: 1023px)': {
                              width: '30vw', // Adjust the width for medium screens
                            },
                            '@media (min-width: 1024px)': {
                                width: '37vw', // Default width for larger screens
                            },
                          }}
                        variant="filled"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FmdGoodSharpIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        className="signupChild4"
                        color="success"
                        label="Enter Date of Birth"
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
                        type="date"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CalendarTodayIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        className="signupChild5"
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
                        className="rectangleButton"
                        sx={{
                            '@media (max-width: 768px)': {
                              width: '80vw', // Adjust the width for smaller screens
                            },
                            '@media (min-width: 769px) and (max-width: 1034px)': {
                              width: '30vw', // Adjust the width for medium screens
                            },
                            '@media (min-width: 1024px)': {
                              width: '37vw', // Default width for larger screens
                            },
                          }}
                        color="warning"
                        variant="contained"
                    >
                        Register
                    </Button>
                </form>
    
            </div>
        </div>
    );
}

export default SignUpForm;