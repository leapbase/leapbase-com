import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { usePageData } from '../pages/PageContext';

export default function Banner(props) {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  return (
    <Box
      sx={{
        bgcolor: props.config.backgroundColor || '#1976d2',
        color: props.config.color || '#fff',
        padding: '16px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        borderRadius: '4px',
        boxShadow: 1,
      }}
    >
      <Typography>{props.config.message}</Typography>
    </Box>
  );
}
