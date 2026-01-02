import React from 'react';
import ReactDOM from 'react-dom';
import Components from '../util/components';
import { PageDataProvider } from './PageContext';
import { addUidToData } from "../util/tool";
import data from './PageAppui.json'; 

let blockData = addUidToData(data);

const PageAppUI = () => {
  return (
    <PageDataProvider config={data.content}>
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

export default PageAppUI;
