import React from 'react';
import ReactDOM from 'react-dom';
import Components from '../util/components';
import { useAppData } from '../app/AppContext';
import { PageDataProvider } from './PageContext';
import { addUidToData } from "../util/tool";
import data from './PageScouter.json'; 

let blockData = addUidToData(data);

const PageScouter = () => {
  const { data:appData, loading:appLoading, error:appError } = useAppData();
  console.log('PageScouter appData:', appData);
  let pageData = data.content && data.content.config;
  let pageConfig = { app:appData, page:pageData };
  
  return (
    <PageDataProvider config={pageConfig}>
      <div className="AppPage">
        {blockData.content.components.map(block => {
          return <div key={block.uid}> 
            {Components(block)}
          </div>
        })}
      </div>
    </PageDataProvider>
  );
};

export default PageScouter;


