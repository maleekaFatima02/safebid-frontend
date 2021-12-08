import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import logo from '../../logo.png';
import { headers } from '../../utils';

const colorTheme = createTheme({
  palette: {
    primary: { main: '#1e3d59', contrastText: '#fff' },
  },
});

const SignUp = ({ history }) => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    firstName: '',
    lastName: '',
    success: false,
  });

  const { email, password, confirmPassword, success, error, firstName, lastName } = values;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, error: false, [name]: value });
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/homepage');
    }
  }, []);

  const signup = (user) =>
    fetch(`${process.env.REACT_APP_SAFE_BID_URI}/auth/signUp`, {
      method: 'POST',
      headers,
      body: JSON.stringify(user),
    }).then((response) => response.json());

  const clickSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setValues({ ...values, error: 'Password and confirm Password do not match', success: false });
    } else {
      setValues({ ...values, error: false });
      signup({ email, password, firstName, lastName }).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          localStorage.setItem('token', data.token);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      });
    }
  };

  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
      New Account Created. Please Login. Loading...
    </div>
  );

  return (
    <div>
      {JSON.stringify({ ...values })}; {showError()};{showSuccess()}
      <Container
        component="main"
        maxWidth="xs"
        style={{
          paddingTop: colorTheme.spacing(5),
          paddingBottom: colorTheme.spacing(4),
        }}
      >
        <Grid container style={{ backgroundColor: '#F5F5F5', borderRadius: '5%' }}>
          <CssBaseline />

          <MuiThemeProvider theme={colorTheme}>
            <Box
              sx={{
                marginBottom: 5,
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '5%',
                justifyContent: 'center',
              }}
            >
              <img src={logo} alt="my-logo" style={{ width: '55%', height: '65%' }} />
              <Typography component="h6" variant="h5">
                Sign up
              </Typography>

              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField required fullWidth name="firstName" label="First Name" type="text" id="firstName" autoComplete="new-password" onChange={(e) => handleChange(e)} value={firstName} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth name="lastName" label="Last Name" type="text" id="lastName" autoComplete="new-password" onChange={(e) => handleChange(e)} value={lastName} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth id="email" label="Email Address" name="email" type="email" autoComplete="email" onChange={(e) => handleChange(e)} value={email} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" onChange={(e) => handleChange(e)} value={password} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                      onChange={(e) => handleChange(e)}
                      value={confirmPassword}
                    />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" style={{ backgroundColor: '#1e3d59' }} sx={{ mt: 3, mb: 2 }} onClick={clickSubmit}>
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login" variant="body2" style={{ textDecoration: 'none', color: '#1e3d59' }}>
                      Already have an account? Log in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </MuiThemeProvider>
        </Grid>
      </Container>
    </div>
  );
};

SignUp.propTypes = {
  history: PropTypes.any.isRequired,
};

export default SignUp;
