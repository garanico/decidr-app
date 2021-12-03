import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

//components
import Header from './Header';
import InputForm from './InputForm';
import List from './List';


function Homepage({ listContainer, setListContainer, setSelectedItem, selectedItem }) {
    
    const selectItem = () => {
        const random = Math.floor(Math.random() * listContainer.length);
        setSelectedItem(listContainer[random]);   
    }

    return (
        <div className="App">
          <Header />
          <InputForm 
            listContainer={listContainer}
            setListContainer={setListContainer} />
            <main>
                <List
                    listContainer={listContainer} />
            </main>
          <footer>
              
          <Link to={{pathname:"/decision"}}>
            <button className="choose-btn btn" onClick={selectItem}>Choose for me</button>
            </Link>
            
          </footer>
      </div>
    )
}

export default Homepage
