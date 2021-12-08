import * as React from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import NavBar from '../Components/Layout/NavBar';

const theme = createTheme({
  palette: {
    primary: { main: '#fff', contrastText: '#000' },
    secondary: { main: '#455A64', contrastText: '#000' },
  },
});
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Input = styled('input')({
  display: 'none',
});

const CustomerMyBids = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <main style={{ display: 'flex', flexDirection: 'column' }} className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3} justifyContent="center">
              <Paper
                className={classes.paper}
                style={{
                  width: '65%',
                  backgroundColor: '#F5F5F5',
                  marginTop: '10%',
                }}
              >
                <Grid container justifyContent="center">
                  {' '}
                  <Typography style={{ paddingBottom: 14, marginBottom: 10 }} component="h5" variant="h5">
                    Seller Review
                  </Typography>{' '}
                </Grid>

                <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                  <img alt="picsum" src="https://picsum.photos/200/300" loading="lazy" />
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography style={{ marginTop: 10, paddingBottom: 14, marginBottom: 10 }} component="h6" variant="subtitle1">
                    By Seller XYZ
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'left',
                    flexDirection: 'row',
                  }}
                >
                  <Typography
                    style={{
                      padding: theme.spacing(4),
                      paddingBottom: 14,
                      marginBottom: 10,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    component="h6"
                    variant="h6"
                  >
                    Seller Rating
                  </Typography>{' '}
                  <Rating
                    name="simple-controlled"
                    style={{
                      paddingBottom: 13,
                      padding: theme.spacing(4),
                      display: 'flex',
                      flex: 1,
                      alignItems: 'center',
                    }}
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'left',
                    flexDirection: 'row',
                  }}
                >
                  <Typography
                    style={{
                      padding: theme.spacing(4),
                      paddingBottom: 14,
                      marginBottom: 10,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    component="h6"
                    variant="h6"
                  >
                    Product Rating
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    style={{
                      paddingBottom: 13,
                      padding: theme.spacing(4),
                      display: 'flex',
                      flex: 1,
                      alignItems: 'center',
                    }}
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  style={{
                    padding: '15px',
                  }}
                >
                  <TextField id="filled-basic" label="Descriptive Review..." variant="filled" multiline fullWidth rows={5} />
                  <label htmlFor="icon-button-file" style={{ display: 'flex', justifyContent: 'end' }}>
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <Tooltip title="Upload Product Image" placement="bottom-end">
                      <IconButton aria-label="upload picture" disableRipple style={{ display: 'flex', justifyContent: 'end' }}>
                        <PhotoCamera />
                      </IconButton>
                    </Tooltip>
                  </label>
                  <Grid container justifyContent="center" xs={12} md={12} lg={12}>
                    <Button
                      size="medium"
                      variant="contained"
                      style={{
                        backgroundColor: '#1e3d59',
                        color: 'white',
                        width: '15%',
                      }}
                    >
                      Post
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Container>
        </main>
      </MuiThemeProvider>
    </div>
  );
};

export default CustomerMyBids;
