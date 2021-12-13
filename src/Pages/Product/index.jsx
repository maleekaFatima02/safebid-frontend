import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
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
}));

const displayProducts = () =>
  fetch(`${process.env.REACT_APP_SAFE_BID_URI}/product/allProducts`, {
    headers,
    method: 'GET',
  })
    .then((response) => response.json())

    .catch((err) => {
      console.log(err);
    });

const CustomerHomepage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  var token = '';

  const loadProducts = () => {
    displayProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
        token = localStorage.getItem('token');
      }
    });
  };
  
  useEffect(() => {
    loadProducts();
  }, []);

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container justifyContent="left">
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
        <Grid item xs={12}>
          {error}
          <Typography style={{ paddingBottom: 14, marginBottom: 10 }} component="h5" variant="h5">
            Trending Items 
          </Typography>{' '}
        </Grid>
        <Grid container spacing={3} maxWidth="lg">
          { products.map((product) => (
            <Grid item xs={12} sm={6} md={3}>
              <Link to={`/ProductDetails/${product._id}`} style={{ textDecoration: 'none', color: '#000' }}>
                <Card sx={{ maxWidth: 250, height: 'auto' }} style={{ backgroundColor: '#f5f0e1' }}>
                  <CardMedia component="img" height="140" src={`${process.env.REACT_APP_SAFE_BID_URI}/product/picture/${product._id}`} />

                  <CardContent style={{ padding: '2%' }}>
                    <Typography gutterBottom variant="h5" component="h4">
                      {product.name}
                    </Typography>
                    <Typography variant="body2">{product.openingBid}</Typography>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Typography variant="h6" color="text.secondary">
                        <Countdown date={new Date(product.biddingTime)} autoStart = 'true' />
                      </Typography>
                      <CardActions
                        style={{
                          display: 'flex',
                        }}
                      >
                        {' '}
                        <Link to={`/ProductDetails/${product._id}`} style={{ textDecoration: 'none', color: '#000' }}>
                          <Button
                            size="small"
                            variant="contained"
                            style={{
                              backgroundColor: '#1e3d59',
                              color: 'white',
                            }}
                          >
                            Place Bid
                          </Button>
                        </Link>
                      </CardActions>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerHomepage;
