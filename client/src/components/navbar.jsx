import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/authcontext';
import LogoutBTN from './auth/logoutBTN';

function Navbar()
{
    const {loggedIn} = useContext(AuthContext);
    console.log(loggedIn);
    return(
        <div>
            <Link to = "/">Home</Link>
            {
                loggedIn === false && <>
                <Link to = "/register">register</Link>
                <Link to = "/login">Log in</Link>
                </>
            }
            {
                loggedIn === true && <>
                <Link to = "/customer">customer</Link>
                <LogoutBTN />
                </>
            }
            
        </div>
    );
}
export default Navbar;