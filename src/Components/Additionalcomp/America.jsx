import React, { Component } from 'react';
import "./Blankpages.css";
import {Link} from "react-router-dom";
function America() {
    return (
            <div className="blankpage" >
              <p>Curretly empty</p>
              <p>Update  is coming soon...</p>
              <div><Link to=" /" className="goto-link">back to home</Link></div>
             </div>
    );
}

export default America;

