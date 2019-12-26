import React, { useState } from 'react';

const PanContext = React.createContext();

const PanProvider = ({children}) => {
    const [panDistance, setPanDistance] = useState(0);
    const [panReleased, setPanReleased] = useState(false);
    return (
        <PanContext.Provider value={{
            panDistance, setPanDistance, panReleased, setPanReleased
        }}>
            {children}
        </PanContext.Provider>
    );
};

const usePanAnimation = () => {
    return React.useContext(PanContext);
};

export { PanContext, PanProvider, usePanAnimation };
