import React from 'react';
import '../App.css';


function List({listContainer}) {
    const displayList = listContainer.map((item, index) => (
        <li className="list-item"key={index}>{item}</li>
    ) )

    return (
        <ul className="list-container">
         {displayList}
            
        </ul>
    )
}

export default List
