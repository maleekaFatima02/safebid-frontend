import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, Redirect } from 'react-router-dom';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import logo from '../../logo.png';
import { headers } from '../../utils';

const colorTheme = createTheme({
  palette: {
    primary: { main: '#1e3d59', contrastText: '#fff' },
  },
});

export default function SignUp() {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: false,
    redirectToReferrer: false,
  });

  const { email, password, confirmPassword, success, error, redirectToReferrer } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signup = (user) => {
    return fetch(`${process.env.REACT_APP_SAFE_BID_URI}/auth/signUp`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log('bba');
        return response.json();
      })

      .catch((err) => {
        console.log('bb');
        console.log(err);
      });
  };

  const clickSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log('s1');
      setValues({ ...values, error: 'Password and confirm Password do not match', success: false });
      console.log('s2');
    } else {
      setValues({ ...values, error: false });
      signup({ email, password }).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            email: '',
            password: '',
            confirmPassword: '',
            error: '',
            success: true,
            redirectToReferrer: true,
          });
        }
      });
    }
  };

  const showError = () => {
    return (
      <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
      </div>
    );
  };

  const showSuccess = () => {
    return (
      <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
        New Account Created. Please Login. Loading...
      </div>
    );
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to="/login" />;
    }
  };

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
              <img src={logo} style={{ width: '55%', height: '65%' }} />
              <Typography component="h6" variant="h5">
                Sign up
              </Typography>

              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField required fullWidth id="email" label="Email Address" name="email" type="email" autoComplete="email" onChange={handleChange('email')} value={email} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" onChange={handleChange('password')} value={password} />
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
                      onChange={handleChange('confirmPassword')}
                      value={confirmPassword}
                    />
                  </Grid>
                </Grid>
                <Link to="/login" style={{ textDecoration: 'none', color: '#1e3d59' }}>
                  <Button type="submit" fullWidth variant="contained" style={{ backgroundColor: '#1e3d59' }} sx={{ mt: 3, mb: 2 }} onClick={clickSubmit}>
                    Sign Up
                  </Button>
                </Link>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login" href="#" variant="body2" style={{ textDecoration: 'none', color: '#1e3d59' }}>
                      Already have an account? Log in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </MuiThemeProvider>
        </Grid>
        {redirectUser()};
      </Container>
    </div>
  );
}
