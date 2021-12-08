import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Payment from '@material-ui/icons/Payment';
import BarChartIcon from '@material-ui/icons/BarChart';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TableChartIcon from '@mui/icons-material/TableChart';

const colorTheme = createTheme({
  palette: {
    primary: { main: '#B71C1C', contrastText: '#455A64' },
    secondary: { main: '#B71C1C', contrastText: '#455A64' },
  },
});

export const mainListItems = (
  <MuiThemeProvider theme={colorTheme} style={{ border: '1px solid black' }}>
    <div>
      <ListItem button>
        <Link to="/Homepage" style={{ textDecoration: 'none', color: '#000' }}>
          <div style={{ display: 'flex' }}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: '#1e3d59' }} />
            </ListItemIcon>

            <ListItemText primary="Home Page" />
          </div>
        </Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <LiveTvIcon sx={{ color: '#1e3d59' }} />
        </ListItemIcon>

        <ListItemText primary="Live Auction Event" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SupervisedUserCircleIcon sx={{ color: '#1e3d59' }} />
        </ListItemIcon>

        <ListItemText primary="FundRaising Auctions" />
      </ListItem>
    </div>
  </MuiThemeProvider>
);

export const secondaryListItems = (
  <MuiThemeProvider theme={colorTheme} style={{ border: '1px solid black' }}>
    <div>
      <ListItem button>
        <Link to="/MyBids" style={{ textDecoration: 'none', color: '#000' }}>
          <div style={{ display: 'flex' }}>
            <ListItemIcon>
              <TableChartIcon sx={{ color: '#1e3d59' }} />
            </ListItemIcon>
            <ListItemText primary="My Bids" />
          </div>
        </Link>
      </ListItem>

      <ListItem button>
        <Link to="/MyPurchases" style={{ textDecoration: 'none', color: '#000' }}>
          <div style={{ display: 'flex' }}>
            <ListItemIcon>
              <ShoppingCartIcon sx={{ color: '#1e3d59' }} />
            </ListItemIcon>
            <ListItemText primary="My Purchases" />
          </div>
        </Link>
      </ListItem>
    </div>
  </MuiThemeProvider>
);
