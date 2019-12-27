import React, { useState } from 'react';

const PanContext = React.createContext();

const PanProvider = ({children}) => {
    const [panDistance, setPanDistance] = useState(0);
    const [panReleased, setPanReleased] = useState(false);
    const [panY, setPanY] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    return (
        <PanContext.Provider value={{
            panDistance, setPanDistance, panReleased, setPanReleased, panY, setPanY, scrollY, setScrollY
        }}>
            {children}
        </PanContext.Provider>
    );
};

const usePanAnimation = () => {
    return React.useContext(PanContext);
};

export { PanContext, PanProvider, usePanAnimation };
