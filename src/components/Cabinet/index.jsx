import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Components from '../../util/components';
import { usePageData } from '../../pages/PageContext';
import { BlockDataProvider } from './BlockContext';
import { addUidToData } from "../../util/tool";
import data from './data.json'; 

const Cabinet = (props) => {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  console.log('Cabinet component pageData:', pageData);
  let blockData = addUidToData(data);
  let config = { page:pageData, block:props.config, rating:3 };
  
  return ( 
    <BlockDataProvider config={config}>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6" component="h4">
          Cabinet Test
        </Typography>
        {blockData.content.components.map(block => {
          return <div key={block.uid}> 
            {Components(block)}
            <br />
          </div>
        })}
      </Box>
    </BlockDataProvider>
  );
};

export default Cabinet;
