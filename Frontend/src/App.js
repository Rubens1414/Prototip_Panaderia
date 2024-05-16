import React from 'react';
import Navegador from './Components/Navegador/Navegador';
import AppRoutes from './AppRoutes';
import Loading from './Components/Loading/Loading';
import { useLoading } from './Hooks/useLoading';
import {setLoadingInterceptor} from './interceptors/loadingInterceptor';
import { useEffect } from 'react';



function App() {

  const {showLoading,hideLoading}=useLoading();
  useEffect(()=>{
    setLoadingInterceptor({showLoading,hideLoading});
  },[ showLoading,hideLoading]);
  return (
    <>
      <Loading/>
      <Navegador/>
       <AppRoutes/>
       
    </>
  );
}

export default App;
