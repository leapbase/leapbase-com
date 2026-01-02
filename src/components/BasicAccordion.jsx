import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { usePageData } from '../pages/PageContext';

export default function BasicAccordion() {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <div>
      {/* Basic Accordion */}
      <Accordion 
        expanded={expanded === 'panel1'} 
        onChange={handleChange('panel1')}
        sx={{ mb: 2 }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Basic Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse malesuada lacus ex, 
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion with Avatar & Chip */}
      <Accordion 
        expanded={expanded === 'panel2'} 
        onChange={handleChange('panel2')}
        sx={{ mb: 2 }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemAvatar sx={{ mr: 2 }}>
            <Avatar src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <Box flexGrow={1}>
            <Typography variant="h6">John Doe</Typography>
            <Chip label="Premium User" color="primary" size="small" />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="Email" secondary="john@example.com" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Phone" secondary="+1 234 567 8900" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Status" secondary="Active" />
            </ListItem>
          </List>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small">Edit</Button>
          <Button size="small" color="error">Delete</Button>
        </AccordionActions>
      </Accordion>

      {/* FAQ Style Accordion */}
      <Accordion 
        expanded={expanded === 'panel3'} 
        onChange={handleChange('panel3')}
        sx={{ mb: 2 }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">What is your return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept returns within 30 days of purchase. Items must be unused 
            and in original packaging. Shipping costs are non-refundable.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Disabled Accordion */}
      <Accordion disabled sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Disabled Accordion Panel</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
