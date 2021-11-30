import React from 'react';
import '../App.css';


function List({listContainer}) {
    const displayList = listContainer.map((item, index) => (
        <div key={index}>{item}</div>
    ) )

    return (
        <div className="list-container">
         {displayList}
            
        </div>
    )
}

export default List
