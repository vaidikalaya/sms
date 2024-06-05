import {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import {Container,Box,Toolbar,Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText,
  CssBaseline,Typography,IconButton} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HowToRegIcon from '@mui/icons-material/HowToReg';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

export default function AdminLayout({ children }) {
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    return (
        <Box sx={{ display: 'flex',backgroundColor:"#f5f5f5" }}>
            <CssBaseline />
            <AppBar position="fixed" elevation={4} sx={{backgroundColor:"#ffffff",color:"#2f2f2f"}}>
                <Toolbar>
                <IconButton onClick={()=>setOpen(!open)} color="inherit" aria-label="open drawer" edge="start">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    V-VMS
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader></DrawerHeader>
                <List>
                    
                    <NavLink to="/dashboard">
                      <ListItem disablePadding sx={{ display: 'block' }}>
                          <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                              <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center'}}>
                                  <DashboardIcon />
                              </ListItemIcon>
                              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
                          </ListItemButton>
                      </ListItem>
                    </NavLink>
                    <Divider/>

                    <NavLink to="/students">
                      <ListItem disablePadding sx={{ display: 'block' }}>
                          <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                              <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center'}}>
                                  <FormatListBulletedIcon />
                              </ListItemIcon>
                              <ListItemText primary="Students" sx={{ opacity: open ? 1 : 0 }} />
                          </ListItemButton>
                      </ListItem>
                    </NavLink>

                    <NavLink to="/student-registration">
                      <ListItem disablePadding sx={{ display: 'block' }}>
                          <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                              <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center'}}>
                                  <HowToRegIcon />
                              </ListItemIcon>
                              <ListItemText primary="Student Registration" sx={{ opacity: open ? 1 : 0 }} />
                          </ListItemButton>
                      </ListItem>
                      <Divider/>
                    </NavLink>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                            <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center'}}>
                                <FormatListBulletedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Teachers" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                            <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center'}}>
                                <HowToRegIcon />
                            </ListItemIcon>
                            <ListItemText primary="Teacher Registration" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <Divider/>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                            <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center'}}>
                                <FormatListBulletedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Classes" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Drawer>
            <Box sx={{pt:3,minHeight:"100vh",width:"100%"}}>
              <DrawerHeader />
              <Container sx={{pt:2,mb:3,pb:3,backgroundColor:"#ffffff",minHeight:"70vh"}}>
                { children }
              </Container>
            </Box>
        </Box>
    );
}
