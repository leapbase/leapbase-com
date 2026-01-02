import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { usePageData } from '../pages/PageContext';

export default function BasicListBox(props) {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  let items = props.config.items || [];
  
  return (
    <div>
      <div>BasicListBox</div>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
