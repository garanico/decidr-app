import React, { useState } from 'react';
import '../App.css';

function InputForm({ listContainer, setListContainer }) {

    const [newItem, setNewItem] = useState('');
    const formSubmit = (event) => {
        event.preventDefault();
        //console.log('new item',newItem);
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
            className="btn" 
            onClick={formSubmit}>Add Choice</button> 
        </form>
    )
}

export default InputForm




// function InputForm() {


//     // const [listContainer, setListContainer] = useState(["item 1", "item 2", "item 3"]);
//     // const {input, setInput} = useState('');

//     // const handleSubmit = e => {
//     //     e.preventDefault();

//     //     const addToList = () => {
//     //         setListContainer([...listContainer, { item: input}])
//     //     }
//     // }

//     // const addToList = () => {
//     //     setListContainer([...listContainer, { item: input}])
//     }

//     return (
//         <>











//         {/* <form className="input-form" onSubmit={handleSubmit}>
//             <input 
//             type="text" 
//             placeholder="Enter your choices..."
//             value={input}
//             name="text"
//             className="input-field"
//             />
//             <button className="add-btn">Add Choice</button>   
//         </form> */}
//         </>
//     );
// }

// export default InputForm
