import React from 'react';
/*
 * NOTE: To use this component, you must install the Monaco Editor package.
 * Run the following command in the 'packages/desktop-app' directory:
 * yarn add @monaco-editor/react
 */
import Editor from '@monaco-editor/react';
import './CodeEditor.css';

function CodeEditor({ fileContent, language }) {
  if (!fileContent) {
    return (
      <div className="editor-placeholder">
        Select a file to view its content.
      </div>
    );
  }

  return (
    <div className="editor-container">
      <Editor
        height="100%"
        language={language || 'javascript'}
        value={fileContent}
        theme="vs-dark"
        options={{
          readOnly: false,
          minimap: { enabled: true },
        }}
      />
    </div>
  );
}

export default CodeEditor;
