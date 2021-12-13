import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Table from '../../CustomerEnd/Table';
import SearchBar from '../../Components/SearchBar';
import { headers } from '../../utils';

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

const displayBids = () =>
  fetch(`${process.env.REACT_APP_SAFE_BID_URI}/bid/allBids/61a38df8de7cb13650a90d63`, {
    headers,
    method: 'GET',
  })
    .then((response) => response.json())

    .catch((err) => {
      console.log(err);
    });

  

const CustomerMyBids = () => {
  const classes = useStyles();
  const [bids, setBids] = useState([]);

  const loadBids = () => {
    displayBids().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log("bids received correctly")
        setBids(data);
      }
    });
  };

  useEffect(() => {
    loadBids();
  }, []);

  return (
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
                My Bids
              </Typography>{' '}
            </Grid>
            <Table entries = {bids}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerMyBids;
