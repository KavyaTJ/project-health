import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from './SideDrawer';
import styles from "../styles/Top.module.css"
import SearchBar from './Search';
import Divider from '@mui/material/Divider';
import List from './List';
import Modal from "./Add_user_Modal"


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-end',
  backgroundColor:"white",

  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: "20px",
    Width:"200px",
    marginLeft:"50px"
  },
}));

export default function Topbar() {
  return (
    <><Sidebar /><Box style={{ boxShadow: "unset" }}>
      <AppBar elevation={0.5}>
        <StyledToolbar style={{color: "#E5E7EB"}}>
          <IconButton size="large" aria-label="search" style={{ alignItems: 'flex-end', marginLeft: "1200px" }}>
            <NotificationsIcon style={{color:"black"}} />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"

          >
            <AccountCircleIcon />     
          </IconButton> 
        </StyledToolbar>
        <Divider />
      </AppBar>
  
      
    </Box>

    <Modal/>
    <SearchBar/>
    <List/>
    </>
  );
}
