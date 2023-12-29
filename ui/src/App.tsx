import { useState, useEffect } from 'react';
import PeriodicTable from './PeriodicTable';
import Element from './Element';

import './App.css';

function App() {
  const [ elements, setElements ] = useState<Element[] | null>(null);

  useEffect(() => {
    if (elements === null) {
      fetch('/elements')
      .then(res => res.json())
      .then(res => {
        setElements(res.elements);
      });
    }
  }, [elements]);

  return (
    <div className="App">
      <PeriodicTable elements={elements ? elements : []}/>
    </div>
  );
}

export default App;
