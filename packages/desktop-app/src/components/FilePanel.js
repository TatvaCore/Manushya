import React, { useState } from 'react';
import FileTree from './FileTree';
import CodeEditor from './CodeEditor';
import './FilePanel.css';

const sampleFiles = [
  {
    name: 'src',
    type: 'folder',
    children: [
      { name: 'App.js', type: 'file', content: 'console.log("Hello, App!");' },
      { name: 'index.js', type: 'file', content: 'import App from "./App";' },
      {
        name: 'components',
        type: 'folder',
        children: [
          { name: 'ChatPanel.js', type: 'file', content: 'export default function ChatPanel() {}' }
        ]
      },
    ],
  },
  { name: 'package.json', type: 'file', content: '{ "name": "my-app" }' },
];

function getLanguage(filename) {
  const extension = filename.split('.').pop();
  switch (extension) {
    case 'js':
      return 'javascript';
    case 'css':
      return 'css';
    case 'json':
      return 'json';
    case 'html':
      return 'html';
    default:
      return 'plaintext';
  }
}

function FilePanel() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    if (file.type === 'file') {
      setSelectedFile(file);
    }
  };

  return (
    <div className="panel file-panel">
      <FileTree files={sampleFiles} onFileSelect={handleFileSelect} />
      <CodeEditor
        fileContent={selectedFile?.content}
        language={selectedFile ? getLanguage(selectedFile.name) : 'plaintext'}
      />
    </div>
  );
}

export default FilePanel;
