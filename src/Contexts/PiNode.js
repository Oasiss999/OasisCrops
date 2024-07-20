import React, { createContext, useState } from 'react';

export const PiNodeContext = createContext({ name: 'Initial name', ipAddress: '0.0.0.0' });

export const PiNodeProvider = ({ children }) => {
  const [piNode, setPiNode] = useState({ name: 'Initial name', ipAddress: '0.0.0.0' });

  const updatePiNode = (newName, newIpAddress) => {
    setPiNode({ name: newName, ipAddress: newIpAddress });
  };

  const createPiNode = (name, ipAddress) => {
    const newPiNode = { name, ipAddress };
    setPiNode(newPiNode); 
    return newPiNode; 
  }

  

  return (
    <PiNodeContext.Provider value={{ piNode, updatePiNode,createPiNode }}>
      {children}
    </PiNodeContext.Provider>
  );
};
