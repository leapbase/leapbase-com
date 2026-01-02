import React from 'react';
import { useAppData } from '../app/AppContext';
import { PageDataProvider } from './PageContext';

const PageAbout = () => {
  const { data:appData, loading, error } = useAppData();
  let appName = appData && appData.name || 'no app name';
  
  return (
    <PageDataProvider config={{}}>
      <div className="AppPage">
        <h2>About Us</h2>
        <br />
        <h4>app name: {appName}</h4>
      </div>
    </PageDataProvider>
  )
};

export default PageAbout;
