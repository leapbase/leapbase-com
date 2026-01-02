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
import { usePageData } from '../pages/PageContext';

const BasicTable = (props) => {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" component="h2" gutterBottom id="table-title">
        Data Summary
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.config.cols.map((col, index) => (
                <TableCell key={index}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.config.rows.map(row => (
              <TableRow 
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {props.config.cols.map(col => (
                  <TableCell key={col}>{row[col]}</TableCell>
                ))}
              </TableRow>  
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BasicTable;
