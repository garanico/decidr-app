import React, { useState } from 'react';
import '../App.css';

function InputForm({ listContainer, setListContainer }) {

    const [newItem, setNewItem] = useState('');
    const formSubmit = (event) => {
        event.preventDefault();
        setListContainer([...listContainer, newItem]);
        setNewItem('');
    }

    return (
        <form onSubmit={formSubmit}>
           <input 
           className="input" 
           value={newItem} 
           onChange={event => {setNewItem(event.target.value)}}
           placeholder="Enter your choices..."
            />
           <button 
            type="submit"
            className="add-btn btn" 
            onClick={formSubmit}>Add Choice</button> 
        </form>
    )
}

export default InputForm

