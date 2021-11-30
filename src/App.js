import { useState } from 'react';
import './App.css';

//components
import Header from './components/Header';
import InputForm from './components/InputForm';
//import List from './components/List';

function App() {
  const [listContainer, setListContainer] = useState(["item 1", "item 2", "item 3"]);

  return (
    <div className="App">
      <Header />
      <InputForm />
    {listContainer}
    </div>
  );
}

export default App;
