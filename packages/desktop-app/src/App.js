import React from 'react';
import './App.css';
import ChatPanel from './components/ChatPanel';
import FilePanel from './components/FilePanel';
import PreviewPanel from './components/PreviewPanel';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <ChatPanel />
        <FilePanel />
        <PreviewPanel />
      </div>
    </div>
  );
}

export default App;
