import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Countdown from 'react-countdown';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { headers } from '../utils';

const BasicTable = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell style={{ fontWeight: 'bold' }}>Product Name</TableCell>
          <TableCell align="center" style={{ fontWeight: 'bold' }}>
            Your Bid&nbsp;($)
          </TableCell>
          <TableCell align="center" style={{ fontWeight: 'bold' }}>
            Current Max Bid&nbsp;($)
          </TableCell>
          <TableCell align="center" style={{ fontWeight: 'bold' }}>
            Auction Time Left
          </TableCell>
          <TableCell align="center" style={{ fontWeight: 'bold' }}>
            Update Bid
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.entries.map((row) => (
          <TableRow key={row.product.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {row.product.name}
            </TableCell>
            <TableCell align="center">{row.value}</TableCell>
            <TableCell align="center">{row.currentMaxBid}</TableCell>
            <TableCell align="center"><Countdown date={new Date(row.product.biddingTime)} autoStart = 'true'/></TableCell>
            <TableCell align="center">
            <Button variant="contained" size="small" style={{ background: '#1e3d59', color: '#fff', padding: '6px' }}>
        Update Bid
      </Button></TableCell>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
              <DialogTitle>Enter New Bidding Price</DialogTitle>
              <DialogContent>
                <TextField autoFocus margin="dense" id="name" label="Enter Bid ($)" type="text" fullWidth variant="standard" />
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
};
export default BasicTable;
