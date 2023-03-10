import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './Components/Main';
import Tooltip from '@mui/material/Tooltip';
import CancelIcon from '@mui/icons-material/Cancel';
import './globals.scss'
function App({close}) {
  const handleclose=()=>{
    close()
  }
  return (
    <>
    <div className="container mx-auto px-10 mb-8">
    <div className="border-b w-full inline-block border-blue-400 py-8">
      <div className="md:float-left block">
          <span className="cursor-pointer font-bold text-4xl text-white">Code Blog</span>
      </div>
      <div className="hidden md:float-left md:contents">
        {/* {categories.map((category, index) => (
          <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span>
        ))} */}
        {close&&(
      <div onClick={()=>handleclose()}>
            <Tooltip title="Close" arrow>
      <CancelIcon  sx={{fontSize:"40px",color:"white",marginLeft:"80%"}}/>
      </Tooltip>
      </div>
        )}
            
      </div>
    </div>
  </div>

  </>
  );
}

export default  App;
