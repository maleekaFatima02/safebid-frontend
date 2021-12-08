import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@mui/material/Box';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { mainListItems, secondaryListItems } from './ListItems';

const theme = createTheme({
  palette: {
    primary: { main: '#1e3d59', contrastText: '#E8EAF6' },
    secondary: { main: '#1e3d59', contrastText: '#4f1715' },
  },
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const themes = useTheme();
  const isMatch = useMediaQuery(themes.breakpoints.down('xs'));
  const isMd = useMediaQuery(themes.breakpoints.down('lg'));

  const TempDrawer = () => {
    return (
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => handleDrawerClose(false)}
        anchor="left"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon color="secondary" /> : <ChevronRightIcon />}</IconButton>
        </div>
        <Divider />
        <div
          style={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            backgroundColor: '#2B7A78',
            width: '240px',
          }}
        >
          {' '}
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
          {/* <List>
            {["Dashboard", "Live Auctions", "Fund Raising Auctions"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          <Divider />
          {/* <List>
            {["My Bids", "My Purchases"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </div>
      </Drawer>
    );
  };
  const MiniDrawer = () => {
    return (
      <Drawer
        variant="permanent"
        anchor="left"
        onClose={() => handleDrawerClose(false)}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={true}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon color="secondary" /> : <ChevronRightIcon />}</IconButton>
        </div>
        <Divider />
        <div
          style={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            backgroundColor: '#f5f0e1',
          }}
        >
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>

          {/* <List>
            {["Dashboard", "Live Auctions", "Fund Raising Auctions"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          {/* <Divider />
          <List>
            {["My Bids", "My Purchases"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </div>
      </Drawer>
    );
  };
  const PermDrawer = () => {
    return (
      <Drawer variant={'permanent'}>
        <div className={classes.toolbarIcon}></div>
        <Divider />
        <div
          style={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            backgroundColor: '#2F4454',
            color: '#000',
            width: '240px',
          }}
        >
          {' '}
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
          {/* <List>
            {["Dashboard", "Live Auctions", "Fund Raising Auctions"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          {/* <Divider />
          <List>
            {["My Bids", "My Purchases"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </div>
      </Drawer>
    );
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <AppBar xs position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            {isMatch || isMd ? (
              <>
                {' '}
                <IconButton edge="start" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)} style={{ color: 'white' }}>
                  <MenuIcon onClick={handleDrawerOpen} />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} flexGrow="1">
                  SafeBid
                </Typography>
              </>
            ) : (
              <>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} flexGrow="1" align="left">
                  SafeBid
                </Typography>
              </>
            )}
            {isMatch ? (
              <>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton size="large" aria-label="show more" aria-haspopup="true" onClick={handleClick} color="inherit">
                    <MoreIcon />
                  </IconButton>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  id="primary-search-account-menu"
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem>
                    <IconButton style={{ margin: '0px' }} size="large" aria-label="show 3 new notifications" color="inherit">
                      <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <Typography variant="inherit" noWrap>
                      Notifications
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <IconButton size="large" edge="end" aria-label="account of current user" aria-haspopup="true" onClick={''} color="inherit">
                      <AccountCircle />
                    </IconButton>
                    <Typography variant="inherit" noWrap>
                      My Account
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <IconButton style={{ margin: '0px' }} size="large" aria-label="show 3 new notifications" color="inherit">
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton size="large" edge="end" aria-label="account of current user" aria-haspopup="true" onClick={''} color="inherit">
                    <AccountCircle />
                  </IconButton>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>

        {/*Drawer Started*/}
        {!isMd && !isMatch ? <PermDrawer /> : <></>}
        {isMd && !isMatch ? <MiniDrawer /> : <></>}
        {isMatch ? <TempDrawer /> : <></>}
      </MuiThemeProvider>
    </div>
  );
};

export default NavBar;
