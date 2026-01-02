import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { usePageData } from '../../pages/PageContext';
import { useScoutData } from './ScoutContext';

export default function ScoutListBox(props) {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  const { 
    data:blockData, loading:blockLoading, error:blockError, 
    refetch, selectItem 
  } = useScoutData();
  console.log('ScoutListBox pageData:', pageData);
  
  let pageMessage = pageData && pageData.message || 'page test message';
  let items = (blockData && blockData.data || []).map(item => item.toUpperCase());
  
  return (
    <div>
      <div>{pageMessage}/{props.config.title}</div>
      <List>
        {items.map((item, index) => (          
          <ListItem
            key={index}
            disablePadding
            onClick={() => selectItem(item, index)}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
