import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function DecisionPage({ selectedItem }) {
    return (
        <div>
           <Header /> 
           <div className="selected-item">{selectedItem}</div>
           <Link to={{pathname:"/"}}>
           <button>Make Another Decision</button>
           </Link>
        </div>
    )
}

export default DecisionPage
