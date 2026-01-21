'use client';

import { createContext, useContext, ReactNode } from 'react';

const ProgettoContext = createContext(null);

export function ProgettoProvider({ children, dati }) {
    return (
        <ProgettoContext.Provider value={dati}>
            {children}
        </ProgettoContext.Provider>
    );
}

export function useProgetto() {
    const context = useContext(ProgettoContext);
    if (!context) {
        throw new Error('useProgetto deve essere usato dentro ProgettoProvider');
    }
    return context;
}
