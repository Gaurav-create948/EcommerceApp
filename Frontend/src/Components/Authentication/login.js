import './signup.css';
import { useState, useEffect, useContext } from 'react';
import * as React from 'react';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserContext from '../../Context/Context';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <a color="inherit" href="https://mui.com/">
                Your Website
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {

    const [values, setValues] = useState({
        Email: String,
        Password: String
    });
    const UserCart = useContext(UserContext);
    function handleChange(event) {
        const { name, value } = event.target;
        setValues(prevValues => {
            if (name === "email") {
                return {
                    Email: value,
                    Password: prevValues.Password
                }
            }
            else if (name === "password") {
                return {
                    Email: prevValues.Email,
                    Password: value
                }
            }
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const { Email, Password } = values;
        await fetch("http://localhost:5000/login", {
            credentials : "include",
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                Email, Password
            })
        })
            .then(res => {
                if(res.status == 200){
                    window.location.replace('/');
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        LogIn
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={values.Email}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </Grid>
                            <br/>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={values.Password}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log In
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                {/* <Button type="button"> */}
                                <Link to="/signup">
                                    Don't have an account? Sign Up
                                </Link>
                                {/* </Button> */}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}