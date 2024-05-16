import { useState,createContext,useContext } from "react";

import * as userServices from '../Services/userServices';

import { toast } from "react-toastify";


const AuthContext=createContext(null);

export const AuthProvider=({children})=>{  
    const [user,setUser]=useState(userServices.getUser());
    
    const login=async(email,password)=>{
        try {
            const user=await userServices.login(email,password);
            console.log(user);
            setUser(user);
           
            toast.success('Login Successful');
        } catch (error) {
        
           toast.error('Invalid email or password');
        }
    }
     const register=async(registerData)=>{
        try {
            const user=await userServices.register(registerData);
            setUser(user);
            toast.success('Register Successful');
        } catch (error) {
            //enviar mensaje de error
            toast.error('User already exists');
        }
    }
    const logout=()=>{
        userServices.logout();
        setUser(null);
        toast.success('Logout Successful');
    }
   const updateProfile = async user => {
    const updatedUser = await userServices.updateProfile(user);
    toast.success('Profile Updated');
    if(updatedUser){
        setUser(updatedUser);
    }
    };
    const changePassword = async passwords => {
            await userServices.changePassword(passwords);
            logout();
            toast.success('Password Changed, Please Login Again');
    };
    return (
    <AuthContext.Provider value={{user,login,logout,register,updateProfile, changePassword,}}>
        {children}
    </AuthContext.Provider>  
    );
};

export const useAuth=()=>useContext(AuthContext);