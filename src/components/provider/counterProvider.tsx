import React from 'react';
import useCounter from "../hooks/useCounter";
import {LayoutProps} from "../types";

type CounterContextType = ReturnType<typeof useCounter>;


export const CounterContext = React.createContext<CounterContextType | undefined>(undefined);

export const useCounterContext = () => {
    const context = React.useContext(CounterContext);
    if (!context) {
        throw new Error('useCounterContext');
    }
    return context;
};

export const CounterProvider: React.FC<LayoutProps> = ({ children }) => {
    const counter = useCounter({initialCount: 100, step: 10});

    return (
        <CounterContext.Provider value={counter}>
            {children}
        </CounterContext.Provider>
    );
};