import React from 'react';
import ReactDOM from 'react-dom';
import Components from '../util/components';
import { PageDataProvider } from './PageContext';
import Cabinet from '../components/Cabinet';
import { addUidToData } from "../util/tool";
import data from './PageSink.json'; 
import './PageSink.css';

let blockData = addUidToData(data);

const PageSink = () => {
  let components = blockData.content && blockData.content.components || [];
  
  return (
    <PageDataProvider config={data.content && data.content.config}>
      <div className="AppPageSink">
        <h4><a href="/">Home</a> / Sink Page</h4>
        <hr />
        <Cabinet />
        <hr />
        {components.map(block => {
          return <div key={block.uid}> 
            {Components(block)}
            <br />
          </div>
        })}
      </div>
    </PageDataProvider>
  );
};

export default PageSink;
