import React, { useContext   , useState} from 'react';
import AuthContext from '../../context/authcontext';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function Register()
{
    const {getLoggedin} = useContext(AuthContext);
    const [email , setEmail] = useState("");
    const [password , setpassword] = useState("");
    const [passwordVerify , setVerifyPassword] = useState("");
    const navigate = useNavigate();

    async function register(e)
    {
        e.preventDefault();

        try {
            
            const registerData = 
            {
                email , password , passwordVerify
            };

            await axios.post("http://localhost:8000/auth" , registerData);
            await getLoggedin();
            navigate("/")


        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <div>
            <h1>Register a new account</h1>
            <form onSubmit={register}>
                <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={(e)=> setpassword(e.target.value)}/>
                <input type="password" placeholder='Enter your password again' onChange={(e)=> setVerifyPassword(e.target.value)}/>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
}
export default Register;