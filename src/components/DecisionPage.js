import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../App.css';

function DecisionPage({ selectedItem, setListContainer }) {
    return (
        <div className="App">
           <Header /> 
           <div className="answer-parent">
                <div className="box1 box">
                    <div className="box2 box">
                        <div className="box3 box">
                            <div className="selected-item box">{selectedItem}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={{pathname:"/"}}>
           <button className="restart-btn btn" onClick={() => setListContainer([])}>Make Another Decision</button>
           </Link>
        </div>
    )
}

export default DecisionPage
