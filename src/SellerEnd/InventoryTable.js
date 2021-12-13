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
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

function createData(productName, maxBid, status) {
  return { productName, maxBid, status };
}

export default function InventoryTable() {
  const rows = [
    createData(
      "Vase",

      22,
      "In Process"
      //   <Link
      //   to="/ViewMyProduct"
      //   style={{ textDecoration: "none", color: "#000" }}
      // >
      //   <Button
      //     variant="contained"
      //     size="small"
      //     style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      //   >
      //     View Product
      //   </Button>
      //   </Link>
    ),
    createData(
      "Vase",

      22,
      "In Process"
      // <Link
      //                   to="/ViewMyProduct"
      //                   style={{ textDecoration: "none", color: "#000" }}
      //                 >
      // <Button
      //   variant="contained"
      //   size="small"
      //   style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      // >
      //          View Product
      // </Button>
      // </Link>
    ),
    createData(
      "Vase",

      22,
      "Pending"
      //   <Link
      //   to="/ViewMyProduct"
      //   style={{ textDecoration: "none", color: "#000" }}
      // >
      //   <Button
      //     variant="contained"
      //     size="small"
      //     style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      //   >
      //     View Product
      //   </Button>
      //   </Link>
    ),
    createData(
      "Vase",

      22,
      "Shipped"
      // <Link
      //                   to="/ViewMyProduct"
      //                   style={{ textDecoration: "none", color: "#000" }}
      //                 >
      // <Button
      //   variant="contained"
      //   size="small"
      //   style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      // >
      //          View Product
      // </Button>
      // </Link>
    ),createData(
      "Vase",

      22,
      "In Process"
      //   <Link
      //   to="/ViewMyProduct"
      //   style={{ textDecoration: "none", color: "#000" }}
      // >
      //   <Button
      //     variant="contained"
      //     size="small"
      //     style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      //   >
      //     View Product
      //   </Button>
      //   </Link>
    ),
    createData(
      "Vase",

      22,
      "Pending"
      // <Link
      //                   to="/ViewMyProduct"
      //                   style={{ textDecoration: "none", color: "#000" }}
      //                 >
      // <Button
      //   variant="contained"
      //   size="small"
      //   style={{ background: "#1e3d59", color: "#fff", padding: "6px" }}
      // >
      //          View Product
      // </Button>
      // </Link>
    ),
  ];

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TableCell style={{ fontWeight: "bold" }}>Product</TableCell>

          <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>

          <TableCell align="center" style={{ fontWeight: "bold" }}>
            Maximum Bid&nbsp;($)
          </TableCell>
          <TableCell align="center" style={{ fontWeight: "bold" }}>
            Product Status
          </TableCell>
          {/* <TableCell align="center" style={{ fontWeight: "bold" }}>
            Action
          </TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <Link
            to="/ViewMyProduct"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{
                display: "flex",
                flex:1,
                justifyContent: "space-between",

             
              }}
            >
              <TableCell component="th" scope="row">
                <img
                  src="https://picsum.photos/200/300"
                  alt="Product Image"
                  style={{ width: "70px", height: "70px" }}
                />
              </TableCell>

              <TableCell style-={{display:'flex',flex:1, justifyContent:'flex-start'}}>
                {row.productName}
              </TableCell>

              <TableCell style={{width:"10%"}}>{row.maxBid}</TableCell>
              <TableCell  style={{width:"13%"}}>{row.status}</TableCell>
              {/* <TableCell align="center">{row.leaveReview}</TableCell> */}
            </TableRow>
          </Link>
        ))}
      </TableBody>
    </Table>
  );
}
