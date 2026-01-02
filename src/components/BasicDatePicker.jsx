import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { usePageData } from '../pages/PageContext';

export default function BasicDatePicker(props) {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <br/>
      <DatePicker
        label={props.config.label}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slotProps={{
          textField: { fullWidth: true, size: 'small' },
        }}
      />
    </LocalizationProvider>
  );
}
