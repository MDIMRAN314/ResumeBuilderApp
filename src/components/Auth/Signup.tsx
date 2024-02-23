import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserContextApi } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { PayloadProps } from "../../types/PayloadType";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SwipeableTextMobileStepper from "../../carsoul/Carosul";
import logo from "../../assets/reslogo2.jpg";


const defaultTheme = createTheme();

export default function Signup() {
  let navigate = useNavigate();
  const contextValue = useContext(UserContextApi);
  const signup = contextValue?.signup;

  const [formData, setFormData] = useState<PayloadProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (signup) {
      signup(formData);
      navigate("/");
      window.location.reload();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh", width: "100%" }}>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container sx={{ padding: "0px !important" }}>
            <SwipeableTextMobileStepper />
          </Container>
        </Grid>

        <Grid 
        item xs={12} 
        sm={8} 
        md={6} 
        component={Paper}
        elevation={6} 
        square>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
               
            }}
          >
            <Box
                sx={{
                  height: "100%",
                  maxWidth: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                my: 10,
                mx: 7,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              
            </Avatar>
            <Typography component="h1" variant="h5" style={{ textTransform: "capitalize" }}>
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="email"
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
                    value={formData.password}
                    onChange={handleInputChange}
                    autoComplete="new-password"
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
              <Grid container justifyContent="center">
                <Grid item>
                  <NavLink to="/login">Already have an account? Sign In</NavLink>
                </Grid>
              </Grid>
            </Box>
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
