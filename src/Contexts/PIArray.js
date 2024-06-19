import React, { createContext, useState } from 'react';

export const PiNodesContext = createContext();

export const PiNodesProvider = ({ children }) => {
  const [piNodes, setPiNodes] = useState([]);

  const addPiNode = (newNode) => {
    setPiNodes([...piNodes, newNode]);
  };

  const deletePiNode = (nodeId) => {
    setPiNodes(piNodes.filter(node => node.id !== nodeId));
  };

  const getAllPiNodes = () => {
    return piNodes;
  };

  const getPiNodesSize = () => {
    return piNodes.length;
  };

  return (
    <PiNodesContext.Provider value={{ piNodes, addPiNode, deletePiNode, getAllPiNodes, getPiNodesSize }}>
      {children}
    </PiNodesContext.Provider>
  );
};