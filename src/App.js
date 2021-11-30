import { useState } from 'react';
import './App.css';

//components
import Header from './components/Header';
import InputForm from './components/InputForm';
//import List from './components/List';

function App() {
  const [listContainer, setListContainer] = useState([]);

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
