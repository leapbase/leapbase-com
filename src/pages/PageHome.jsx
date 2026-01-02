import React from 'react';
import { useAppData } from '../app/AppContext';
import { PageDataProvider } from './PageContext';

const PageHome = () => {
  const { data:appData, loading:appLoading, error:appError } = useAppData();
  // console.log('PageHome appData:', appData);
  
  return (
    <PageDataProvider config={{}}>
      <div className="AppPage">
        <h2>Welcome to leapbase.com</h2>
        <br/>
        <ul>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </PageDataProvider>
  )
};

export default PageHome;
