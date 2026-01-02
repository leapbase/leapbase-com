import React, { useState, useEffect } from 'react';
import { usePageData } from '../pages/PageContext';

const CurrentTime = (props) => {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const localTime = time.toLocaleString('en-US', {
    timeZone: props.config.timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  return (
    <div style={{ 
      padding: '12px 16px', 
      background: '#f8f9fa', 
      borderRadius: '8px', 
      fontFamily: 'monospace',
      fontSize: '14px',
      minWidth: '200px'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
        Current Time ({ props.config.timezone })
      </div>
      <div>{localTime}</div>
    </div>
  );
};

export default CurrentTime;

