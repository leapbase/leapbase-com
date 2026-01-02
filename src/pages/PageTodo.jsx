import React from 'react';
import ReactDOM from 'react-dom';
import Components from '../util/components';
import { PageDataProvider } from './PageContext';
import { addUidToData } from "../util/tool";
import data from './PageTodo.json'; 
import './PageTodo.css';

let blockData = addUidToData(data);

const PageTodo = () => {
  let components = blockData.content && blockData.content.components || [];
  
  return (
    <PageDataProvider config={data.content && data.content.config}>
      <div className="AppPageTodo">
        <h4><a href="/">Home</a> / Todo Page</h4>
        <br /><hr /><br />
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

export default PageTodo;
