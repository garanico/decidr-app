import { useState } from 'react';
import './App.css';

//components
import Header from './components/Header';
import InputForm from './components/InputForm';
//import List from './components/List';

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
    <div className="App">
      <Header />
      <InputForm 
      listContainer={listContainer}
      setListContainer={setListContainer} />
      <button onClick={selectItem}>Choose for me</button>
    </div>
  );
}

export default App;