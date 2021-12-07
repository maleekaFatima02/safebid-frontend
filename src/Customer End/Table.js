import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Countdown from "react-countdown";
import Grid from "@mui/material/Grid";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@mui/material/TextField";
function createData(name, yourBid, maxBid, auctionTime, updateBid) {
  return { name, yourBid, maxBid, auctionTime, updateBid };
}
//countdown for bidded products
var first = <Countdown date={Date.now() + 20102000} />;
var second = <Countdown date={Date.now() + 9238700} />;
var third =  <Countdown date={Date.now() + 90000000} />;
var fourth =  <Countdown date={Date.now() + 900000000} />;
var fifth = <Countdown date={Date.now() + 840765000} />;
var sixth = <Countdown date={Date.now() + 340000} />;


export default function BasicTable() {

  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const rows = [
    createData(
      "Coins",
      3,
      5,
      first,
      <Button
        variant="contained"
        onClick={handleClickOpen}
        size="small"
        style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      >
        Update Bid
      </Button>
  
  
  
  
  
    ),
    createData(
      "Vase",
      10,
      10,
      second,
      <Button
        variant="contained"
        size="small"
        style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      >
        Update Bid
      </Button>
    ),
    createData(
      "Japanese Plate",
      8,
      9,
     third,
      <Button
        variant="contained"
        size="small"
        style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      >
        Update Bid
      </Button>
    ),
    createData(
      "Pearl Necklace",
      14,
      19,
     fourth,
      <Button
        variant="contained"
        size="small"
        style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      >
        Update Bid
      </Button>
    ),
    createData(
      "Ruby Tiara",
      22,
      25,
      fifth,
      <Button
        variant="contained"
        size="small"
        style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      >
        Update Bid
      </Button>
    ),
    createData(
      "Autographed sports memorabilia",
      4,
      9,
      sixth,
      <Button
        variant="contained"
        size="small"
        style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      >
        Update Bid
      </Button>
    ),
  ];

  return (
    <Table sx={{ minWidth: 650,  }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
          <TableCell align="center" style={{ fontWeight: "bold" }}>
            Your Bid&nbsp;($)
          </TableCell>
          <TableCell align="center" style={{ fontWeight: "bold" }}>
            Current Max Bid&nbsp;($)
          </TableCell>
          <TableCell align="center" style={{ fontWeight: "bold" }}>
            Auction Time Left
          </TableCell>
          <TableCell align="center" style={{ fontWeight: "bold" }}>
            Update Bid 
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.yourBid}</TableCell>
            <TableCell align="center">{row.maxBid}</TableCell>
            <TableCell align="center">{row.auctionTime}</TableCell>
            <TableCell align="center">{row.updateBid}</TableCell> 


            <Dialog open={open} onClose={handleClose} fullWidth={true}
  maxWidth={'sm'}>
        <DialogTitle>Enter New Bidding Price</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Bid ($)"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
