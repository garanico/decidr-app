import React, { useState } from 'react';
import '../App.css';

function InputForm() {
    const [listContainer, setListContainer] = useState(["item 1", "item 2", "item 3"]);
    const {input, setInput} = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const addToList = () => {
            setListContainer([...listContainer, { item: input}])
        }
    }

    const addToList = () => {
        setListContainer([...listContainer, { item: input}])
    }

    return (
        <>
        <form className="input-form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Enter your choices..."
            value={input}
            name="text"
            className="input-field"
            />
            <button className="add-btn">Add Choice</button>   
        </form>
        </>
    )
}

export default InputForm
