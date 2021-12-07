import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, Redirect, BrowserRouter as Router } from "react-router-dom";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import logo from "../logo.png";
import auctionBG from "../auctionBG.jpg";



const colorTheme = createTheme({
  palette: {
    primary: { main: "#1e3d59", contrastText: "#fff" },
  },
});



export default function Login() {
  
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false
  });

  const {email, password, loading, redirectToReferrer, error} = values;

  const handleChange = name => event => {

    setValues({...values, error:false, [name] : event.target.value});

  };

  const authenticate = (data, next) => {
    if (typeof window !== 'undefined'){
      localStorage.setItem('jwt' , JSON.stringify(data));
      next();
    }
  }

  const login = (user) => {

    return fetch (`${process.env.REACT_APP_SAFE_BID_URI}/auth/signIn` , {
      method: "POST",
      headers :{
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user) 
    })

    .then(
      response => {
        return response.json();
      }
    )

    .catch (
      err => {
        console.log(err);
      }
    );

  }

  const clickSubmit = (event) => {

    event.preventDefault();
      setValues({...values, error: false, loading: true});
      login({email, password})
      .then(
        data => {
          if (data.error) {
            setValues({...values, error: data.error, loading: false});
          }
          else{
            authenticate(data , 
              () => {
                setValues({...values, redirectToReferrer: true});
              })
          }
        }
      )
  };

  const showError = () => {
    return (
    <div className = "alert alert-danger" style = {{ display: error ? "" : "none"}}>
    {error}
    </div>
    )
  }
  
  const showLoading = () => 
  loading && (
    <div className = "alert alert-info">
   <h2>Loading...</h2>
    </div>
  );
  
  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to ="Homepage" />
    }
  }


  return (
    <Container component="main" maxWidth="xs">

    {JSON.stringify({...values})};
    {showError()};
    {showLoading()};
      <div
        style={{
          //backgroundImage: `url(${"/auctionBG.png"})`,
          paddingTop: colorTheme.spacing(5),
          paddingBottom: colorTheme.spacing(4),
        }}
      
        
         
      ></div>
      <Grid
        container
        style={{ backgroundColor: "#F5F5F5", borderRadius: "5%" }}
      >
        <CssBaseline />

        <MuiThemeProvider theme={colorTheme}>
          <Box
            sx={{
              marginTop: 3,
              marginBottom:5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "5%",
              justifyContent: "center",
            }}
          >
            <img src={logo} style={{ width: "55%", height: "65%" }} />
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}

            <Typography component="h6" variant="h5">
           Login 
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange = {handleChange("email")}
                    value = {email}
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
                    autoComplete="new-password"
                    onChange = {handleChange("password")}
                    value = {password}
                  />
                </Grid>
              
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Keep me logged in."
                  />
                </Grid>
              </Grid>
              <Link
                to="/Homepage"
                style={{ textDecoration: "none", color: "#1e3d59" }}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#1e3d59" }}
                  sx={{ mt: 3, mb: 2 }}
                  onClick = {clickSubmit}
                >
                  Login
                </Button>
              </Link>
              <Grid container justifyContent="flex-end">
              
              </Grid>
            </Box>
          </Box>
       
        </MuiThemeProvider>
      </Grid>

      {redirectUser()}
    </Container>
  );
}
