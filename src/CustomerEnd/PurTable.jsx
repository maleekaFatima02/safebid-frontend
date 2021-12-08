import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function createData(productName, sellerName, price, status, leaveReview) {
  return { productName, sellerName, price, status, leaveReview };
}

const PurTable = () => {
  const rows = [
    createData(
      'Vase',
      'Seller123',
      22,
      'Shipped',
      <Link to="/CustomerReview" style={{ textDecoration: 'none', color: '#000' }}>
        <Button variant="contained" size="small" style={{ background: '#1e3d59', color: '#fff', padding: '6px' }}>
          Give Review
        </Button>
      </Link>,
    ),
    createData(
      'Vase',
      'Seller123',
      22,
      'Shipped',
      <Link to="/CustomerReview" style={{ textDecoration: 'none', color: '#000' }}>
        <Button variant="contained" size="small" style={{ background: '#1e3d59', color: '#fff', padding: '6px' }}>
          Give Review
        </Button>
      </Link>,
    ),
    createData(
      'Vase',
      'Seller123',
      22,
      'Shipped',
      <Link to="/CustomerReview" style={{ textDecoration: 'none', color: '#000' }}>
        <Button variant="contained" size="small" style={{ background: '#1e3d59', color: '#fff', padding: '6px' }}>
          Give Review
        </Button>
      </Link>,
    ),
    createData(
      'Vase',
      'Seller123',
      22,
      'Shipped',
      <Link to="/CustomerReview" style={{ textDecoration: 'none', color: '#000' }}>
        <Button variant="contained" size="small" style={{ background: '#1e3d59', color: '#fff', padding: '6px' }}>
          Give Review
        </Button>
      </Link>,
    ),
    createData(
      'Vase',
      'Seller123',
      22,
      'Shipped',
      <Link to="/CustomerReview" style={{ textDecoration: 'none', color: '#000' }}>
        <Button variant="contained" size="small" style={{ background: '#1e3d59', color: '#fff', padding: '6px' }}>
          Give Review
        </Button>
      </Link>,
    ),
    createData(
      'Vase',
      'Seller123',
      22,
      'Shipped',
      <Link to="/CustomerReview" style={{ textDecoration: 'none', color: '#000' }}>
        <Button variant="contained" size="small" style={{ background: '#1e3d59', color: '#fff', padding: '6px' }}>
          Give Review
        </Button>
      </Link>,
    ),
  ];

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell style={{ fontWeight: 'bold' }}>Product Name</TableCell>
          <TableCell align="center" style={{ fontWeight: 'bold' }}>
            Seller Name
          </TableCell>
          <TableCell align="center" style={{ fontWeight: 'bold' }}>
            Price&nbsp;($)
          </TableCell>
          <TableCell align="center" style={{ fontWeight: 'bold' }}>
            Status
          </TableCell>
          <TableCell align="center" style={{ fontWeight: 'bold' }}>
            Action
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {row.productName}
            </TableCell>
            <TableCell align="center">{row.sellerName}</TableCell>
            <TableCell align="center">{row.price}</TableCell>
            <TableCell align="center">{row.status}</TableCell>
            <TableCell align="center">{row.leaveReview}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PurTable;
