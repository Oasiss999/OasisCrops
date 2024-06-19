import React, { createContext, useState } from 'react';

export const PiNodeContext = createContext();

export const PiNodeProvider = ({ children }) => {
  const [piNode, setPiNode] = useState({ name: 'Initial name', ipAddress: 'Initial IP address' });

  const updatePiNode = (newName, newIpAddress) => {
    setPiNode({ name: newName, ipAddress: newIpAddress });
  };

  return (
    <PiNodeContext.Provider value={{ piNode, updatePiNode }}>
      {children}
    </PiNodeContext.Provider>
  );
};