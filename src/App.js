import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [listContainer, setListContainer] = useState(["item 1", "item 2", "item 3"]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
