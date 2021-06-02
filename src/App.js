import React , {useState} from "react";
import BrandTable from "./components/BrandTable";
import './App.css'
import NI from './images/NI-logo.svg'
import {FiFilter} from 'react-icons/fi'
import { Route, Link } from 'react-router-dom'

function App() {
 
  return (
    <>

    <div className="grid" >
    <div className="panel">
    <img style={{width:"200px", height:"200px", padding:"0"}} src={NI} alt="NI-logo"></img>
    <FiFilter/>
    </div>
    
    <div className="brand-dir">
    <header className="header">
      Brand Directory
    </header>
    <div className="App">
    <Route path='/'>
    <BrandTable  />
    </Route>
    </div>  

    </div>
   
    
    </div>
    
    </>
  );
}

export default App;