import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import router from 'next/router';

const drawerWidth = 200;
const listStyle3 = {
  flexShrink: 0
}

const itemsList = [
  {
    text: "Admin Users",
    icon: <AccountBoxIcon style={{color:" #FFFFFF",width:"25px",height:"25px"}}/>,
    
      onClick: () => router.push("/login")
  },
  {
    text: "Projects",
    icon: <PeopleAltIcon  style={{color:" #FFFFFF",width:"25px",height:"25px"}}/>,
    // onClick: () => router.push("/Projects")
  },
  {
    text: "Employees",
    icon: <AssignmentIcon  style={{color:" #FFFFFF",width:"25px",height:"25px"}} />,
    // onClick: () => router.push("/Employees")
  },
  {
    text: "Settings",
    icon: <SettingsIcon  style={{color:" #FFFFFF",width:"25px",height:"25px"}} />,
    // onClick: () => router.push("/Settings")
  }
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  background: "#1996FC",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  background: "#1996FC",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});



interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    background: "#1996FC",
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <><div >
      <CssBaseline />
      <Drawer variant="permanent"  style={listStyle3} open={open}
      onMouseOver={handleDrawerOpen}
      onMouseOut={handleDrawerClose}      

>
          <IconButton onClick={handleDrawerClose} >
            <img src="icon.png" style={{height:"30px",width:"30px"}}/>
          </IconButton>
          <Divider/>
        <List >
        {itemsList.map((item, index) => {
          const { text, icon } = item;
          return (
            <ListItem button key={text} >
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
           </List>

      </Drawer>
    
   <List/>
    
      </div></>
  );
}
