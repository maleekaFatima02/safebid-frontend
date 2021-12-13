import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Box from "@mui/material/Box";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import DateTimePicker from '@mui/lab/DateTimePicker';
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Stack from "@mui/material/Stack";

export default function ShippingInfo(props) {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping Information
      </Typography>
      <Grid container spacing={3}>
        {/* multiline */}
        <Grid item xs={12}>
          <TextField
            id="outlined-textarea"
            label="Terms and Conditions"
            placeholder="Placeholder"
            fullWidth
            multiline
            name = "termsConditions"
            value={props.values.termsConditions}
            onChange={(e) => props.handler(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-textarea"
            label="Shipping Policy"
            placeholder="Placeholder"
            fullWidth
            multiline
            name = "shippingPolicy"
            value={props.values.shippingPolicy}
            onChange={(e) => props.handler(e)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
          label="Bidding Duration"
          name = "biddingTime"
          value={props.values.biddingTime}
          onChange={props.dateHandler}
          renderInput={(params) => <TextField {...params} />}
        />
            
          </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
