import './signup.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
import Navbar from '../Navbar/Navbar';

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

export default function SignUp() {

  const [values, setValues] = useState({
    FullName: String,
    Email: String,
    Phone: Number,
    Password: String
  });

  const [isSignIn, setIsSignIn] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setValues(prevValues => {
      if (name === "fullName") {
        return {
          FullName: value,
          Email: prevValues.Email,
          Phone: prevValues.Phone,
          Password: prevValues.Password
        }
      }
      if (name === "email") {
        return {
          FullName: prevValues.FullName,
          Email: value,
          Phone: prevValues.Phone,
          Password: prevValues.Password
        }
      }
      if (name === "phone") {
        return {
          FullName: prevValues.FullName,
          Email: prevValues.Email,
          Phone: value,
          Password: prevValues.Password
        }
      }
      if (name === "password") {
        return {
          FullName: prevValues.FullName,
          Email: prevValues.Email,
          Phone: prevValues.Phone,
          Password: value
        }
      }
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { FullName, Email, Phone, Password } = values;
    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        FullName, Email, Phone, Password
      })
    })
      .then(res => {
        if (res.status == 404) {
          alert(`${Email} is already in use`);
        }
        else if (res.status == 200) {
          window.location.replace('/login');
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
            SignUp
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Navbar name={values.FullName} />
            <Grid container spacing={2}>
              <Grid item xs={12} id='fullNameGrid'>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  value={values.FullName}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={values.Email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} id='phoneNumGrid'>
                <TextField
                  required
                  fullWidth
                  type="number"
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  value={values.Phone}
                  onChange={handleChange}
                  autoComplete="phone"
                />
              </Grid>
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
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <ul container justifyContent="flex-end">
              <Grid item>
                  {/* <Link to="/login">Already have an account? Sign in</Link> */}
                  <Link to={"/login"}>Already have an account? Login</Link>
              </Grid>
            </ul>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}