import React from 'react';
import './FileTree.css';

const FileTree = ({ files, onFileSelect }) => {
  const renderTree = (nodes) => (
    <ul>
      {nodes.map((node) => (
        <li key={node.name} className={node.type}>
          <span onClick={() => onFileSelect(node)}>
            {node.type === 'folder' ? '📁' : '📄'} {node.name}
          </span>
          {node.children && renderTree(node.children)}
        </li>
      ))}
    </ul>
  );

  return <div className="file-tree">{renderTree(files)}</div>;
};

export default FileTree;
