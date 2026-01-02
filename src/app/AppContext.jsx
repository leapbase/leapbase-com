import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppDataProvider = ({ children, config }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      let appData = config.app || {};
      try {
        setLoading(true);
        appData.message = 'app test message';
        setData(appData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const value = { data, loading, error };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppData = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppData must be used within AppDataProvider');
  return context;
};
