import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import { makeStyles } from "@material-ui/core/styles";

const Input = styled("input")({
  display: "none",
});

export default function AddProdDetailsForm(props) {

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <img style={{width:'15px', height:"20px"}} src={photo} alt="" key={photo} />;
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="prodname"
            name="productName"
            label="Name of Product"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={props.values.productName}
            onChange={(e) => props.handler(e)}
          />
        </Grid>

        <Grid item xs={12}>
        <TextField
            required
            id="openingBid"
            name="openingBid"
            label="Opening Bid"
            fullWidth
            autoComplete="openingBid"
            type = "number"
            variant="standard"
            value={props.values.openingBid}
            onChange={(e) => props.handler(e)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
            autoComplete="description"
            variant="standard"
            value={props.values.description}
            onChange={(e) => props.handler(e)}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-controlled-open-select-label">
              {" "}
              Category
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              label="Category"
              name = "category"
              value={props.values.category}
              onChange={(e) => props.handler(e)}
            >
              <MenuItem value="None"></MenuItem>
              <MenuItem value="Potraits">Potraits</MenuItem>
              <MenuItem value="Souvenir">Souvenir</MenuItem>
              <MenuItem value="Coins">Coins</MenuItem>
              <MenuItem value="Statues">Statues</MenuItem>
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Jewellery">Jewellery</MenuItem>
              <MenuItem value="Accessories">Accessories</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
        <Typography style={{display:'flex', flexDirection:'row'}}>
                 Upload Product Photo
               </Typography>

            <div style={{width:'15px', height:"20px"}}>
              <div><input type="file" name="picture" accept = "image/*"/></div>
         </div>

        </Grid>
      </Grid>
    </React.Fragment>
  );
}
