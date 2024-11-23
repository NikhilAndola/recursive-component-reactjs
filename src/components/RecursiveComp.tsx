import * as React from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';

// import { data } from '../mocks/mock.json';
const stateData = [
  {
    id: 1,
    name: 'Item 1',
    type: "Mango",
    children: [
      { id: 2, name: 'child 1.1', children: [], type: "Dusshari" },
      { id: 3, name: 'child 1.2', children: [  { id: 3, name: 'child 1.2.1', children: [], type: "I like it" },], type: "Kalmi" },
    ]
  },
  { id: 4, name: 'Item 2', type: "Banana", children: [{ id: 10, name: 'child 2.1', children: [], type: "formal" }] },
 {
    id: 1,
    name: 'Item 1',
    type: "Mango",
    children: [
      { id: 2, name: 'child 1.1', children: [], type: "Dusshari" },
      { id: 3, name: 'child 1.2', children: [  { id: 3, name: 'child 1.2.1', children: [], type: "I like it" },], type: "Kalmi" },
    ]
  },
  { id: 4, name: 'Item 2', type: "Banana", children: [{ id: 10, name: 'child 2.1', children: [], type: "formal" }] },
];

function RecursiveComp() {
  const [globalState, setGlobalState] = React.useState<null | typeof stateData | any>(null);

  console.log('globalState', globalState);

  React.useEffect(() => {
    setGlobalState(stateData);
  }, []);

  return (
    <>
      <RenderRecurse globalState={globalState} childCheck={false} />
    </>
  );
}

export default RecursiveComp;

type RenderRecurse = {
  globalState: any;
  childCheck: boolean,
}


const RenderRecurse: React.FC<RenderRecurse> = ({ globalState, childCheck = false }) => {
  return <div style={{overflowY: "auto"}}>
    {
      globalState?.map((global: any) => (
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: 'center'}}>
            <BiArrowFromLeft />
            <h3 style={{paddingLeft: "2px", borderLeft: `${childCheck ? "2px solid red" : "6px solid black"}`}}>{global?.name}</h3>
            <h5>{global?.type}</h5>
          </div>
          {
            global?.children?.length ?
              <div style={{ marginLeft: "80px", borderLeft: "2px dashed red"  }}>
                <RenderRecurse globalState={global?.children} childCheck={true} />
              </div>
              : null
          }
        </div>
      ))
    }
  </div>
}