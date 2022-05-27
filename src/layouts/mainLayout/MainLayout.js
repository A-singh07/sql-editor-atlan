import { useState, useEffect, useContext } from 'react';
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
  Typography,
  useMediaQuery
} from '@mui/material';
// Icons
import MenuIcon from '@mui/icons-material/Menu';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
// Layouts
import CodeEditorLayout from '../codeEditorLayout/CodeEditorLayout';
import TableLayout from '../tableLayout/TableLayout';
// Context
import { SqlContext } from '../../context/SqlContext';
// Files List
import { csvFilesList } from '../../components/CsvFiles';
// Styles
// import styles from './mainLayout.module.css';

const drawerWidth = 270;
const appBarHeight = 64

const MainLayout = (props) => {
  const { window } = props;
  const { loadTableData } = useContext(SqlContext);
  const matches = useMediaQuery('(min-width: 1200px)', { noSsr: true });

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    // load default table data
    loadTableData(csvFilesList[0].file, csvFilesList[0].name)
  }, [])

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
          csvFilesList.map((item, index) =>
            <ListItemButton
              onClick={() => { loadTableData(item.file, item.name); handleDrawerToggle() }}
              sx={{ paddingY: '0.875rem' }}
              key={index}
            >
              <ListItemIcon>
                <StorageRoundedIcon />
              </ListItemIcon>
              {item.name}
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
            sx={{ display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        anchor="right"
        variant={matches ? "permanent" : "temporary"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: '100%', lg: `calc(100vw - ${drawerWidth}px)` },
          minHeight: `calc(100vh - ${appBarHeight}px)`,
          mt: `${appBarHeight}px`,
          mr: { xs: 0, lg: `${drawerWidth}px` },
          p: { xs: '2rem 1.5rem', lg: '2rem 4rem' },
          background: '#f8f9fb'
        }}
      >
        <CodeEditorLayout />
        <TableLayout />
      </Box>
    </Box>
  )
}

export default MainLayout
