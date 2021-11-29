import { useState } from 'react';

function App() {
  const [listContainer, setListContainer] = useState(["item 1", "item 2", "item 3"]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Decidr</h1>
        <p>An app for indecisive people.</p>
      </header>
    </div>
  );
}

export default App;
