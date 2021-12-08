import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

// const Search = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: "#CFD8DC",
//   color: "#000",
//   position: "relative",
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   height: "100%",
//   position: "relative",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",

// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     display: "flex",
//     [theme.breakpoints.up("md")]: {
//       width: "100%",
//       position: "relative",
//     },
//   },
// }));
export default function PrimarySearchAppBar() {
  return (
    <>
      <Grid
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '15px',
          marginBottom: '10px',
        }}
      >
        <Paper
          elevation="3"
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 470,
          }}
          style={{ backgroundColor: '#fff' }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Here" color="#1e3d59" inputProps={{ 'aria-label': 'search google maps' }} />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      {/* <Search>
            <Box style={{margin:"auto"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            </Box>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
    </>
  );
}
