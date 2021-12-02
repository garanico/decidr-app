import { useState } from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';

//components
import Homepage from './components/Homepage'
import DecisionPage from './components/DecisionPage';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={
          <Homepage
          listContainer={listContainer}
          setListContainer={setListContainer}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        }/>
        <Route exact path="/decision" element={
          <DecisionPage
          listContainer={listContainer}
          setListContainer={setListContainer}
          selectedItem={selectedItem} />
        }/>
      </Routes>
    </HashRouter>
    
  );
}

export default App;
