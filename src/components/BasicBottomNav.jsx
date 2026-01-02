import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { usePageData } from '../pages/PageContext';

export default function BasicBottomNav() {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  const [value, setValue] = useState(0);

  const tabs = [
    {
      label: 'Recents',
      icon: <RestoreIcon />,
      path: '/recents',
    },
    {
      label: 'Favorites',
      icon: <FavoriteIcon />,
      path: '/favorites',
    },
    {
      label: 'Nearby',
      icon: <LocationOnIcon />,
      path: '/nearby',
    },
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
  ];

  return (
    <Box sx={{ pb: 7 }}>
      <main>
        <Paper
          sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}
          elevation={0}
        >
          <h2>Tab {tabs[value].label}</h2>
          <p>Content for {tabs[value].label} tab</p>
        </Paper>
      </main>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 3,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
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
      </Paper>
    </Box>
  );
}
