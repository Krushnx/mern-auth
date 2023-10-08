import React, { useContext   , useState} from 'react';
import AuthContext from '../../context/authcontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Login()
{
    const navigate = useNavigate();
    const {getLoggedin} = useContext(AuthContext);
    const [email , setEmail] = useState("");
    const [password , setpassword] = useState("");

    async function login(e)
    {
        e.preventDefault();

        try {
            
            const loginData = 
            {
                email , password 
            };

            await axios.post("http://localhost:8000/auth/login" , loginData);
            await getLoggedin();
            navigate('/');



        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <div>
            <h1>Login a new account</h1>
            <form onSubmit={login}>
                <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={(e)=> setpassword(e.target.value)}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}
export default Login;