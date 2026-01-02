import React, { createContext, useContext, useState, useEffect } from 'react';
const BlockContext = createContext();

export const BlockDataProvider = ({ children, config }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // const response = await fetch('/api/users'); // Your API endpoint
        // if (!response.ok) throw new Error(`HTTP ${response.status}`);
        // const result = await response.json();
        
        let result = { message:'BlcokContext', rating:3 };
        setData(result);
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
    <BlockContext.Provider value={value}>
      {children}
    </BlockContext.Provider>
  );
};

export const useBlockData = () => {
  const context = useContext(BlockContext);
  if (!context) {
    // throw new Error('useBlockData must be used within BlockDataProvider');
    // console.log('useBlockData: BlockContext is not available');
  }
  return context;
};
