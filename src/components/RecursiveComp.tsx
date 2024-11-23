import * as React from 'react';
import './App.css';

// import { data } from '../mocks/mock.json';
const stateData = [
  {
    id: 1,
    name: 'Item 1',
    children: [
      { id: 2, name: 'Item 1.1', children: [] },
      { id: 3, name: 'Item 1.2', children: [] },
    ],
  },
  { id: 4, name: 'Item 2' },
];

function RecursiveComp() {
  const [globalState, setGlobalState] = React.useState<null | typeof stateData>(null);

  console.log('globalState', globalState);

  React.useEffect(() => {
    setGlobalState(stateData);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default RecursiveComp;
