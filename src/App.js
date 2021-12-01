import { useState } from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';

//components
import Header from './components/Header';
import InputForm from './components/InputForm';
import List from './components/List';
import ChooseButton from './components/ChooseButton';

function App() {
  const [listContainer, setListContainer] = useState([]);

  const [selectedItem, setSelectedItem] = useState('');

  const selectItem = () => {
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem(listContainer[random]);
  }

  //console.log('List Container',listContainer);
  console.log('selected item',selectedItem);
  return (
    <HashRouter>
    <div className="App">
      <Header />
      <InputForm 
      listContainer={listContainer}
      setListContainer={setListContainer} />
      <List
      listContainer={listContainer} />

      <ChooseButton
      listContainer={listContainer}
      setListContainer={setListContainer}
      selectedItem={selectedItem}
      />

      {/* <button onClick={selectItem}>Choose for me</button> */}
    </div>
          <Route path="/decision">
            <DecisionPage />
          </Route>
      </HashRouter>
    
  );
}

export default App;
