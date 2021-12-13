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
import TextField from "@mui/material/TextField";
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

function createData(customerName, custmomerBid,Date, Time) {
  return { customerName, custmomerBid, Date,Time};
}

export default function ViewAllBids() {
  const rows = [
    createData(
      "Customer123",
     
      22,
      "Nov 22",
      "22:33:22"

      
    //   <Link
    //   to="/CustomerReview"
    //   style={{ textDecoration: "none", color: "#000" }}
    // >
    //   <Button
    //     variant="contained"
    //     size="small"
    //     style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
    //   >
    //     Give Review
    //   </Button>
    //   </Link>
    ),
    createData(
        "Customer123",
     
        22,
        "Nov 22",
        "22:33:22"    ),
    createData(
        "Customer123",
     
        22,
        "Nov 22",
        "22:33:22"
    ),
    createData(
        "Customer123",
     
        22,
        "Nov 22",
        "22:33:22"
    ),
    createData(
        "Customer123",
     
        22,
        "Nov 22",
        "22:33:22"
    ),
    createData(
        "Customer123",
     
        22,
        "Nov 22",
        "22:33:22"
    ),
  ];

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell style={{ fontWeight: "bold" }}>Customer Name</TableCell>
          
          <TableCell align="center" style={{ fontWeight: "bold" }}>
            Placed Bid&nbsp;($)
          </TableCell>
          <TableCell align="center" style={{ fontWeight: "bold" }}>
           Date
          </TableCell>
          <TableCell align="center" style={{ fontWeight: "bold" }}>
            Time
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx = {{"&:last-child td, &:last-child th" : {border: 0 }}}
          >
              <TableCell component="th" scope="row">
              {row.customerName}
            </TableCell>
            <TableCell align="center">{row.custmomerBid}</TableCell>
            <TableCell align="center">{row.Date}</TableCell>
            <TableCell align="center">{row.Time}</TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
