import React, { useContext } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Register from './components/auth/register';
import Login from './components/auth/login';
import AuthContext from './context/authcontext';

function Home() {
  return <div>Home</div>;
}




function Customer() {
  return <div>Customer</div>;
}

function MyRouter() {

  const {loggedIn} = useContext(AuthContext);
  
    return (


        <Router>
            <Navbar />
            <Routes>
            <Route exact path='/' element={<Home />} />
            { loggedIn === false && <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />     
            </>}
            {
              loggedIn === true && <Route path="/customer" element={<Customer />} />   
            }
              
        </Routes></Router>
           
          );
}

export default MyRouter;
