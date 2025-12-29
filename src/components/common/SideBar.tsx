import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { Equalizer } from '@mui/icons-material';
import React, { CSSProperties } from 'react'
import { NavLink } from 'react-router-dom';

interface SideBarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
}

interface MenuItem {
  text: string;
  path: string; 
  id: string
  icon: React.ComponentType;
}

const SideBar = ({drawerWidth,mobileOpen,handleDrawerClose,handleDrawerTransitionEnd}:SideBarProps) => {
    const menuItems: MenuItem[] = [
    { text: 'Home', path: '/', id:"001", icon: HomeIcon },
    { text: 'Report', path: '/report', id:"002", icon: Equalizer },
  ];

  const baseLinkStyle:CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block'
  }

  const activeLinkeStyle:CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
  }
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item, index) => (
            <NavLink 
                to={item.path} 
                style={({ isActive }) => ({...baseLinkStyle, ...(isActive&&activeLinkeStyle)})} 
                key={item.id}>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
            </NavLink>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* モバイル用 */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        
        {/* PC用 */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
  )
}

export default SideBar
