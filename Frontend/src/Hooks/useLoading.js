import React, { useState, createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoadingContext = createContext({});

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation(); // Hook de react-router-dom para acceder a la ubicación actual

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Ajusta este tiempo según sea necesario
    };

    const specificRoutes = ['/', '/cart', '/register','/login'];

    useEffect(() => {
        // Comprueba si la ruta actual está en la lista de rutas específicas
        if (specificRoutes.includes(location.pathname)) {
            showLoading();
        } else {
            hideLoading();
        }

        return () => {
            hideLoading();  // Asegurar que el loading se oculta cuando el componente o la ruta cambian
        };
    }, []); // Dependencia en la ruta actual

    return (
        <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);