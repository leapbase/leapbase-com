import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { usePageData } from '../pages/PageContext';

const tabs = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    path: '/',
  },
  {
    label: 'Search',
    icon: <SearchIcon />,
    path: '/search',
  },
  {
    label: 'Notifications',
    icon: <NotificationsIcon />,
    path: '/notifications',
  },
  {
    label: 'Profile',
    icon: <PersonIcon />,
    path: '/profile',
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    path: '/settings',
  },
];

export default function BasicAppBarBottom(props) {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ pb: 7 }}>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: 'auto', bottom: 0, height: '80px' }}
      >
        <Toolbar sx={{ justifyContent: 'space-around' }}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            sx={{
              width: '100%',
              '& .MuiBottomNavigationAction-root': {
                minWidth: '60px',
              },
            }}
          >
            {tabs.map((tab, index) => (
              <BottomNavigationAction
                key={tab.label}
                label={tab.label}
                icon={tab.icon}
                showLabel
              />
            ))}
          </BottomNavigation>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
