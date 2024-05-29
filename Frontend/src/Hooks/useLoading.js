import React, { useState, createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoadingContext = createContext({});

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    };

    const specificRoutes = ['/', '/cart', '/register', '/login'];

    useEffect(() => {
        // Mostrar loading al cambiar de ruta
  
        // Ocultar loading después de 1 segundo si la ruta está en las rutas específicas
        if (specificRoutes.includes(location.pathname)) {
            showLoading();
            hideLoading();
        }

        return () => {
            hideLoading();  // Asegurar que el loading se oculta cuando el componente o la ruta cambian
        };
    }, [location.pathname]); // Dependencia en la ruta actual

    return (
        <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
