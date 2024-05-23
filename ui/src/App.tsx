import { useState, useEffect } from 'react';
import PeriodicTable from './PeriodicTable/PeriodicTable';
import Element from './Element';

import './App.css';
import Details from './Details/Details';

const DETAILS = {
  "_id": "658e4f8024d93e7ef783a6b5",
  "symbol": "B",
  "name": "Boron",
  "atomicNumber": "5",
  "atomicWeight": "10.811",
  "electronicConfiguration": "[He]2s^22p^1",
  "period": 2,
  "group": 13,
  "__v": 0
};


function App() {
  const [ elements, setElements ] = useState<Element[] | null>(null);
  const [ selectedElement, setSelectedElement ] = useState<Element | null>(null);

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
      <PeriodicTable onElementSelected={(element: Element) => { setSelectedElement(element ? element : DETAILS); }} elements={elements ? elements : []}/>
      <Details element={selectedElement}/>
    </div>
  );
}

export default App;
