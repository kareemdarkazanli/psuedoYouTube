import React from 'react';
import './NavBar.css'

const navBar = (props) => (
    <div className="nav-bar">
       <div style={{backgroundColor: "white", height:"100%", width: "950px"}}>
            <div style={{marginLeft:"40px", height:"100%", width: "100px", display: "inline-block", marginTop:"15px", verticalAlign: "center"}}>
                <img src="../../youtube-logo.png" alt="logo" style={{maxWidth: "100%", maxHeight:"100%"}}/>
            </div>
            <input onChange={props.changed} className="search-bar" type="text" id="searchquery" placeholder="Search" />
            <button onClick={props.click} className="search-button" type="button"><img style={{marginTop: "2px", maxWidth: "80%", maxHeight:"80%"}} src="../../icons8-search_filled.png"/></button>
       </div>
    </div>
    
);

export default navBar;