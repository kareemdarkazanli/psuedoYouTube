import React from 'react';
import './NavBar.css'

const navBar = (props) => (
    <div className="nav-bar">
       <div style={{backgroundColor: "white", height:"100%", width: "950px"}}>
            <div style={{marginLeft:"20px" ,backgroundColor: "red", height:"100%", width: "50px", display: "inline-block"}}>
            </div>
            <div style={{marginLeft:"40px" ,backgroundColor: "red", height:"100%", width: "100px", display: "inline-block"}}>
            </div>
            <input onChange={props.changed} className="search-bar" type="text" id="searchquery" placeholder="Search" />
            <button onClick={props.click} className="search-button" type="button"></button>
       </div>
    </div>
    
);

export default navBar;