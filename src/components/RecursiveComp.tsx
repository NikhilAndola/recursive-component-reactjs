import { useState } from 'react';
import * as React from 'react';
import './App.css';

// import { data } from '../mocks/mock.json';

function RecursiveComp() {
  const [globalState, setGlobalState] = React.useState(null);

  console.log('globalState', globalState);

  React.useEffect(() => {
    const stateData = [
      {
        id: 1,
        name: 'Item 1',
        children: [
          { id: 2, name: 'Item 1.1' },
          { id: 3, name: 'Item 1.2' },
        ],
      },
      { id: 4, name: 'Item 2' },
    ];
    setGlobalState(stateData);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default RecursiveComp;
