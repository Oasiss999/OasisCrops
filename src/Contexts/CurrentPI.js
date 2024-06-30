import React, { createContext, useContext } from 'react';
import { PiNodeContext } from './PiNode';

const CurrentNodeContext = createContext();

export const CurrentNodeProvider = ({ children }) => {
    const { piNode, setPiNode } = useContext(PiNodeContext); // Assuming PiNodeContext provides piNode and setPiNode

    const updatePINode = (node) => {
        setPiNode(node); // Update the current Pi node
    };

    const getPINode = () => {
        return piNode; // Return the current Pi node
    };

    return (
        <CurrentNodeContext.Provider value={{ piNode, updatePINode, getPINode }}>
            {children}
        </CurrentNodeContext.Provider>
    );
};

export default CurrentNodeContext;