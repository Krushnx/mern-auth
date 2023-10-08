import axios from 'axios';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';


const AuthContext = createContext();
function AuthContextProvider(props)
{
    const [loggedIn , setLoggedIN] = useState(undefined);

    async function getLoggedin()
    {
        const loggedInRes = await axios.get("http://localhost:8000/auth/loggedIN");
        setLoggedIN(loggedInRes.data);
    }

    useEffect(()=>
    {
        getLoggedin();
    } , [])

    return(
        <AuthContext.Provider value={{loggedIn , getLoggedin}}>
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContext;
export {AuthContextProvider};