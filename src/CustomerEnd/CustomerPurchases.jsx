import SearchBar from './SearchBar';
import PurTable from './PurTable';
import Grid from '@mui/material/Grid';
import NavBar from './NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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

export default function CustomerMyBids() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <main style={{ display: 'flex', flexDirection: 'column' }} className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="md" className={classes.container}>
            <Grid container justifyContent="center">
              <Grid
                xs={12}
                item
                style={{
                  padding: '15px',
                  marginTop: '5px',
                }}
              >
                <SearchBar />
              </Grid>

              <Grid
                xs={12}
                item
                wrap
                style={{
                  padding: '15px',
                  marginTop: '5px',
                }}
              >
                <Paper elevation="3" className={classes.paper} style={{ backgroundColor: '#F5F5F5', padding: '12px' }}>
                  <Grid container xs={12} justifyContent="center">
                    {' '}
                    <Typography style={{ paddingBottom: 14, marginBottom: 10 }} component="h5" variant="h5">
                      My Purchases
                    </Typography>{' '}
                  </Grid>
                  <PurTable />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </MuiThemeProvider>
    </div>
  );
}
