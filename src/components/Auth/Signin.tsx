import * as React from "react";
import Button from "@mui/material/Button";
import Lottie from "lottie-react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import birdjson from "../../lottiefiles/bird.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserContextApi } from "../../context/AuthContext";
import { UsersContextApi } from "../../context/UsersContext";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import logo from "../../assets/reslogo2.jpg";
import lockjson from "../../lottiefiles/lock.json";
import resumeicon3 from "../../lottiefiles/resumeicon3.json";
const defaultTheme = createTheme();
export default function Signin() {
  const navigate = useNavigate();
  const contextValue = useContext(UserContextApi);
  const signIn = contextValue?.signIn;
  const data = useContext(UsersContextApi);
  const users = data?.userData;
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  type AuthType = {
    email: string;
    password: string;
  };
  const [authData, setAuthData] = useState<AuthType>({
    email: "",
    password: "",
  });
  const { email, password } = authData;
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAuthData({ ...authData, email: value });
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAuthData({ ...authData, password: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (signIn && users) {
        const result = signIn(authData, users);
        if (result) {
          window.localStorage.setItem("login", result?.id);
          navigate("/");
        } else {
          navigate("/signin");
        }
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          component="main"
          sx={{ height: "100vh", width: "100%" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container sx={{ padding: "0px !important" }}>
              <Lottie
                animationData={resumeicon3}
                style={{ height: "500px", width: "100%", color: "#1565C0" }}
              />
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                mt: 3,
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
                    width: "80%",
                    height: "80%",
                    objectFit: "cover",
                  }}
                />
                <Lottie
                  animationData={birdjson}
                  style={{ height: "80px", width: "80px" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                my: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Lottie
                animationData={lockjson}
                style={{ height: "80px", width: "80px", color: "#1565C0" }}
              />
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 2, p: 5 }}
              >
                <FormControl
                  variant="outlined"
                  margin="normal"
                  style={{ width: "100%" }}
                >
                  <InputLabel htmlFor="outlined-adornment-email">
                    Email Address
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email"
                    type="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    label="Email Address"
                    autoFocus
                  />
                </FormControl>
                <FormControl
                  variant="outlined"
                  style={{ width: "100%" }}
                  margin="normal"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    required
                    onChange={handlePasswordChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Box
                  component="div"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    type="submit"
                    style={{ width: "100%" }}
                    variant="contained"
                    sx={{ mt: 3, mb: 2, p: 1.4 }}
                  >
                    Sign In
                  </Button>
                </Box>
                <Grid
                  item
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <NavLink to="/signup">Don't have an account? Sign Up</NavLink>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
