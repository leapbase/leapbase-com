import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ScoutContext = createContext();

export const ScoutDataProvider = ({ children, config }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchDomainList = async () => {
    try {
      setLoading(true);
      const response = await axios(`${config.apiUrl}${config.sideDataPath}`, {
        headers: { 'x-api-key': `${config.apiKey}` }
      });
      let result = { data:response.data };
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const fetchDomainData = async (domain) => {
    // console.log('>>> fetchDomainData', domain);
    try {
      setLoading(true);
      const response = await axios(`${config.apiUrl}${config.domainDataPath}?domain=${domain}`, {
        headers: { 'x-api-key': `${config.apiKey}` }
      });
      // console.log('>>> fetchDomainData data:', response.data);
      setData({ ...data, selectedItem:domain, domain:response.data });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const selectItem = async (domain, index) => {
    await fetchDomainData(domain);
  };
  
  useEffect(() => {
    fetchDomainList();
  }, []);
  
  const value = { data, loading, error, refetch: () => fetchDomainList(), selectItem };

  return (
    <ScoutContext.Provider value={value}>
      {children}
    </ScoutContext.Provider>
  );
};

export const useScoutData = () => {
  const context = useContext(ScoutContext);
  if (!context) throw new Error('useScoutData must be used within ScoutDataProvider');
  return context;
};
