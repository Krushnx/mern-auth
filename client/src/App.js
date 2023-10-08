import React from "react";
import Myrouter from "./router";
import axios from "axios";
import { AuthContextProvider } from "./context/authcontext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
        <Myrouter />
    </AuthContextProvider>
  );
}

export default App;
