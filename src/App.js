import { useState } from 'react';

//components
import Header from './components/Header';
import InputForm from './components/InputForm';

function App() {
  const [listContainer, setListContainer] = useState(["item 1", "item 2", "item 3"]);

  return (
    <div className="App">
      <Header />
      <InputForm />
    </div>
  );
}

export default App;
