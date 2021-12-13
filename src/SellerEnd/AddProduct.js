import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@mui/material/Typography";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";

import AddProdDetailsForm from "./AddProdDetailsForm";
import ProdDeliveryInfoForm from "./ProdDeliveryInfoForm";

const steps = ["Product Details", "Shipping Information"];



const theme = createTheme();
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

const createProduct = (product) =>{
  const formData = new FormData();
  const {name, description, openingBid, biddingTime, seller, category, shippingPolicy, termsConditions, picture} = product;
  formData.append('name' , name);
  formData.append('description' , description);
  formData.append('openingBid' , openingBid);
  formData.append('biddingTime' , biddingTime);
  formData.append('seller' , seller);
  formData.append('category' , category);
  formData.append('shippingPolicy' , shippingPolicy);
  formData.append('termsConditions' , termsConditions);
  formData.append('picture' , picture);

  return fetch(`${process.env.REACT_APP_SAFE_BID_URI}/product/create`, {
    method: 'POST',
    headers: {  Authorization: localStorage.getItem('token')},
    body: formData,
    }).then((response) => response.json());
  }

export default function AddProduct(props) {
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddProdDetailsForm values ={values} picture = {picture} handler={handleChange} imageHandler = {handleImageChange} />;
      case 1:
        return <ProdDeliveryInfoForm values ={values} handler={handleChange} dateHandler = {handleBiddingTime}/>;
  
      default:
        throw new Error("Unknown step");
    }
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const [values, setValues] = React.useState({
    productName: '',
    openingBid: 0,
    category: '',
    description: '',
    termsConditions: '',
    shippingPolicy: ''
  });

  const {productName, openingBid, category, description, termsConditions, shippingPolicy} = values;
  const [picture, setPicture] = React.useState('');
  const [uploadSuccess, setUploadSuccess] = React.useState(false);
  const [biddingTime, setBiddingTime] = React.useState(Date.now()+1900000);

  const handleBiddingTime = (newValue) => {
    setBiddingTime(newValue);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setValues({ ...values, [name]: value });
  };
  console.log(values);

  const handleImageChange = (event) => {
    setPicture(event.target.files[0]);
  };
  console.log(picture);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log('1' , activeStep);
    if (activeStep === steps.length -1) {
      uploadProduct();
    }
  };
  console.log('2' , activeStep);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const uploadProduct = () => {
    console.log('upload');
    createProduct({name: productName, seller: '61b6d42abbcb7c36f4dd295d', picture: picture,
    description: description, category: category, openingBid: openingBid,
    biddingTime: biddingTime, shippingPolicy: shippingPolicy, termsConditions: termsConditions}).then((data) => {
      if (data.error) {
        console.log("Product Uploaded successfully!");
        console.log({error : "issue with uploading"});
      } else {
        setUploadSuccess(true);
        console.log("Product Uploaded successfully!");
      }
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <MuiThemeProvider theme={theme}>

        <main
          style={{ display: "flex", flexDirection: "column" }}
          className={classes.content}
        >
          <div className={classes.appBarSpacer} />

          <Container component="main"  maxWidth="sm" sx={{ height: '100vh' }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, height: '100vh'  }}
            >
              <Typography component="h1" variant="h4" align="center">
                Product Upload Form
              </Typography>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                     {uploadSuccess ? "Product Uploaded Successfully" : "There was an error while uploading Product"}
                    </Typography>
                    <div style={{display:"flex",flex:1,alignItems:"center", justifyContent:"center"}}>
                    <Link
                        to="/ViewMyProduct"
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                    <Button
                      size="small"
                      variant="contained"
                      style={{
                        backgroundColor: "#1e3d59",
                        color: "white",
                      }}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      View Product
                    </Button>
                    </Link>

                    <Link
                        to="/ViewInventory"
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                    <Button
                            size="small"
                            variant="contained"
                            style={{
                              backgroundColor: "#1e3d59",
                              color: "white",
                            
                              
                            }}
                            sx={{ mt: 3, ml: 1 }}
                          >
                            View Inventory
                          </Button>
                          </Link>
                          </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {activeStep !== 0 && (
                        <Button
                          onClick={handleBack}
                          sx={{ mt: 3, ml: 1 }}
                          style={{ color: "#1e3d59" }}
                        >
                          Back
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        onClick={handleNext}
                        style={{
                          backgroundColor: "#1e3d59",
                          color: "white",
                        }}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {activeStep === steps.length - 1 ? "Upload" : "Next"}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </Container>
        </main>
      </MuiThemeProvider>
    </div>
  );
}
