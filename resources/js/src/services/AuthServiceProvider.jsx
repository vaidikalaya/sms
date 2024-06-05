import React, { createContext, useContext, useState,useEffect } from 'react';
import axios from './axios';
import axiosPrivate from './axiosPrivate';

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [user,setUser]=useState();
  const [authRole, setAuthRole] = useState();

  useEffect(()=>{
    
    const fetchUser=async ()=>{
      try{
        if(window.auth.isLoggedIn){
          axios.get("/sanctum/csrf-cookie").then((res) =>{});
          const res=await axiosPrivate.get('/wauser');
          if(res.data.code==200 && res.data.data){
            setUser(res.data.data);
            setAuthRole(res.data.data.role)
          }
        }
      }
      catch (error){
        if (error.response && error.response.status === 401) {
        } 
      }
    }

    fetchUser();
    
  },[])

  return (
    <UserContext.Provider value={{ user,setUser,authRole,setAuthRole}}>
      {children}
    </UserContext.Provider>
  );
};

export const authUser = () => useContext(UserContext);