import React from 'react';
import { useAppData } from '../app/AppContext';
import { PageDataProvider } from './PageContext';

const PageHome = () => {
  const { data:appData, loading:appLoading, error:appError } = useAppData();
  console.log('PageHome appData:', appData);
  
  return (
    <PageDataProvider config={{}}>
      <div className="AppPage">
        <h2>App Home</h2>
        <h4>description: {appData && appData.message}</h4>
        <br/>
        <ul>
          <li><a href="/sink">Sink</a></li>
          <li><a href="/todo">Todo</a></li>
          <li><a href="/scouter">Scouter</a></li>
          <li><a href="/appui">App UI</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </PageDataProvider>
  )
};

export default PageHome;
