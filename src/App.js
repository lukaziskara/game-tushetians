import { useState } from 'react';
import './App.css';
import Chapter from './components/Chapter'
import tushetians from './tushetians_new.json';
// console.log(tushetians);

function App() {
  // const [openChapter, setOpenChapter] = useState(0);
  return (
    <div className="App">
      {/* <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div> */}
      {tushetians.map((chapter, index) =>
        <Chapter key={index} value={chapter} />
      )}
    </div>
 
  );
}

export default App;
