import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Redirect, Route, Switch } from 'react-router-dom';
import { makeStyles, createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import StickyFooter from './StickyFooter';
import NavBar from './NavBar';
import ViewProductDetails from '../../CustomerEnd/ViewProductDetails';
import CustomerMyBids from '../../CustomerEnd/CustomerMyBids';
import CustomerHomepage from '../../CustomerEnd/CustomerHomepage';
import CustomerReview from '../../CustomerEnd/CustomerReview';
import CustomerPurchases from '../../CustomerEnd/CustomerPurchases';

const theme = createTheme({
  palette: {
    primary: { main: '#B71C1C', contrastText: '#000' },
    secondary: { main: '#B71C1C', contrastText: '#000' },
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
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <main style={{ display: 'flex', flexDirection: 'column' }} className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route exact path="/homepage" component={CustomerHomepage} />
            <Route exact path="/ProductDetails/:productId" component={ViewProductDetails} />
            <Route exact path="/MyBids" component={CustomerMyBids} />
            <Route exact path="/MyPurchases" component={CustomerPurchases} />
            <Route exact path="/CustomerReview" component={CustomerReview} />
            <Redirect from="*" to="/homepage" />
          </Switch>
          <StickyFooter />
        </main>
      </MuiThemeProvider>
    </div>
  );
};

export default Layout;
