import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppDataProvider } from './AppContext';
import PageHome from '../pages/PageHome';
import PageScouter from '../pages/PageScouter';
import PageAppUI from '../pages/PageAppUI';
import PageSink from '../pages/PageSink';
import PageTodo from '../pages/PageTodo';
import PageAbout from '../pages/PageAbout';
import appData from './app-data.json'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppDataProvider config={appData.content}>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/scouter" element={<PageScouter />} />
            <Route path="/todo" element={<PageTodo />} />
            <Route path="/appui" element={<PageAppUI />} />
            <Route path="/sink" element={<PageSink />} />
            <Route path="/about" element={<PageAbout />} />
          </Routes>
        </AppDataProvider>
      </div>
    </BrowserRouter>
  );
}

export default App
