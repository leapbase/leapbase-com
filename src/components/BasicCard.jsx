import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppData } from '../app/AppContext';
import { usePageData } from '../pages/PageContext';

export default function BasicCard(props) {
  const { data:appData, loading:appLoading, error:appError } = useAppData();
  console.log('BasicCard appData:', appData);
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  console.log('BasicCard pageData:', pageData);
  
  return (
    <Card sx={{ maxWidth:props.config.width }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.config.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.config.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          app message: {appData && appData.message}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          page message: {pageData && pageData.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.config.onActionClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
