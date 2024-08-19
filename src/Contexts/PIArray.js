import React, { createContext, useState, useContext } from 'react';
import { PiNodeContext } from './PiNode';

export const PiContext = createContext();

export const PiProvider = ({ children }) => {
  const { piNode } = useContext(PiNodeContext);
  const [selectedPINode, setSelectedPINode] = useState(null);
  const [currentPINode, setCurrentPINode] = useState(piNode || null);
  const [piNodes, setPiNodes] = useState([]);

  const updatePINode = (node) => {
    setSelectedPINode(node);
    setCurrentPINode(node);
  };

  const getSelectedPINode = () => {
    return selectedPINode;
  };

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

  const returnNodeWithIP = (ip) => {
    
    return piNodes.find(node => node.ipAddress === ip);
  };

  const updateCurrentPINode = (node) => {
    setCurrentPINode(node);
  };

  const getCurrentPINode = () => {
    return currentPINode;
  };

  return (
    <PiContext.Provider value={{
      selectedPINode,
      currentPINode,
      piNodes,
      updatePINode,
      getSelectedPINode,
      addPiNode,
      deletePiNode,
      getAllPiNodes,
      getPiNodesSize,
      returnNodeWithIP,
      updateCurrentPINode,
      getCurrentPINode
    }}>
      {children}
    </PiContext.Provider>
  );
};
