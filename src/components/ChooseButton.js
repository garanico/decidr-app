import React from 'react';
import '../App.css';

function ChooseButton({listContainer, setListContainer}) {
    return (

        <button 
        className="choose-btn" 
        onClick={()=> selectItem(setListContainer)}>Choose For Me!
        </button>
       
    )
}

export default ChooseButton
