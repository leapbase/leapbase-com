import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import { usePageData } from '../pages/PageContext';

const BasicCalendar = () => {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div style={{ maxWidth: 350, margin: 'auto' }}>
      <Calendar
        onChange={onChange}
        value={date}
        calendarType="gregory"      // Gregorian calendar with Sunday as first day
        showNeighboringMonth={true} // Show days from adjacent months
        selectRange={false}         // Set to true to enable selecting date ranges
      />
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        Selected date: {Array.isArray(date)
          ? `${date[0].toLocaleDateString()} - ${date[1].toLocaleDateString()}`
          : date.toLocaleDateString()}
      </div>
    </div>
  );
};

export default BasicCalendar;

