import axios from 'axios';
import React, { useContext } from 'react';
import AuthContext from '../../context/authcontext';
import { useNavigate } from 'react-router-dom';

function LogoutBTN()
{   const {getLoggedin} = useContext(AuthContext);
const navigate = useNavigate();

    async function logout()
    {
        await axios.get("http://localhost:8000/auth/logout");
        await getLoggedin();
        navigate('/');
    }
    return(
        <div>
            <button onClick={logout}>LogOut</button>
        </div>
    );
}
export default LogoutBTN;