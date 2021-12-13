import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {routesList} from '../utils/config'

const colorTheme = createTheme({
  palette: {
    primary: { main: '#B71C1C', contrastText: '#455A64' },
    secondary: { main: '#B71C1C', contrastText: '#455A64' },
  },
});

export const mainListItems = (
  <MuiThemeProvider theme={colorTheme} style={{ border: '1px solid black' }}>
    <div>

      {routesList.map((item) => { 
        if (item.role.includes(localStorage.getItem('role'))){
          return (<ListItem button>
        <Link to={item.link} style={{ textDecoration: 'none', color: '#000' }}>
          <div style={{ display: 'flex' }}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.itemName} />
          </div>
        </Link>
      </ListItem>);
        }
        return null;
      })}
    </div>
  </MuiThemeProvider>
);


