import React, { createContext, useState } from 'react';

const PINodeContext = createContext();

export const PINodeProvider = ({ children }) => {
    const [selectedPINode, setSelectedPINode] = useState(null);

    const updatePINode = (node) => {
        setSelectedPINode(node);
    };

    const getPINode = () => {
        return selectedPINode;
    };

    return (
        <PINodeContext.Provider value={{ selectedPINode, updatePINode, getPINode }}>
            {children}
        </PINodeContext.Provider>
    );
};

export default PINodeContext;