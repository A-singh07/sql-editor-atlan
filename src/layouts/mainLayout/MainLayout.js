import { useState } from 'react';
import {
  AppBar,
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Divider,
  IconButton,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
// import styles from './mainLayout.module.css';

const drawerWidth = 240;
const appBarHeight = 64

const MainLayout = (props) => {
  const { window } = props

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    {
      navitem: 'Conversations',
      query: '/dashboard/convo',
    },
    {
      navitem: 'Members',
      query: '/dashboard/members',
    },
    {
      navitem: 'Speakers',
      query: '/dashboard/speakers',
    },
    {
      navitem: 'Publicaitons',
      query: '/dashboard/publications',
    },
    {
      navitem: 'User Messages',
      query: '/dashboard/messages',
    }
  ]

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h5" component="h5">
          Tables
        </Typography>
      </Toolbar>
      {/* ----- */}

      <Divider />
      <List>
        {
          navItems.map((item, index) =>
            <ListItemButton sx={{ paddingY: '1rem' }} key={index}>
              <ListItemIcon>
                <StorageRoundedIcon />
              </ListItemIcon>
              {item.navitem}
            </ListItemButton>
          )
        }
      </List>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: 'flex', backgroundColor: 'background.main' }}
      component={'main'}
    >
      <AppBar
        position="fixed"
        sx={{
          maxHeight: `${appBarHeight}px`,
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        color="primary"
      >
        <Toolbar>
          <Typography variant="h4" component="h1" sx={{ m: 'auto' }}>
            SQL Editor
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto', display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          display: { xs: 'none', lg: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>

      <Box
        sx={{
          width: "100%",
          maxWidth: '2000px',
          minHeight: `calc(100vh - ${appBarHeight}px)`,
          p: { xs: '2rem 1.5rem', lg: '2rem' },
        }}
      >
        {/* <Outlet /> */}
      </Box>
    </Box>
  )
}

export default MainLayout