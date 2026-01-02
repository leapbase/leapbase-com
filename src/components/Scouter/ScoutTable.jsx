import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper, 
  Typography, 
  Box
} from '@mui/material';
import { usePageData } from '../../pages/PageContext';
import { useScoutData } from './ScoutContext';

const ScoutTable = (props) => {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  const { 
    data:blockData, loading:blockLoading, error:blockError, 
    refetch, selectItem 
  } = useScoutData();
  
  let selectedItem = blockData && blockData.selectedItem || '';
  let domainData = blockData && blockData.domain || {};
  
  let cols = props.config.cols || [];
  let rows = [];
  if (selectedItem) {
    cols = domainData.cols || cols;
    rows = domainData.rows || [];
  }
  
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" component="h2" gutterBottom id="table-title">
        Table Data {selectedItem}
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
        <Table aria-label="scout table">
          <TableHead>
            <TableRow>
              {cols.map((col, index) => (<TableCell key={index}>{col}</TableCell>))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow 
                key={rowIndex}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                {cols.map((col, colIndex) => (<TableCell key={colIndex}>{row[col]}</TableCell>))}
              </TableRow>  
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ScoutTable;
