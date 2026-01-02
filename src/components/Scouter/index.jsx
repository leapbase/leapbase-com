import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { ScoutDataProvider } from './ScoutContext';
import ScoutListBox from './ScoutListBox';
import ScoutTable from './ScoutTable';
import { usePageData } from '../../pages/PageContext';

const Scouter = (props) => {

  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  console.log('Scouter component pageData:', pageData);
  
  return ( 
    <ScoutDataProvider config={props.config}>
      <Box sx={{ height: '80vh', p: 2 }}>
        <Grid container spacing={2} sx={{ height: '100%' }}>
          {/* Left Panel - FIXED 25% width on ALL screens */}
          <Grid 
            size={3}
            sx={{ 
              minWidth: '25%', 
              maxWidth: '25%',
              flexShrink: 0  // Prevents shrinking
            }}
          >
            <Paper 
              sx={{ 
                height: '100%', 
                p: 2, 
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <ScoutListBox config={props.config} />
              </Box>
            </Paper>
          </Grid>
          {/* Right Panel - Takes remaining 75% */}
          <Grid size='grow' sx={{ flexGrow: 1 }}>
            <Paper 
              sx={{ 
                height: '100%', 
                p: 3, 
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'auto'
              }}
            >
              <Box sx={{ mt: 2 }}>
                <ScoutTable config={props.config} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ScoutDataProvider>
  );
};

export default Scouter;
