import React from 'react'
//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import Teste from "./pages/Teste";
import { PrivateRoute } from './_components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="create-user" element={<CreateUser />}/>
        </Route>
        <Route path="teste" element={<PrivateRoute><Teste /></PrivateRoute>}/>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Alteração
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <button onClick={()=> setClicks(clicks+1)} className={()=>{ if(clicks % 2 == 0) return "par"; else return "impar"; }}>
    //       {clicks}
    //     </button>
    //   </header>
    // </div>
  );
}

export default App;
