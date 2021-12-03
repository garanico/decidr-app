import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function DecisionPage({ selectedItem, setListContainer }) {
    return (
        <div>
           <Header /> 
           <div className="selected-item">{selectedItem}</div>
           <Link to={{pathname:"/"}}>
           <button className="restart-btn btn" onClick={() => setListContainer([])}>Make Another Decision</button>
           </Link>
        </div>
    )
}

export default DecisionPage
