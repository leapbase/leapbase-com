import React, { createContext, useContext, useState, useEffect } from 'react';
const PageContext = createContext();

export const PageDataProvider = ({ children, config }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let pageData = { message:'Page test message' };
        setData(pageData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const value = { data, loading, error, refetch: () => fetchData() };
  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageData = () => {
  const context = useContext(PageContext);
  if (!context) throw new Error('usePageData must be used within PageDataProvider');
  return context;
};
