import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Countdown from 'react-countdown';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { InputBase } from '@mui/material';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/Layout/NavBar';
import StickyFooter from './StickyFooter';
import { headers } from '../utils';

const theme = createTheme({
  palette: {
    primary: { main: '#fff', contrastText: '#000' },
    secondary: { main: '#fff', contrastText: '#fff' },
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
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flex: '1',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(10),
    display: 'flex',
    margin: theme.spacing(10),
    flexDirection: 'row',
  },
  paperCard: {
    padding: theme.spacing(3),
    maxWidth: '100%',
    overflow: 'auto',
    display: 'flex',

    flexDirection: 'column',
  },
  text: {
    color: '#fff',
  },
  inputBase: {
    color: '#fff',
    height: '6vh',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },

  fixedHeight: {
    height: 240,
  },
}));

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

// confirmation prompt

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

const displayProduct = (productId) =>
  fetch(`${process.env.REACT_APP_SAFE_BID_URI}/product/viewProduct/${productId}`, {
    headers,
    method: 'GET',
  })
    .then((response) => response.json())

    .catch((err) => {
      console.log(err);
    });

const displayTotalBids = (productId) =>
  fetch(`${process.env.REACT_APP_SAFE_BID_URI}/product/bidCount/${productId}`, {
    headers,
    method: 'GET',
  })
    .then((response) => response.json())

    .catch((err) => {
      console.log(err);
    });

const displayCurrentBid = (productId) =>
  fetch(`${process.env.REACT_APP_SAFE_BID_URI}/product/currentBid/${productId}`, {
    headers,
    method: 'GET',
  })
    .then((response) => response.json())

    .catch((err) => {
      console.log(err);
    });

const ImgMediaCard = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [product, setProduct] = useState({});
  const [totalBids, setTotalBids] = useState(0);
  const [currentBid, setCurrentBid] = useState(0);
  const [error, setError] = useState(false);

  const { productId } = useParams();

  const loadProduct = (productId) => {
    displayProduct(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
      }
    });
  };

  const loadTotalBids = (productId) => {
    displayTotalBids(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setTotalBids(data);
      }
    });
  };

  const loadCurrentBid = (productId) => {
    displayCurrentBid(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data, 'something');
        setCurrentBid(data);
      }
    });
  };

  useEffect(() => {
    loadProduct(productId);
    loadTotalBids(productId);
    loadCurrentBid(productId);
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <NavBar />
        {error}
        <main style={{ display: 'flex', flexDirection: 'column' }} className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container justifyContent="center" spacing={3}>
              {/* <Paper className={classes.paper} elevation={0}> */}
              <Grid
                lg={7}
                md={8}
                container
                style={{
                  backgroundColor: '#F5F5F5',
                  border: '2px solid rgba(34, 49, 63, 1)',
                  padding: '50px',
                }}
              >
                <Grid xs={12} md={6} lg={8} item>
                  <Card style={{ borderWidth: '1px', borderColor: '#1e3d59' }}>
                    <CardMedia component="img" alt="displayed image" height="320" pt="56.25%" src={`${process.env.REACT_APP_SAFE_BID_URI}/product/picture/${product._id}`} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold', color: '#000' }}>
                        {product.name}
                      </Typography>
                      {/* <Typography variant="body2" color="#000">
                        Ancient Chinese Ceramic Vase
                      </Typography> */}
                    </CardContent>
                    <CardActions>
                      <Button size="small" style={{ color: '#000' }}>
                        About Seller
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <CardContent
                    style={{
                      display: 'flex',
                      flex: '1',
                      justifyContent: 'center',
                      // border: "1px solid red",
                      flexDirection: 'column',

                      margin: '20px',
                      width: '100%',
                    }}
                  >
                    <Typography gutterBottom variant="h6" component="div" style={{ color: '#000' }}>
                      Time Left
                    </Typography>
                    <p>
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        style={{
                          paddingBottom: '10px',
                          fontWeight: 'bold',
                          color: 'red',
                        }}
                      >
                        <Countdown date={Date.now() + 1900000} />
                      </Typography>
                    </p>

                    <Typography gutterBottom variant="h6" component="div" style={{ color: '#000' }}>
                      Opening Bid
                    </Typography>
                    <p>
                      <Typography
                        variant="h5"
                        color="#000"
                        style={{
                          paddingBottom: '10px',
                          fontWeight: 'bold',
                          color: 'red',
                        }}
                      >
                        {product.openingBid}&nbsp;($)
                      </Typography>
                    </p>

                    <Typography gutterBottom variant="h6" component="div" style={{ color: '#000' }}>
                      Current Max Bid
                    </Typography>
                    <p>
                      <Typography
                        variant="h5"
                        color="#000"
                        style={{
                          paddingBottom: '10px',
                          fontWeight: 'bold',
                          color: 'red',
                        }}
                      >
                        {currentBid}&nbsp;($)
                      </Typography>
                    </p>

                    <Typography gutterBottom variant="h6" component="div" style={{ color: '#000' }}>
                      Placed Bids
                    </Typography>
                    <p>
                      <Typography variant="h6" style={{ paddingBottom: '10px', color: 'grey' }}>
                        {totalBids}
                      </Typography>
                    </p>
                  </CardContent>
                </Grid>

                <Divider
                  variant="middle"
                  style={{
                    backgroundColor: 'white',
                    width: '100%',
                    marginTop: '10px',
                  }}
                />

                {/* a container */}
                <Grid
                  container
                  style={{
                    marginTop: '20px',
                    marginBottom: '22px',
                    height: '12vh',
                    // backgroundColor: "#000",
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    lg={8}
                    sm={8}
                    md={8}
                    style={{
                      marginLeft: '12px',
                      padding: '2px',
                      display: 'flex',
                      flex: '1',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <InputBase
                      fullWidth
                      placeholder="Enter Your Bid&nbsp;($)"
                      style={{
                        border: '1px solid rgba(34, 49, 63, 1)',
                        color: 'rgba(34, 49, 63, 1)',
                        padding: theme.spacing(2),
                      }}
                      size="small"
                    />
                  </Grid>
                  {/* <Button
                          variant="contained"
                          style={{ background: "#fff", color: "maroon" , margin:"4px"}}
                        >
                          Place Bid
                        </Button> */}
                  <Grid item xs={12} sm={4} lg={4} md={4}>
                    <Button
                      size="large"
                      variant="contained"
                      style={{
                        background: '#1e3d59',
                        color: '#fff',
                        margin: '15px',
                      }}
                      onClick={handleClickOpen}
                    >
                      Place Bid
                    </Button>
                  </Grid>

                  <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                      Confirm Bidding
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                      <Typography gutterBottom>Are you sure you want to place bid on this product?</Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Confirm Bid</Button>
                      <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                  </BootstrapDialog>
                </Grid>
              </Grid>
              {/* terms & cond */}
              <Grid item lg={4} md={4}>
                <Paper className={classes.paperCard}>
                  <div>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Product Description</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{product.description}</Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Terms and Conditions</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Shipping Policy</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Paper>
                {/* </Paper> */}
              </Grid>
            </Grid>
          </Container>
          <StickyFooter />
        </main>
      </MuiThemeProvider>
    </div>
  );
};

export default ImgMediaCard;
